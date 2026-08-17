import type { FaqEntry } from '../../../data/preguntasFrecuentes';
import FaqRichText from '../FaqRichText';
import styles from './FaqItem.module.css';

interface FaqItemProps {
  entry: FaqEntry;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqItem({ entry, isOpen, onToggle }: FaqItemProps) {
  const buttonId = `faq-question-${entry.id}`;
  const panelId = `faq-answer-${entry.id}`;

  return (
    <div className={styles.item}>
      <button
        type="button"
        id={buttonId}
        className={styles.question}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className={styles.questionText}>{entry.question}</span>
        <span className={isOpen ? `${styles.icon} ${styles.iconOpen}` : styles.icon} aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen ? (
        <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.answer}>
          <FaqRichText blocks={entry.answer} />
        </div>
      ) : null}
    </div>
  );
}
