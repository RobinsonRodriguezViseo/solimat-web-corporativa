import anexoPropuestaPdf from '../../../pdfs/ANEXO-PROPUESTA-ASOCIACION-SOLIMATok.pdf';
import solicitudBajaPdf from '../../../pdfs/ESCRITO-DENUNCIA-CONVENIO-ASOCIACION-GENERICA.pdf';
import propuestaAsociacionPdf from '../../../pdfs/PROPUESTA-ASOCIACION-SOLIMAT.pdf';
import InfoCard from '../InfoCard';
import SectionTitle from '../SectionTitle';
import styles from './AsociateSection.module.css';

const TA7_URL = 'https://www.seg-social.es/descarga/es/48801';
const TA6_URL = 'https://www.seg-social.es/descarga/es/48533';

function CuentaCotizacionFields() {
  return (
    <ul>
      <li>
        7.1 – Número: <strong>072</strong> Denominación: <strong>SOLIMAT</strong>
      </li>
      <li>
        7.2 – Marca <strong>MUTUA</strong>, si quieres que cubramos la prestación económica de contingencias
        comunes.
      </li>
    </ul>
  );
}

/** Sección "Asóciate" de Para Empresa: los cuatro escenarios de asociación. */
export default function AsociateSection() {
  return (
    <section id="asociate" className={styles.section}>
      <SectionTitle title="Asóciate" />
      <p className={styles.intro}>
        Si quieres proteger a tus trabajadores con Solimat, puedes hacerlo en cualquiera de las situaciones en las
        que te encuentres con tu empresa. Aquí tienes los pasos a seguir:
      </p>

      <div className={styles.cards}>
        <InfoCard id="creando-tu-empresa" title="Creando tu empresa">
          <p>
            <strong>
              1. Descarga y cumplimenta el modelo{' '}
              <a href={TA6_URL} target="_blank" rel="noopener noreferrer">
                TA. 6 – Solicitud inscripción en el sistema de la Seguridad Social
              </a>
              ,
            </strong>{' '}
            prestando atención a los campos:
          </p>
          <ul>
            <li>
              7.1 – Número: <strong>072</strong> Denominación: <strong>SOLIMAT</strong>
            </li>
            <li>
              7.2 – Marca <strong>MUTUA</strong>, si quieres que cubramos la prestación económica de contingencias
              comunes
            </li>
          </ul>
          <p>
            <strong>2. Presenta en Tesorería General Seguridad Social, a través del Sistema RED/CASIA:</strong>
          </p>
          <ul>
            <li>TA.6 y el resto documentación necesaria.</li>
          </ul>
        </InfoCard>

        <InfoCard id="asociada-a-otra-mutua" title="Asociada a otra mutua">
          <p>
            <strong>1. Solicita la baja a tu mutua actual,</strong> al menos{' '}
            <strong>un mes de antes a la fecha de vencimiento</strong> de tu documento de asociación:
          </p>
          <ul>
            <li>
              Modelo de{' '}
              <a href={solicitudBajaPdf} target="_blank" rel="noopener noreferrer">
                solicitud de baja
              </a>
              .
            </li>
          </ul>
          <p>
            <strong>2.</strong> Envía copia de la solicitud presentada a{' '}
            <a href="mailto:ceses072@solimat.com">ceses072@solimat.com</a>
          </p>
          <p>
            <strong>3. Presenta telemáticamente antes del día 20 del mes del vencimiento</strong> en Plataforma{' '}
            <strong>CASIA</strong> de la TGSS, la siguiente documentación cumplimentada:
          </p>
          <ul>
            <li>
              Modelo de{' '}
              <a href={solicitudBajaPdf} target="_blank" rel="noopener noreferrer">
                solicitud de baja
              </a>
            </li>
            <li>
              <a href={propuestaAsociacionPdf} target="_blank" rel="noopener noreferrer">
                Propuesta de asociación de Solimat
              </a>
            </li>
            <li>
              <a href={anexoPropuestaPdf} target="_blank" rel="noopener noreferrer">
                Anexo a la propuesta de asociación de Solimat
              </a>
              , si además quieres que cubramos la prestación económica de contingencias comunes
            </li>
            <li>
              <a href={TA7_URL} target="_blank" rel="noopener noreferrer">
                TA.7 – Solicitud de alta, baja y variación de datos de cuenta de cotización
              </a>
              . Atención campos:
              <CuentaCotizacionFields />
            </li>
          </ul>
          <p>
            <strong>4.</strong> Remite el resguardo de la solicitud presentada en CASIA y la documentación a{' '}
            <a href="mailto:web@solimat.com">web@solimat.com</a>
          </p>
        </InfoCard>

        <InfoCard id="asociada-a-inss" title="Asociada al INSS">
          <p>
            <strong>1. Presenta telemáticamente antes del día 20 del mes del vencimiento</strong> en Plataforma{' '}
            <strong>CASIA</strong> de la TGSS:
          </p>
          <ul>
            <li>
              <a href={propuestaAsociacionPdf} target="_blank" rel="noopener noreferrer">
                Propuesta de asociación de Solimat
              </a>
            </li>
            <li>
              <a href={anexoPropuestaPdf} target="_blank" rel="noopener noreferrer">
                Anexo a la propuesta de asociación de Solimat
              </a>
              , si además quieres que cubramos la prestación económica de contingencias comunes
            </li>
            <li>
              <a href={TA7_URL} target="_blank" rel="noopener noreferrer">
                TA7 – Solicitud de alta, baja y variación de datos de cuenta de cotización
              </a>
              . Atención campos:
              <CuentaCotizacionFields />
            </li>
            <li>Resto de documentación solicitada por la administración correspondiente.</li>
          </ul>
          <p>
            <strong>
              2. Remite resguardo de la solicitud presentada en CASIA y documentación a{' '}
              <a href="mailto:ceses072@solimat.com">ceses072@solimat.com</a>
            </strong>
          </p>
          <p>Realizado este trámite, el cambio será vigente el día 1 del mes posterior al vencimiento.</p>
          <p>En todo caso, quedamos a tu disposición para ampliar esta información o ayudarle con los trámites.</p>
        </InfoCard>

        <InfoCard id="reanudando-la-actividad" title="Reanudando la actividad">
          <p>
            La empresa al quedarse <strong>sin trabajadores más de 5 días y reanudar su actividad</strong>, puede
            seguir con la misma Mutua u optar por otra Mutua distinta <strong>sin esperar al vencimiento</strong>{' '}
            del documento de asociación con la entidad anterior.
          </p>
          <p>
            <strong>1. Presenta en la Tesorería de la Seguridad Social,</strong> a través del{' '}
            <strong>Sistema RED/CASIA:</strong>
          </p>
          <ul>
            <li>
              <a href={TA7_URL} target="_blank" rel="noopener noreferrer">
                TA.7 – Solicitud de alta, baja y variación de datos de cuenta de cotización
              </a>
              . Atención campos:
              <CuentaCotizacionFields />
            </li>
            <li>Resto de documentación de reanudación de actividades.</li>
          </ul>
          <p>
            <strong>2.</strong> Adjunta{' '}
            <a href={propuestaAsociacionPdf} target="_blank" rel="noopener noreferrer">
              propuesta
            </a>{' '}
            y{' '}
            <a href={anexoPropuestaPdf} target="_blank" rel="noopener noreferrer">
              anexo
            </a>{' '}
            a la propuesta de asociación cumplimentados, si cambias de entidad y es solicitado por la
            Administración.
          </p>
        </InfoCard>
      </div>
    </section>
  );
}
