import { LEGISLATIVE_LINK_TEXT } from '../../../data/referenciasLegislativas';
import styles from './ReferenceItem.module.css';

interface ReferenceItemProps {
  title: string;
  description: string;
  url: string;
}

export default function ReferenceItem({ title, description, url }: ReferenceItemProps) {
  return (
    <article className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
        {LEGISLATIVE_LINK_TEXT}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <path d="M15 3h6v6M10 14L21 3" />
        </svg>
      </a>
    </article>
  );
}
