import SectionLabel from '../../paraEmpresa/SectionLabel';
import PrestacionCard from '../PrestacionCard';
import styles from './PrestacionesList.module.css';

/** Las cinco prestaciones que se detallan en Para Trabajador. */
export default function PrestacionesList() {
  return (
    <div className={styles.list}>
      <PrestacionCard
        id="contingencia-profesional"
        title="Contingencia Profesional"
        moreInfoHref="/prestaciones-economicas#contingencias-profesionales"
      >
        <p>
          Si te encuentras en situación de <strong>incapacidad temporal</strong> como consecuencia de un accidente
          de trabajo o enfermedad profesional y has causado baja en la empresa, te:
        </p>
        <ul>
          <li>
            <strong>Continuamos prestando asistencia sanitaria hasta el alta médica.</strong>
          </li>
          <li>
            <strong>Abonamos el 75% de tu base reguladora,</strong> desde el día siguiente a la baja en la empresa
            hasta el alta médica (previa solicitud de esta prestación).
          </li>
        </ul>
      </PrestacionCard>

      <PrestacionCard
        id="contingencia-comun"
        title="Contingencia Común"
        moreInfoHref="/prestaciones-economicas#contingencias-comunes"
      >
        <p>
          Si te encuentras en situación de incapacidad temporal como consecuencia de un enfermedad común o accidente
          no laboral, y has causado baja en la empresa, te:
        </p>
        <ul>
          <li>Abonamos la prestación económica, previa solicitud de esta prestación.</li>
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
            <strong>60% de base reguladora</strong>, del 4º al 15º día de baja a cargo de la empresa.
          </li>
          <li>
            <strong>60% de base reguladora</strong>, del día 16º al 20º día a cargo de la mutua.
          </li>
          <li>
            <strong>75% de base reguladora</strong>, del 21º día en adelante a cargo de la mutua.
          </li>
        </ul>
      </PrestacionCard>

      <PrestacionCard
        id="riesgo-embarazo"
        title="Riesgo durante el embarazo y la lactancia natural"
        moreInfoHref="/prestaciones-economicas#riesgo-embarazo-lactancia"
      >
        <p>Si eres mujer, trabajas, estás embarazada o estás periodo de lactancia natural, y:</p>
        <ul>
          <li>
            En el desempeño de tu actividad y/o condiciones de trabajo{' '}
            <strong>influyen negativamente en tu salud,</strong> o en la de tu hijo/a (feto o lactante).
          </li>
          <li>
            <strong>Y no es posible cambiar o adaptar tu puesto de trabajo</strong> por otro compatible con tu
            estado.
          </li>
        </ul>
        <p>
          Puedes optar a ella tanto si eres trabajadora por cuenta ajena como autónoma si tienes que interrumpir tu
          actividad profesional, como consecuencia de un posible riesgo en tu puesto de trabajo.
        </p>
      </PrestacionCard>

      <PrestacionCard
        id="cuidado-hijos"
        title="Cuidado de hijos menores afectados por enfermedad grave"
        moreInfoHref="/prestaciones-economicas#cuidado-menores"
      >
        <p>
          Si necesitas reducir tu jornada laboral un 50% o más, para el cuidado directo, continuado y permanente de
          un menor a tu cargo, por padecer cáncer una enfermedad grave, te:
        </p>
        <ul>
          <li>Abonamos el 100% de tu base reguladora.</li>
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
