import type { CSSProperties, ReactNode } from 'react';
import type { TeamCategory } from '../../../data/nuestroEquipo';
import styles from './TeamCard.module.css';

interface TeamCardProps {
  id: string;
  category: TeamCategory;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  imageMinHeight: number;
  footer?: ReactNode;
}

const CATEGORY_LABEL: Record<TeamCategory, string> = {
  sanitario: 'Sanitario',
  gestion: 'Gestión',
};

function CategoryIcon({ category }: { category: TeamCategory }) {
  if (category === 'sanitario') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export default function TeamCard({
  id,
  category,
  title,
  paragraphs,
  image,
  imageAlt,
  imagePosition,
  imageMinHeight,
  footer,
}: TeamCardProps) {
  const imageStyle = { '--image-min-height': `${imageMinHeight}px` } as CSSProperties;

  const picture = <img className={styles.image} style={imageStyle} src={image} alt={imageAlt} />;

  return (
    <article className={styles.article} id={id}>
      <div className={styles.card}>
        <div className={styles.grid}>
          {imagePosition === 'left' ? picture : null}
          <div className={styles.body}>
            <div className={styles.badge}>
              <CategoryIcon category={category} />
              {CATEGORY_LABEL[category]}
            </div>
            <h3 className={styles.title}>{title}</h3>
            {paragraphs.map((paragraph) => (
              <p className={styles.text} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          {imagePosition === 'right' ? picture : null}
        </div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </article>
  );
}
