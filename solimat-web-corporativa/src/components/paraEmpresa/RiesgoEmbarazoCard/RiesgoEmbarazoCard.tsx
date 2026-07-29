import InfoCard from '../InfoCard';
import SectionLabel from '../SectionLabel';

/** Tarjeta "Riesgo durante el embarazo y/o lactancia natural" de Para Empresa. */
export default function RiesgoEmbarazoCard() {
  return (
    <InfoCard id="riesgo-embarazo" title="Riesgo durante el embarazo y/o lactancia natural">
      <p>
        Esta situación puede producirse cuando alguna de tus trabajadoras esté embarazada o sea madre lactante y
        desempeñe su actividad en un puesto de trabajo cuyas condiciones de trabajo influyen negativamente en su
        salud, la del feto/lactante y no resulte técnica u objetivamente posible un cambio de puesto compatible con
        su estado. Para tener acceso a la prestación económica, Solimat previamente debe reconocer la existencia del
        riesgo. Para acceder a la evaluación del riesgo la trabajadora debe cumplir una serie de requisitos.
      </p>
      <SectionLabel>Requisitos de las trabajadoras en esta situación</SectionLabel>
      <ul>
        <li>
          Estar <strong>afiliadas</strong> y <strong>en alta</strong> a la Seguridad Social.
        </li>
        <li>
          Estar en <strong>activo</strong> en el <strong>momento de la solicitud</strong>.
        </li>
        <li>
          Tener un <strong>embarazo sin riesgo de curso normal</strong>, o ser lactante natural de un hijo durante
          los primeros 9 meses de vida.
        </li>
      </ul>
      <SectionLabel>Cometidos de la empresa</SectionLabel>
      <ul>
        <li>
          Solicitar a tu Servicio de Prevención una <strong>evaluación de riesgos</strong> del puesto en cuestión.
        </li>
        <li>
          Adoptar las <strong>medidas preventivas</strong> necesarias para evitar que el riesgo exista (adaptación o
          cambio de puesto compatible con la situación de la trabajadora).
        </li>
        <li>
          Facilitar a la trabajadora, si no fuese posible la adaptación o cambio, la siguiente{' '}
          <strong>documentación</strong>:
          {/*
            PENDIENTE — Descargas de los 3 documentos de riesgo durante el embarazo:
            "declaración empresarial sobre descripción y exposición REL", "certificado empresarial para la
            solicitud de la prestación económica por REL" y "certificado de empresa de datos económicos".
            El diseño enlaza cada uno como descarga, pero los PDF no están disponibles: no existen en
            `src/pdfs` y sus rutas en el sitio antiguo (`/pdf/riesgoembarazo/…` en el dominio corporativo)
            responden 404. Para restaurarlos: añadir los PDF a `src/pdfs`, importarlos aquí y volver a
            envolver cada nombre de documento en `<a href={pdf} target="_blank" rel="noopener noreferrer">`.
          */}
          <ul>
            <li>
              La declaración empresarial sobre descripción y exposición REL, para solicitar el reconocimiento del
              riesgo.
            </li>
            <li>
              El certificado empresarial para la solicitud de la prestación económica por REL, y el certificado de
              empresa de datos económicos, para la solicitud de la prestación económica.
            </li>
          </ul>
        </li>
        <li>
          <strong>Suspender el contrato</strong> de la trabajadora, desde el día siguiente a la fecha del
          certificado médico emitido por Solimat reconociendo la existencia de riesgos en su puesto de trabajo para
          el embarazo (o fecha posterior), y continuar con la <strong>obligación de cotización</strong> a la
          Seguridad Social.
        </li>
      </ul>
      <SectionLabel>Beneficios para la empresa</SectionLabel>
      <ul>
        <li>
          <strong>Bonificación del 100% en las cuotas a la Seguridad Social</strong> tanto de la trabajadora con
          riesgo como de la persona que la sustituya, siempre que se contrate a una persona desempleada en contrato
          interino de bonificación.
        </li>
      </ul>
      <SectionLabel>¿Qué hace Solimat por ti?</SectionLabel>
      <ul>
        <li>
          Te asesoramos como empresa y acompañamos a la trabajadora en el proceso de solicitud reconocimiento de
          riesgo de embarazo y tramitación de la prestación.
        </li>
        <li>Determinamos la existencia o no del riesgo.</li>
        <li>
          Abonamos la prestación económica desde el día de la suspensión del contrato de trabajo para las
          trabajadoras por cuenta ajena.
        </li>
      </ul>
    </InfoCard>
  );
}
