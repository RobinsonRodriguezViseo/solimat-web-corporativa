import { useEffect, useRef } from 'react';
import styles from './WYSIWYGEditor.module.css';

interface WYSIWYGEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const FONT_SIZE_OPTIONS = [12, 14, 16, 18, 20, 24, 28, 32];
const ALLOWED_FONT_SIZES = new Set(FONT_SIZE_OPTIONS.map((size) => `${size}px`));

// Función para limpiar y simplificar HTML
function cleanHTML(html: string): string {
  // Crear un div temporal para parsear
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Función recursiva para procesar nodos
  function processNode(node: Node): string {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || '';
    }
    
    if (node.nodeType === Node.ELEMENT_NODE) {
      const elem = node as Element;
      const tag = elem.tagName.toLowerCase();
      
      // Permitir solo etiquetas seguras
      const allowedTags = ['p', 'b', 'strong', 'i', 'em', 'u', 'br', 'ol', 'ul', 'li', 'a', 'span'];
      
      if (!allowedTags.includes(tag)) {
        // Si no es permitida, procesamos solo el contenido
        let content = '';
        node.childNodes.forEach(child => {
          content += processNode(child);
        });
        return content;
      }
      
      // Para <br> no cerramos
      if (tag === 'br') {
        return '<br/>';
      }
      
      // Procesar contenido
      let content = '';
      node.childNodes.forEach(child => {
        content += processNode(child);
      });
      
      // Para <a>, mantener href; para otros, solo etiqueta
      if (tag === 'a') {
        const href = elem.getAttribute('href') || '#';
        return `<a href="${href}">${content}</a>`;
      }

      if (tag === 'span') {
        const fontSize = elem instanceof HTMLElement ? elem.style.fontSize.trim() : '';

        if (fontSize && ALLOWED_FONT_SIZES.has(fontSize)) {
          return `<span style="font-size:${fontSize}">${content}</span>`;
        }

        return content;
      }
      
      return `<${tag}>${content}</${tag}>`;
    }
    
    return '';
  }
  
  // Procesar todos los nodos
  let result = '';
  temp.childNodes.forEach(node => {
    result += processNode(node);
  });
  
  return result;
}


