import styles from './PrivacyNotice.module.css';

export default function PrivacyNotice() {
  return (
    <div className={styles.notice}>
      <p className={styles.paragraph}>
        <strong className={styles.strong}>Tratamiento de los datos por Solimat</strong>
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.strong}>Responsable:</strong> SOLIMAT
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.strong}>Finalidad:</strong> Gestionar las comunicaciones, adoptar las medidas
        correctivas correspondientes y, en caso de ser necesario, informarle sobre el resultado del procedimiento.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.strong}>Legitimación:</strong> Obligación legal.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.strong}>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación
        legal.
      </p>
      <p className={`${styles.paragraph} ${styles.last}`}>
        <strong className={styles.strong}>Derechos:</strong> Tiene derecho a acceder, rectificar y suprimir los
        datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a la
        Política de Privacidad o a{' '}
        <a className={styles.link} href="mailto:lopd@solimat.com">
          lopd@solimat.com
        </a>
        . También podrá dirigirse a la Agencia Española de Protección de Datos.
      </p>
    </div>
  );
}
