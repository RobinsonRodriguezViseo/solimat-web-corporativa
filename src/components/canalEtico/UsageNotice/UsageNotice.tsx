import styles from './UsageNotice.module.css';

export default function UsageNotice() {
  return (
    <div className={styles.notice}>
      <p className={styles.intro}>Este Canal no se debe utilizar para:</p>
      <ol className={styles.list}>
        <li className={styles.item}>
          Denunciar falsa o deliberadamente a otras personas. Solo se admiten comunicaciones de buena fe.
        </li>
        <li className={styles.item}>
          Comunicar quejas o reclamaciones sobre la gestión de prestaciones económicas o sanitarias que realiza
          SOLIMAT en el desarrollo de su actividad o el trato dispensado por nuestro personal, para lo cual le
          pedimos que acuda al canal específico de reclamaciones accesible en Quejas y Reclamaciones{' '}
          <a className={styles.link} href="mailto:QRSA@SOLIMAT.es">
            QRSA@SOLIMAT.es
          </a>{' '}
          o a través de la web de SOLIMAT, en el apartado Oficina Virtual de Reclamaciones.
        </li>
        <li className={styles.item}>
          Comunicar aspectos relacionados con la gestión de derechos en materia de protección de datos, las cuales
          deberán ser remitidas a la dirección{' '}
          <a className={styles.link} href="mailto:dpd@SOLIMAT.es">
            dpd@SOLIMAT.es
          </a>{' '}
          así como las solicitudes de intervención del delegado de protección de datos con carácter previo a la
          presentación de una reclamación en la AEPD frente al Responsable o Encargado del tratamiento, que deberán
          dirigirse a la dirección{' '}
          <a className={styles.link} href="mailto:web@solimat.es">
            web@solimat.es
          </a>
          .
        </li>
      </ol>
    </div>
  );
}
