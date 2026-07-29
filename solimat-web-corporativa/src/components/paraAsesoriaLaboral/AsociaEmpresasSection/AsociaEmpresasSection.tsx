import anexoPropuestaPdf from '../../../pdfs/ANEXO-PROPUESTA-ASOCIACION-SOLIMATok.pdf';
import solicitudBajaPdf from '../../../pdfs/ESCRITO-DENUNCIA-CONVENIO-ASOCIACION-GENERICA.pdf';
import propuestaAsociacionPdf from '../../../pdfs/PROPUESTA-ASOCIACION-SOLIMAT.pdf';
import InfoCard from '../../paraEmpresa/InfoCard';
import SectionTitle from '../../paraEmpresa/SectionTitle';
import styles from './AsociaEmpresasSection.module.css';

const TA6_URL =
  'https://www.seg-social.es/wps/wcm/connect/wss/b375ceec-08ec-43b3-a72c-66c59b199a7d/TA-6+%28v.11%29.pdf?MOD=AJPERES';
const TA7_URL = 'https://www.seg-social.es/descarga/es/48801';

function CuentaCotizacionFields() {
  return (
    <ul>
      <li>
        7.1 – Número: <strong>072</strong> Denominación: <strong>SOLIMAT</strong>
      </li>
      <li>
        7.2 – Marca <strong>MUTUA</strong>, si quieres que cubramos la prestación económica de contingencias comunes
      </li>
    </ul>
  );
}

interface Ta7LinkProps {
  label: string;
}

function Ta7Link({ label }: Ta7LinkProps) {
  return (
    <a href={TA7_URL} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

/** Sección "Asocia a empresas" de Para Asesoría Laboral. */
export default function AsociaEmpresasSection() {
  return (
    <section id="asocia-empresas" className={styles.section}>
      <SectionTitle title="Asocia a empresas" />
      <p className={styles.intro}>
        Si una empresa quiere proteger a sus trabajadores con Solimat, puede hacerlo en cualquiera de las
        situaciones en las que se encuentre la empresa. Aquí tienes los pasos a seguir:
      </p>

      <div className={styles.cards}>
        <InfoCard title="Creando una empresa">
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
          <CuentaCotizacionFields />
          <p>
            <strong>2. Presenta en Tesorería General Seguridad Social</strong>, a través del{' '}
            <strong>Sistema RED/CASIA:</strong> TA.6 y el resto de documentación necesaria.
          </p>
        </InfoCard>

        <InfoCard title="Asociada a otra mutua colaboradora">
          <p>
            <strong>1. Solicita la baja a su mutua actual,</strong> al menos{' '}
            <strong>un mes de antes a la fecha de vencimiento</strong> de su documento de asociación:
          </p>
          <ul>
            <li>
              Modelo de{' '}
              <a href={solicitudBajaPdf} target="_blank" rel="noopener noreferrer">
                solicitud de baja
              </a>
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
                Propuesta de asociación
              </a>
            </li>
            <li>
              <a href={anexoPropuestaPdf} target="_blank" rel="noopener noreferrer">
                Anexo a la propuesta de asociación
              </a>
              , si además quieres que cubramos la prestación económica de contingencias comunes
            </li>
            <li>
              <Ta7Link label="TA. 7 – Solicitud de alta, baja y variación de datos de cuenta de cotización" />.
              Atención campos:
              <CuentaCotizacionFields />
            </li>
          </ul>
          <p>
            <strong>
              3. Remite el resguardo de la solicitud presentada en CASIA y la documentación a{' '}
              <a href="mailto:ceses072@solimat.com">ceses072@solimat.com</a>
            </strong>
          </p>
        </InfoCard>

        <InfoCard title="Asociada a INSS">
          <p>
            <strong>1. Presenta telemáticamente antes del día 20 del mes del vencimiento</strong> en Plataforma{' '}
            <strong>CASIA</strong> de la TGSS:
          </p>
          <ul>
            <li>
              <a href={propuestaAsociacionPdf} target="_blank" rel="noopener noreferrer">
                Propuesta de asociación
              </a>
            </li>
            <li>
              <a href={anexoPropuestaPdf} target="_blank" rel="noopener noreferrer">
                Anexo a la propuesta de asociación
              </a>
              , si además quieres que cubramos la prestación económica de contingencias comunes
            </li>
            <li>
              <Ta7Link label="TA. 7 – Solicitud de alta, baja y variación de datos de cuenta de cotización" />.
              Atención campos:
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
          <p>
            Como excepción cabe indicar que, aquellas empresas que antes estaban obligadas a cubrir las
            contingencias de accidente de trabajo y enfermedad profesional con el INSS, conforme el art. 204 de la
            Ley de Bases de la Seguridad Social, pueden solicitar la baja al INSS en cualquier fecha del año, no
            teniendo que esperar al vencimiento. En tal caso, la fecha de efecto sería el día primero del segundo
            mes siguiente al que se solicite el cese.
          </p>
        </InfoCard>

        <InfoCard title="Reanudando la actividad">
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
              <Ta7Link label="TA. 7 – Solicitud de alta, baja y variación de datos de cuenta de cotización" />.
              Atención campos:
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
