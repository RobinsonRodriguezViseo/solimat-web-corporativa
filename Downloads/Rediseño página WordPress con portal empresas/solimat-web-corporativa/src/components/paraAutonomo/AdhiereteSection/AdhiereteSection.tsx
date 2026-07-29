import InfoCard from '../../paraEmpresa/InfoCard';
import SectionTitle from '../../paraEmpresa/SectionTitle';
import anexoPropuestaAdhesionPdf from '../../../pdfs/Anexo-propuesta-de-adhesion.pdf';
import denunciaAdhesionPdf from '../../../pdfs/Denuncia-del-documento-de-adhesion.pdf';
import solicitudPropuestaAdhesionPdf from '../../../pdfs/Solicitud-de-propuesta-de-adhesion.pdf';
import ta521Pdf from '../../../pdfs/TA.0521.pdf';
import styles from './AdhiereteSection.module.css';

/** Sección "Adhiérete" de Para Autónomo: alta en RETA y cambio de mutua. */
export default function AdhiereteSection() {
  return (
    <section id="adhierete" className={styles.section}>
      <SectionTitle title="Adhiérete" />

      <div className={styles.cards}>
        <InfoCard title="Dándote de alta">
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

        <InfoCard title="Cambiando de mutua">
          <p>
            <strong>
              1. Presenta la{' '}
              <a href={denunciaAdhesionPdf} target="_blank" rel="noopener noreferrer">
                Denuncia del documento de adhesión
              </a>{' '}
              en tu mutua actual, antes del 30 de septiembre:
            </strong>
          </p>
          <ul>
            <li>Si la firma es manuscrita, por duplicado y en cualquier centro de dicha mutua.</li>
            <li>Si la firma es digital, enviándola vía mail a la misma.</li>
          </ul>
          <p>
            <strong>2. Envía a</strong> <a href="mailto:web@solimat.com">web@solimat.com</a>:
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
              , sólo si quieres que cubramos la prestación económica de contingencias profesionales.
            </li>
          </ul>
          <p>
            <strong>
              3. La adhesión efectiva se inicia el 1 de enero del año siguiente a la presentación, tras notificación
              por parte de la Tesorería General de la Seguridad Social.
            </strong>
          </p>
          <p>
            <strong>4.</strong> Devuelve firmado el documento de adhesión y/o el anexo de adhesión que previamente
            recibirás.
          </p>
        </InfoCard>
      </div>
    </section>
  );
}
