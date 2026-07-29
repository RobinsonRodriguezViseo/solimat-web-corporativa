import type { GestorFunction } from '../../../data/nuestroEquipo';
import styles from './GestorFunctions.module.css';

interface GestorFunctionsProps {
  title: string;
  functions: GestorFunction[];
  footnote: string;
}

export default function GestorFunctions({ title, functions, footnote }: GestorFunctionsProps) {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.grid}>
        {functions.map((item) => (
          <div className={item.fullWidth ? `${styles.item} ${styles.itemFull}` : styles.item} key={item.number}>
            <span className={styles.number} aria-hidden="true">
              {item.number}
            </span>
            <p className={styles.text}>
              <strong className={styles.strong}>{item.strong}</strong>
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <p className={styles.footnote}>{footnote}</p>
    </div>
  );
}
