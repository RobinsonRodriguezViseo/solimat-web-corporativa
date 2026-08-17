import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import type { FaqBlock, FaqFragment } from '../../../data/preguntasFrecuentes';
import styles from './FaqRichText.module.css';

interface FaqRichTextProps {
  blocks: FaqBlock[];
}

/**
 * Renderiza las respuestas como nodos React tipados en lugar de inyectar HTML:
 * evita por completo `dangerouslySetInnerHTML` (OWASP A03 — Injection).
 */
function renderFragment(fragment: FaqFragment, index: number) {
  switch (fragment.kind) {
    case 'route':
      return (
        <Link key={index} className={styles.link} to={fragment.to}>
          {fragment.text}
        </Link>
      );
    case 'external':
      return (
        <a key={index} className={styles.link} href={fragment.href} target="_blank" rel="noopener noreferrer">
          {fragment.text}
        </a>
      );
    case 'placeholder':
      return (
        <a key={index} className={styles.link} href="#">
          {fragment.text}
        </a>
      );
    default:
      return <Fragment key={index}>{fragment.text}</Fragment>;
  }
}

export default function FaqRichText({ blocks }: FaqRichTextProps) {
  return (
    <>
      {blocks.map((block, blockIndex) =>
        block.kind === 'list' ? (
          <ul key={blockIndex} className={styles.list}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.listItem}>
                {item.map(renderFragment)}
              </li>
            ))}
          </ul>
        ) : (
          <p key={blockIndex} className={blockIndex === blocks.length - 1 ? styles.lastParagraph : styles.paragraph}>
            {block.content.map(renderFragment)}
          </p>
        ),
      )}
    </>
  );
}
