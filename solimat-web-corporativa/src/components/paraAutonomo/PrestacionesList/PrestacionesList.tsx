import SectionLabel from '../../paraEmpresa/SectionLabel';
import PrestacionCard from '../../paraTrabajador/PrestacionCard';
import styles from './PrestacionesList.module.css';

/** Prestaciones económicas detalladas en Para Autónomo. */
export default function PrestacionesList() {
  return (
    <div className={styles.list}>
      <PrestacionCard
        id="contingencia-profesional"
        title="Prestación económica por Contingencia Profesional"
        moreInfoHref="/prestaciones-economicas#contingencias-profesionales"
      >
        <p>
          Si tienes las coberturas por contingencia profesional y estás de baja médica como consecuencia de un
          accidente de trabajo o enfermedad profesional, te:
        </p>
        <ul>
          <li>
            <strong>Prestamos asistencia sanitaria</strong>
          </li>
          <li>
            <strong>Abonamos el 75% de tu base reguladora,</strong> a partir del día siguiente al de la baja médica
            hasta el alta.
          </li>
        </ul>
      </PrestacionCard>

      <PrestacionCard
        id="contingencia-comun"
        title="Prestación económica por Contingencia Común"
        moreInfoHref="/prestaciones-economicas#contingencias-comunes"
      >
        <p>
          Si te encuentras de baja médica como consecuencia de un enfermedad común o accidente no laboral, te:
        </p>
        <ul>
          <li>
            <strong>Abonamos la prestación económica</strong>.
          </li>
        </ul>
        <p>La asistencia sanitaria, en estos casos, le corresponde a Seguridad Social.</p>
        <SectionLabel>Periodo</SectionLabel>
        <ul>
          <li>Desde el 4º día de la baja hasta el día del alta.</li>
          <li>Duración máxima: 730 días.</li>
        </ul>
        <SectionLabel>Cuantía</SectionLabel>
        <ul>
          <li>
            <strong>60% de tu base reguladora</strong>, del 4º al 20º día de la baja.
          </li>
          <li>
            <strong>75% de la base reguladora</strong>, del día 21 y hasta el día del alta.
          </li>
        </ul>
        <SectionLabel>Forma de abono</SectionLabel>
        <ul>
          <li>
            <strong>Pago directo</strong>: previa solicitud del autónomo y presentación de la declaración de
            situación de actividad.
          </li>
        </ul>
        <p>
          <strong>Plazo de presentación:</strong> 15 días hábiles desde la fecha de la baja.
        </p>
      </PrestacionCard>

      <PrestacionCard
        id="riesgo-embarazo"
        title="Prestación económica por riesgo durante el embarazo y la lactancia natural"
        moreInfoHref="/prestaciones-economicas#riesgo-embarazo-lactancia"
      >
        <p>Si eres mujer, trabajas, estás embarazada o estás periodo de lactancia natural, y:</p>
        <ul>
          <li>
            En el desempeño de tu actividad y/o condiciones de trabajo{' '}
            <strong>influyen negativamente en tu salud,</strong> o en la de tu hijo/a (feto o lactante).
          </li>
          <li>
            <strong>Y no puedes cambiar o adaptar tu puesto de trabajo</strong> por otro compatible con tu estado.
          </li>
        </ul>
        <p>
          Puedes optar a esta prestación si tienes que interrumpir tu actividad profesional, como consecuencia de un
          posible riesgo en tu puesto de trabajo.
        </p>
        <SectionLabel>Cuantía</SectionLabel>
        <ul>
          <li>
            <strong>100% de la base reguladora</strong> establecida para la prestación de incapacidad temporal
            derivada de contingencias profesionales.
          </li>
        </ul>
        <SectionLabel>Forma de abono</SectionLabel>
        <ul>
          <li>Directamente a la autónoma, previa solicitud de ésta, y tras el reconocimiento de la existencia del riesgo.</li>
        </ul>
      </PrestacionCard>

      <PrestacionCard
        id="cuidado-hijos"
        title="Prestación económica por cuidado de hijos menores afectados por enfermedad grave"
        moreInfoHref="/prestaciones-economicas#cuidado-menores"
      >
        <p>
          Si necesitas reducir tu jornada laboral un 50% o más, para el cuidado directo, continuado y permanente de
          un menor a tu cargo, por padecer cáncer una enfermedad grave, te:
        </p>
        <ul>
          <li>
            <strong>Abonamos el 100% de tu base reguladora.</strong>
          </li>
        </ul>
        <SectionLabel>Duración</SectionLabel>
        <ul>
          <li>
            <strong>Inicio:</strong> Desde el reconocimiento del derecho a la prestación.
          </li>
          <li>
            <strong>Fin:</strong> Hasta como máximo de los 26 años del menor.
          </li>
        </ul>
        <SectionLabel>Forma de abono</SectionLabel>
        <ul>
          <li>
            Directamente al autónomo/a tras solicitud previa de este/a y resolución sobre el reconocimiento del
            derecho.
          </li>
        </ul>
      </PrestacionCard>

      <PrestacionCard
        id="prestaciones-complementarias"
        title="Prestaciones Complementarias"
        moreInfoHref="/prestaciones-economicas#prestaciones-complementarias"
      >
        <p>
          Te ayudamos a poder acceder a las prestaciones complementarias. Son ayudas económicas que concede la
          Comisión de Prestaciones Especiales de Solimat y son de carácter potestativo.
        </p>
        <SectionLabel>Tipos de ayuda</SectionLabel>
        <ul>
          <li>Rehabilitación y recuperación.</li>
          <li>Reorientación profesional y adaptación del puesto de trabajo.</li>
          <li>
            Ayuda para la adaptación de los medios esenciales para el desarrollo de las actividades básicas de la
            vida diaria.
          </li>
          <li>Complemento auxilio por defunción.</li>
          <li>Ayuda para la formación en el cuidado de personas en situación de Gran Invalidez.</li>
          <li>Ayuda para el mantenimiento de la posesión o disfrute de la vivienda habitual.</li>
        </ul>
        <SectionLabel>Cuantía</SectionLabel>
        <p>
          La Comisión de Prestaciones Especiales es la encargada de estudiar y aprobar o denegar las solicitudes
          recibidas. En el caso de ser aprobadas, estas pueden cubrirse total o parcialmente.
        </p>
      </PrestacionCard>
    </div>
  );
}
