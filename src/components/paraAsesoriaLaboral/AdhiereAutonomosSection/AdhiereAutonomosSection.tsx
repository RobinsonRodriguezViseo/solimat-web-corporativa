import anexoPropuestaAdhesionPdf from '../../../pdfs/Anexo-propuesta-de-adhesion.pdf';
import denunciaAdhesionPdf from '../../../pdfs/Denuncia-del-documento-de-adhesion.pdf';
import solicitudPropuestaAdhesionPdf from '../../../pdfs/Solicitud-de-propuesta-de-adhesion.pdf';
import ta521Pdf from '../../../pdfs/TA.0521.pdf';
import InfoCard from '../../paraEmpresa/InfoCard';
import SectionTitle from '../../paraEmpresa/SectionTitle';
import styles from './AdhiereAutonomosSection.module.css';

/** Sección "Adhiere a autónomos" de Para Asesoría Laboral. */
export default function AdhiereAutonomosSection() {
  return (
    <section id="adhiere-autonomos" className={styles.section}>
      <SectionTitle title="Adhiere a autónomos" />

      <div className={styles.cards}>
        <InfoCard title="Dar de alta">
          <p>
            <strong>1. Presenta en la Tesorería General de la Seguridad Social</strong> junto con la documentación
            de alta de la actividad:
          </p>
          <ul>
            <li>
              <a href={ta521Pdf} target="_blank" rel="noopener noreferrer">
                <strong>TA. 521 – Solicitud de alta en el Régimen Especial de Trabajadores Autónomos (RETA)</strong>
              </a>
              . Con carácter general la cobertura incluye: Contingencias Comunes, Contingencias Profesionales y
              Protección por cese en la Actividad.
            </li>
          </ul>
          <p>
            Cumplimentado en las casillas, de las coberturas elegidas: Mutua Nº: <strong>072</strong> Nombre:{' '}
            <strong>SOLIMAT</strong>
          </p>
        </InfoCard>

        <InfoCard title="Cambiar de mutua">
          <p>
            <strong>
              1. Presenta la{' '}
              <a href={denunciaAdhesionPdf} target="_blank" rel="noopener noreferrer">
                Denuncia
              </a>{' '}
              del documento de adhesión en tu mutua actual, antes del 30 de septiembre:
            </strong>
          </p>
          <ul>
            <li>Si la firma es manuscrita, por duplicado y en cualquier centro de dicha mutua.</li>
            <li>Si la firma es digital, enviándola vía mail a la misma.</li>
          </ul>
          <p>
            <strong>2. Realiza la transacción ATK43,</strong> a través de la Gerencia Informática de la Seguridad
            Social.
          </p>
          <p>
            <strong>3. Envía a</strong> <a href="mailto:web@solimat.com">web@solimat.com</a>:
          </p>
          <ul>
            <li>
              <a href={denunciaAdhesionPdf} target="_blank" rel="noopener noreferrer">
                Denuncia del documento de adhesión
              </a>
              , sellado con la fecha de presentación en la mutua actual, si lo has presentado in situ. O reenviándolo
              con copia del correo de presentación, si lo has hecho vía mail.
            </li>
            <li>
              <a href={solicitudPropuestaAdhesionPdf} target="_blank" rel="noopener noreferrer">
                Solicitud de propuesta de adhesión
              </a>
            </li>
            <li>
              <a href={anexoPropuestaAdhesionPdf} target="_blank" rel="noopener noreferrer">
                Anexo propuesta de adhesión
              </a>
              , si además quieres que cubramos la prestación económica de contingencias profesionales.
            </li>
          </ul>
          <p>
            <strong>4.</strong> La adhesión efectiva se inicia{' '}
            <strong>el 1 de enero del año siguiente a la presentación</strong>, tras notificación por parte de la
            Tesorería General de la Seguridad Social.
          </p>
          <p>
            <strong>5. Devuelve firmado</strong>, por parte del autónomo/a el documento de adhesión y/o el anexo de
            adhesión que previamente recibirá.
          </p>
        </InfoCard>
      </div>
    </section>
  );
}
