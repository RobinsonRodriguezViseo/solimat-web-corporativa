import type { ReactNode } from 'react';
import Button from '../../shared/Button';
import styles from './ActionButton.module.css';

type ActionButtonIcon = 'arrow' | 'file';

interface ActionButtonProps {
  children: ReactNode;
  /** Sin `href` se renderiza como `<button>` (formularios). */
  href?: string;
  type?: 'button' | 'submit';
  tone?: 'solid' | 'outline';
  icon?: ActionButtonIcon;
  /**
   * `true` cuando el destino es un asset servido por el bundler (PDF importado):
   * su ruta empieza por `/` pero no es una ruta del router, así que se enlaza con
   * un `<a>` normal en lugar de con el `Button` compartido.
   */
  asset?: boolean;
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** CTA de las páginas de trámites: reutiliza el `Button` compartido con el estilo del diseño. */
export default function ActionButton({
  children,
  href,
  type = 'button',
  tone = 'solid',
  icon,
  asset = false,
}: ActionButtonProps) {
  const className = tone === 'outline' ? `${styles.action} ${styles.outline}` : styles.action;
  const content = (
    <>
      {icon === 'file' ? <FileIcon /> : null}
      {children}
      {icon === 'arrow' ? <ArrowIcon /> : null}
    </>
  );

  if (href && asset) {
    return (
      <a className={`btn ${className}`} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Button href={href} className={className}>
        {content}
      </Button>
    );
  }

  return (
    <Button type={type} className={className}>
      {content}
    </Button>
  );
}
