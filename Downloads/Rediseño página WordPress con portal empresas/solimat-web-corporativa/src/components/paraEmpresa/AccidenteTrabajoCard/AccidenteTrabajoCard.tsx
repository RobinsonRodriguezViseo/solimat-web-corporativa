import InfoCard from '../InfoCard';
import SectionLabel from '../SectionLabel';
import styles from './AccidenteTrabajoCard.module.css';

/** Tarjeta "Accidente de trabajo" de la sección "En caso de…" de Para Empresa. */
export default function AccidenteTrabajoCard() {
  return (
    <InfoCard id="accidente-de-trabajo" title="Accidente de trabajo">
      <p>
        Cuando un/a trabajador/a de tu empresa sufre un <strong>accidente de trabajo</strong> (aquél que ocurre en
        el puesto de trabajo con ocasión o por consecuencia del trabajo que se ejecute o un accidente in itinere).
      </p>
      <p>
        <strong>1.</strong> Localiza el <strong>centro más cercano</strong> llamando al 900 111 072. En caso de
        accidente grave/muy grave llama al 112.
      </p>
      <p>
        <strong>2.</strong> Cumplimenta y entrega el <strong>volante de asistencia*</strong> a la persona
        accidentada (opcional por parte de la empresa).
      </p>
      <ul>
        <li>
          Tramita el parte de <strong>accidente de trabajo</strong>, a través del Sistema Delt@, si el parte es:
          <ul>
            <li>
              <strong>Sin baja.</strong> Presenta relación mensual de accidentes sin baja médica (RATSN), en los 5
              primeros días hábiles del mes siguiente a los accidentes.
            </li>
            <li>
              <strong>Baja médica laboral.</strong> Notifica el parte de accidente en los 5 días siguientes a la
              fecha de la baja médica.
            </li>
            <li>
              <strong>Si el accidente es grave, muy grave, mortal o afecta a más de cuatro trabajadores.</strong> Se
              debe comunicar a la autoridad laboral en las siguientes 24 horas.
            </li>
          </ul>
        </li>
      </ul>
      <p className={styles.note}>
        <em>
          *El volante de asistencia sanitaria es un documento por el que la empresa solicita asistencia sanitaria
          para su trabajador/a accidentado/a; su presentación no supone el reconocimiento de la existencia de un
          accidente de trabajo o enfermedad profesional.
        </em>
      </p>
      <p className={styles.note}>
        <em>
          Se recomienda presentar el volante de asistencia cumplimentado por la empresa la primera vez que acude a
          nuestra red de centros ante el inicio de un proceso sanitario, siendo la empresa quien determina si sus
          trabajadores deben o no presentarlo.
        </em>
      </p>
      {/*
        PENDIENTE — Botón de descarga "Volante de Asistencia".
        El diseño coloca aquí un botón para descargar el volante de asistencia, pero el
        documento no está disponible: no existe en `src/pdfs` y la ruta del sitio antiguo
        (`/pdf/Volante_asistencia.pdf` en el dominio corporativo) responde 404.
        Para restaurarlo: añadir el PDF a `src/pdfs`, importarlo aquí y volver a montar el
        bloque `actions` con un `ActionButton` (icon="file") apuntando al import,
        recuperando también la clase `.actions` en el CSS del componente.
      */}
      <SectionLabel>¿Qué hace Solimat por ti?</SectionLabel>
      <ul>
        <li>Cuidamos de tus trabajadores desde la primera atención y nos ocupamos de su recuperación.</li>
        <li>
          Proporcionamos una línea de atención telefónica integral y gratuita 24 horas los 365 días del año, en
          España (900 111 072) y en el extranjero (+34 925 72 72 72).
        </li>
        <li>
          Te asesoramos a ti y a tus trabajadores/as sobre los trámites a realizar, prestaciones, servicios, … a
          través de tu gestor/a.
        </li>
      </ul>
    </InfoCard>
  );
}
