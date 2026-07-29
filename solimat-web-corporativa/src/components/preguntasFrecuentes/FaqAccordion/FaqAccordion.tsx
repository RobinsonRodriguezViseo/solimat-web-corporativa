import { useState } from 'react';
import type { FaqEntry } from '../../../data/preguntasFrecuentes';
import FaqItem from '../FaqItem';
import styles from './FaqAccordion.module.css';

interface FaqAccordionProps {
  entries: FaqEntry[];
  /** Índice abierto al montar; `-1` deja el acordeón cerrado. */
  defaultOpenIndex?: number;
}

export default function FaqAccordion({ entries, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={styles.accordion}>
      {entries.map((entry, index) => (
        <FaqItem
          key={entry.id}
          entry={entry}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
        />
      ))}
    </div>
  );
}
