import PrestacionCard from '../../paraTrabajador/PrestacionCard';
import styles from './CeseActividadList.module.css';

/** Prestaciones por cese de actividad y Mecanismo RED de Para Autónomo. */
export default function CeseActividadList() {
  return (
    <div className={styles.list}>
      <PrestacionCard
        id="cese-actividad"
        title="Prestación Económica por cese de actividad"
        moreInfoHref="/prestaciones-economicas#cese-actividad"
      >
        <p>Puedes solicitar la prestación por cese de actividad si eres:</p>
        <ul>
          <li>
            Persona trabajadora autónoma comprendida en el Régimen Especial de Trabajadores por Cuenta Propia o
            Autónomos.
          </li>
          <li>Persona trabajadora por cuenta propia incluida en el Régimen Especial de Trabajadores del Mar.</li>
          <li>Socio de cooperativa de trabajo y persona trabajadora societarias.</li>
        </ul>
        <p>Y te encuentras en alguna de estas situaciones:</p>
        <ul>
          <li>Haber cesado totalmente tu actividad de forma involuntaria.</li>
          <li>Haber reducido tu actividad de forma temporal.</li>
          <li>
            Te has visto afectado/a por un cese temporal de tu actividad por una declaración de emergencia adoptada
            por la autoridad pública competente.
          </li>
        </ul>
        <p>
          A partir del 1 de enero de 2023, se amplía las situaciones de protección, de forma que el cese de
          actividad puede ser:
        </p>
        <ul>
          <li>Definitivo</li>
          <li>
            Temporal:
            <ul>
              <li>Total: comporta la interrupción de todas las actividades que puedan originar el alta como RETA.</li>
              <li>
                Parcial: cuando se produzca una reducción de la actividad que afecte a un sector o centro de
                trabajo.
              </li>
            </ul>
          </li>
        </ul>
      </PrestacionCard>

      <PrestacionCard id="mecanismo-red" title="Mecanismo RED" moreInfoHref="/prestaciones-economicas#mecanismo-red">
        <p>
          El 1 de enero de 2023 entran en vigor dos nuevas prestaciones para los trabajadores autónomos activados
          por el Mecanismo RED (artículo 47 bis del Estatuto de los Trabajadores).
        </p>
        <p>
          Durante la vigencia de estas medidas, las personas trabajadoras autónomas podrán acceder a una de las dos
          prestaciones reguladas en las disposiciones adicionales 48 y 49 del Real Decreto-ley 13/2022, de 26 de
          julio, por el que se establece un nuevo sistema de cotización para los trabajadores por cuenta propia o
          autónomos y se mejora la protección por cese de actividad.
        </p>
      </PrestacionCard>
    </div>
  );
}
