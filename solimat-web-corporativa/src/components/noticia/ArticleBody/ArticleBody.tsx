import type { Block } from '../../../data/noticias';
import styles from './ArticleBody.module.css';

interface ArticleBodyProps {
  blocks: Block[];
}

export default function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className={styles.body}>
      {blocks.map((block, index) => {
        const key = `${block.kind}-${index}`;

        if (block.kind === 'h') {
          return (
            <h2 key={key} className={styles.heading}>
              {block.text}
            </h2>
          );
        }

        if (block.kind === 'quote') {
          return (
            <blockquote key={key} className={styles.quote}>
              <p className={styles.quoteText}>{block.text}</p>
              {block.author ? <cite className={styles.quoteAuthor}>{block.author}</cite> : null}
            </blockquote>
          );
        }

        return <p key={key}>{block.text}</p>;
      })}
    </div>
  );
}
