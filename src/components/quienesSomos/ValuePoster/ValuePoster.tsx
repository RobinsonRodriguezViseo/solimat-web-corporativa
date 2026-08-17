import styles from './ValuePoster.module.css';

interface ValuePosterProps {
  image: string;
  title: string;
  /** Texto corrido (Misión / Visión) — excluyente con `items`. */
  text?: string;
  /** Lista con checks (Valores) — excluyente con `text`. */
  items?: string[];
}

export default function ValuePoster({ image, title, text, items }: ValuePosterProps) {
  return (
    <div className={styles.poster}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.tint} />
      <div className={styles.scrim} />
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        {text ? <p className={styles.text}>{text}</p> : null}
        {items ? (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item} className={styles.listItem}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-300)"
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