export default function WYSIWYGEditor({
  value,
  onChange,
  placeholder = 'Escribe el contenido de la noticia...',
  disabled = false,
}: WYSIWYGEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const lastInternalValueRef = useRef<string>(value);

  useEffect(() => {
    const editor = editorRef.current;
    if (!editor) return;

    // Si el cambio viene del propio editor, evitamos reescribir el DOM
    // para conservar la posición del cursor.
    if (value === lastInternalValueRef.current) {
      return;
    }

    // No reescribimos el HTML en cada tecla para no perder la posición del cursor.
    if (editor.innerHTML !== value) {
      editor.innerHTML = value;
    }

    lastInternalValueRef.current = value;
  }, [value]);

  const isSelectionInsideEditor = () => {
    const selection = window.getSelection();
    const editor = editorRef.current;

    if (!selection || selection.rangeCount === 0 || !editor) {
      return false;
    }

    const range = selection.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    return editor.contains(commonAncestor);
  };

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      // Limpiar solo para guardar, pero no modificar el editor mientras escribe
      const cleanedHTML = cleanHTML(html);
      lastInternalValueRef.current = cleanedHTML;
      onChange(cleanedHTML);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    // Obtener datos del clipboard
    const htmlText = e.clipboardData.getData('text/html');
    const plainText = e.clipboardData.getData('text/plain');
    
    // Extraer SOLO texto limpio sin HTML
    let cleanText = '';
    
    if (htmlText) {
      // Crear elemento temporal y extraer solo texto
      const temp = document.createElement('div');
      temp.innerHTML = htmlText;
      cleanText = temp.textContent || temp.innerText || '';
    } else {
      cleanText = plainText;
    }
    
    if (!cleanText) return;
    
    // Normalizar espacios: convertir múltiples espacios/saltos a espacios simples
    cleanText = cleanText
      .replace(/\r\n/g, '\n') // Normalizar saltos de línea de Windows
      .replace(/[\t ]+/g, ' ') // Múltiples espacios o tabs a espacio simple
      .trim();
    
    // Dividir en párrafos
    let paragraphs: string[] = [];
    
    // Si tiene saltos de línea, usar eso como divisor
    if (cleanText.includes('\n')) {
      paragraphs = cleanText
        .split(/\n+/)
        .map(p => p.trim())
        .filter(p => p.length > 0);
    } else {
      // Sin saltos de línea: dividir por puntos seguidos de mayúscula
      const parts = cleanText.split(/(?<=[.!?])\s+(?=[A-Z])/);
      
      if (parts.length > 1) {
        paragraphs = parts.map(p => p.trim()).filter(p => p.length > 0);
      } else {
        // Si tampoco funciona, dividir por longitud
        let current = '';
        const maxLength = 400;
        
        cleanText.split(/[.!?]\s+/).forEach(sentence => {
          if ((current + sentence).length > maxLength && current) {
            paragraphs.push((current + (sentence.endsWith('.') ? '' : '.')).trim());
            current = sentence;
          } else {
            current = current ? current + ' ' + sentence : sentence;
          }
        });
        
        if (current) {
          paragraphs.push(current.trim());
        }
      }
    }
    
    // Convertir a HTML: solo párrafos simples
    const htmlContent = paragraphs
      .map(p => `<p>${p}</p>`)
      .join('');
    
    if (htmlContent && editorRef.current) {
      // Agregar al contenido existente
      const combined = editorRef.current.innerHTML + htmlContent;
      editorRef.current.innerHTML = combined;
      lastInternalValueRef.current = combined;
      onChange(combined);
      editorRef.current.focus();
      
      // Cursor al final
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  const addLink = () => {
    const url = prompt('Ingresa la URL:');
    if (url) {
      executeCommand('createLink', url);
    }
  };

  const applyFontSizeToSelection = (sizeInPx: string) => {
    if (!editorRef.current || !isSelectionInsideEditor()) {
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      return;
    }

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontSize = sizeInPx;

    try {
      range.surroundContents(span);
    } catch {
      const extractedContent = range.extractContents();
      span.appendChild(extractedContent);
      range.insertNode(span);
    }

    editorRef.current.focus();
    handleInput();
  };

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.toolbar}>
        <button
          type="button"
          title="Negrita (Ctrl+B)"
          onClick={() => executeCommand('bold')}
          disabled={disabled}
          className={styles.toolButton}
        >
          <strong>B</strong>
        </button>

        <button
          type="button"
          title="Cursiva (Ctrl+I)"
          onClick={() => executeCommand('italic')}
          disabled={disabled}
          className={styles.toolButton}
        >
          <em>I</em>
        </button>

        <button
          type="button"
          title="Subrayado (Ctrl+U)"
          onClick={() => executeCommand('underline')}
          disabled={disabled}
          className={styles.toolButton}
        >
          <u>U</u>
        </button>

        <div className={styles.separator} />

        <select
          aria-label="Tamaño de texto"
          className={styles.sizeSelect}
          defaultValue=""
          disabled={disabled}
          onChange={(event) => {
            const selectedSize = event.target.value;
            if (!selectedSize) return;
            applyFontSizeToSelection(selectedSize);
            event.target.value = '';
          }}
        >
          <option value="" disabled>
            Tamaño
          </option>
          {FONT_SIZE_OPTIONS.map((size) => (
            <option key={size} value={`${size}px`}>
              {size}px
            </option>
          ))}
        </select>

        <div className={styles.separator} />

        <button
          type="button"
          title="Enlace"
          onClick={addLink}
          disabled={disabled}
          className={styles.toolButton}
        >
          🔗
        </button>

        <button
          type="button"
          title="Limpiar formato"
          onClick={() => executeCommand('removeFormat')}
          disabled={disabled}
          className={styles.toolButton}
        >
          ✕
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable={!disabled}
        dir="ltr"
        onInput={handleInput}
        onPaste={handlePaste}
        className={styles.editor}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />
    </div>
  );
}
