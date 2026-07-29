import styles from './PortalPromoCard.module.css';

/** Tarjeta navy de acceso al Portal del Paciente que acompaña al índice lateral. */
export default function PortalPromoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.eyebrow}>Portal del Paciente</div>
      <p className={styles.text}>Solicita tus prestaciones y consulta tu proceso online.</p>
      <a className={styles.link} href="https://pacientes.solimat.com/" target="_blank" rel="noopener noreferrer">
        Acceder →
      </a>
    </div>
  );
}
