import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';
import styles from './AccentCta.module.css';

export type AccentCtaIcon = 'arrow' | 'file' | 'mail';

interface AccentCtaProps {
  href: string;
  children: ReactNode;
  icon?: AccentCtaIcon;
  size?: 'md' | 'lg';
  className?: string;
  /**
   * Fuerza un `<a>` que abre en pestaña nueva. Necesario para los assets que el
   * bundler resuelve a una ruta absoluta (`/assets/archivo.pdf`) y que no son rutas del router.
   */
  external?: boolean;
}

const ICONS: Record<AccentCtaIcon, ReactNode> = {
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  file: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  ),
  mail: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
};

export default function AccentCta({
  href,
  children,
  icon,
  size = 'md',
  className,
  external = false,
}: AccentCtaProps) {
  const classes = [styles.cta, size === 'lg' ? styles.lg : styles.md];
  if (className) classes.push(className);
  const finalClassName = classes.join(' ');

  const content = (
    <>
      {icon && icon !== 'arrow' ? ICONS[icon] : null}
      <span>{children}</span>
      {icon === 'arrow' ? ICONS[icon] : null}
    </>
  );

  if (!external && isInternalRoute(href)) {
    return (
      <Link className={finalClassName} to={href}>
        {content}
      </Link>
    );
  }

  const externalProps =
    external || isExternalHttpLink(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={finalClassName} href={href} {...externalProps}>
      {content}
    </a>
  );
}
