import styles from './CommitmentsCard.module.css';

const COMMITMENTS: string[] = [
  'Favorecer la creación de propuestas de mejora.',
  'Promover el accionamiento de las mejoras.',
  'Integrar su voz en nuestros protocolos.',
  'Ser nexo de unión entre usuarios y empleados.',
];

export default function CommitmentsCard() {
  return (
    <div className={styles.card}>
      <span className={styles.eyebrow}>Y nos comprometemos a</span>
      <ul className={styles.list}>
        {COMMITMENTS.map((commitment) => (
          <li key={commitment} className={styles.item}>
            {commitment}
          </li>
        ))}
      </ul>
    </div>
  );
}
