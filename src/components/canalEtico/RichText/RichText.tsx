import { Fragment } from 'react';
import styles from './RichText.module.css';

interface RichTextProps {
  /** Texto plano donde los fragmentos entre `**` se resaltan en negrita. */
  text: string;
}

/**
 * Renderiza énfasis en línea sin recurrir a `dangerouslySetInnerHTML`:
 * el texto se parte por `**` y las posiciones impares se envuelven en `<strong>`.
 */
export default function RichText({ text }: RichTextProps) {
  const parts = text.split('**');

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${index}-${part}`}>
          {index % 2 === 1 ? <strong className={styles.strong}>{part}</strong> : part}
        </Fragment>
      ))}
    </>
  );
}
