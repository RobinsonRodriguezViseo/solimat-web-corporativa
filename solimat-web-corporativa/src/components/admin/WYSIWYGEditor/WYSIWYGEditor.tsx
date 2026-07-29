import { useRef } from 'react';
import styles from './WYSIWYGEditor.module.css';

interface WYSIWYGEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

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
      const allowedTags = ['p', 'b', 'strong', 'i', 'em', 'u', 'br', 'ol', 'ul', 'li', 'a'];
      
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

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    if (editorRef.current) {
      const html = editorRef.current.innerHTML;
      // Limpiar solo para guardar, pero no modificar el editor mientras escribe
      const cleanedHTML = cleanHTML(html);
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

  const insertOrderedList = () => {
    executeCommand('insertOrderedList');
  };

  const insertUnorderedList = () => {
    executeCommand('insertUnorderedList');
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

        <button
          type="button"
          title="Lista sin orden"
          onClick={insertUnorderedList}
          disabled={disabled}
          className={styles.toolButton}
        >
          ◦ ◦ ◦
        </button>

        <button
          type="button"
          title="Lista ordenada"
          onClick={insertOrderedList}
          disabled={disabled}
          className={styles.toolButton}
        >
          1. 2. 3.
        </button>

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
        onInput={handleInput}
        onPaste={handlePaste}
        className={styles.editor}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
