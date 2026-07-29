import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
  label: string;
  /** Sin `to` el ítem se pinta como texto plano (nivel intermedio o actual). */
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  tone?: 'dark' | 'light';
}

export default function Breadcrumb({ items, tone = 'dark' }: BreadcrumbProps) {
  const toneClass = tone === 'dark' ? styles.onDark : styles.onLight;

  return (
    <nav className={`${styles.breadcrumb} ${toneClass}`} aria-label="Ruta de navegación">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Fragment key={`${item.label}-${index}`}>
            {item.to ? (
              <Link className={styles.link} to={item.to}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? styles.current : undefined} aria-current={isLast ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            {!isLast ? (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            ) : null}
          </Fragment>
        );
      })}
    </nav>
  );
}
