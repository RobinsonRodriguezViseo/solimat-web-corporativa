import type { ReactNode } from 'react';
import styles from './DownloadLink.module.css';

export type DownloadLinkIcon = 'file' | 'arrow';

export interface DownloadLinkItem {
  label: string;
  href: string;
  icon?: DownloadLinkIcon;
}

type DownloadLinkProps = DownloadLinkItem;

const ICONS: Record<DownloadLinkIcon, ReactNode> = {
  file: (
    <>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export default function DownloadLink({ label, href, icon = 'file' }: DownloadLinkProps) {
  return (
    <a className={styles.item} href={href} target="_blank" rel="noopener noreferrer">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        {ICONS[icon]}
      </svg>
      {label}
    </a>
  );
}
