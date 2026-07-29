import styles from './SistemaDeltaCard.module.css';

export default function SistemaDeltaCard() {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Sistema Delta</h2>
      <p className={styles.paragraph}>
        El Sistema Delta (Sistema de Declaración Electrónica de Trabajadores Accidentados) es una herramienta
        informática a través de la cual se comunican los accidentes que ocurren en el trabajo, tanto si es con baja
        como si no lo es.
      </p>

      <span className={styles.label}>Usuarios</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>Empresas</li>
        <li className={styles.listItem}>Trabajadores autónomos</li>
        <li className={styles.listItem}>Entidades gestoras y colaboradoras</li>
        <li className={styles.listItem}>Asesorías Laborales</li>
      </ul>

      <span className={styles.label}>Requisitos</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>Certificado de firma digital</li>
      </ul>
      <p className={styles.paragraph}>Si aún no lo tienes, aquí te dejamos los pasos a seguir:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Solicitud de certificado mediante la opción "Obtenga el certificado de usuario". Puedes solicitarlo{' '}
          <a className={styles.link} href="https://www.cert.fnmt.es/" target="_blank" rel="noopener noreferrer">
            aquí
          </a>
          .
        </li>
        <li className={styles.listItem}>
          Acreditación de la identidad: presentación de la solicitud impresa junto con tu DNI en las oficinas de
          registro establecidas por la Autoridad de Certificación (oficina de Agencia Tributaria, Delegación de
          Gobierno…) para que los datos sean verificados y se te dé de alta.
        </li>
        <li className={styles.listItem}>
          Pasadas 48 horas, accede a la web www.cert.fnmt.es, y pincha en el apartado "Descargar el certificado".
        </li>
      </ul>
      <p className={styles.paragraph}>
        Puedes ampliar esta información en:{' '}
        <a
          className={styles.link}
          href="https://sede.agenciatributaria.gob.es/Sede/ayuda/consultas-informaticas/firma-digital-sistema-clave-pin-tecnica/informacion-pasos-obtencion-certificado-electronico.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agencia Tributaria: Información y pasos para la obtención de un certificado electrónico
        </a>
      </p>

      <span className={styles.label}>Sistema Delta</span>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Regístrate en la página de inicio{' '}
          <a
            className={styles.link}
            href="https://delta.mites.gob.es/Delta2Web/main/principal.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sistema Delta
          </a>
        </li>
        <li className={styles.listItem}>Haz click en "Nuevo usuario" en el menú de la izquierda y rellenar el formulario</li>
        <li className={styles.listItem}>Emisión de accidente de parte de accidente laboral</li>
      </ul>
      <p className={styles.paragraph}>
        Accede en el menú a <strong className={styles.strong}>"Gestión de documentos/Parte de Accidentes/Iniciar".</strong>{' '}
        Aquí aparecerá una plantilla donde debemos rellenar los datos del accidentado.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>DNI del accidentado</li>
        <li className={styles.listItem}>Fecha del accidente</li>
        <li className={styles.listItem}>El NIF o CIF de la empresa</li>
        <li className={styles.listItem}>El NAF o número de afiliación a la Seguridad Social</li>
        <li className={styles.listItem}>El CCC o Código Cuenta de Cotización (en el caso de trabajador por cuenta ajena)</li>
        <li className={styles.listItem}>
          Situación profesional, donde deberá indicarse si somos trabajadores por cuenta ajena o autónomos
        </li>
        <li className={styles.listItem}>Código de la Mutua que, en nuestro caso, es Nº 072</li>
      </ul>
      <p className={styles.paragraph}>
        Además, todos los partes guardados pueden recuperarse, modificarse, imprimirse, exportarse, etc.
      </p>
      <p className={styles.lastParagraph}>
        No obstante, si tienes cualquier duda sobre este trámite, puedes contactar con la{' '}
        <a className={styles.link} href="#">
          Dirección Provincial
        </a>{' '}
        correspondiente y te ayudaremos.
      </p>
    </div>
  );
}
