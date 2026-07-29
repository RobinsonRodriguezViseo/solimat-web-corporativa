import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';
import styles from './QuickAccessTile.module.css';

interface QuickAccessTileProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export default function QuickAccessTile({ href, icon, title, description }: QuickAccessTileProps) {
  const content = (
    <>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.arrow}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </>
  );

  if (isInternalRoute(href)) {
    return (
      <Link className={styles.tile} to={href}>
        {content}
      </Link>
    );
  }

  const externalProps = isExternalHttpLink(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a className={styles.tile} href={href} {...externalProps}>
      {content}
    </a>
  );
}
