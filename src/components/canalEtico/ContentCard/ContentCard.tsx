import type { CanalEticoSubsection } from '../../../data/canalEtico';
import RichText from '../RichText';
import styles from './ContentCard.module.css';

interface ContentCardProps {
  subsection: CanalEticoSubsection;
}

export default function ContentCard({ subsection }: ContentCardProps) {
  const { id, title, card, blocks } = subsection;

  return (
    <div className={card ? `${styles.prose} ${styles.card}` : styles.prose} id={id}>
      <h3 className={styles.title}>{title}</h3>
      {blocks.map((block, index) =>
        block.kind === 'paragraph' ? (
          <p key={`p-${index}`} className={styles.paragraph}>
            <RichText text={block.text} />
          </p>
        ) : (
          <ul key={`ul-${index}`} className={styles.list}>
            {block.items.map((item) => (
              <li key={item} className={styles.listItem}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
