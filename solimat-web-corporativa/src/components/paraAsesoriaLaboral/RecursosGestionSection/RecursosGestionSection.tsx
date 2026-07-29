import botiquinImage from '../../../images/botiquin.jpg';
import BotiquinesContent from '../../paraEmpresa/BotiquinesContent';
import InfoCard from '../../paraEmpresa/InfoCard';
import SectionTitle from '../../paraEmpresa/SectionTitle';
import SplitPanel from '../../paraEmpresa/SplitPanel';
import styles from './RecursosGestionSection.module.css';

/** Sección "Recursos de gestión" de Para Asesoría Laboral: botiquines y volante de asistencia. */
export default function RecursosGestionSection() {
  return (
    <section id="recursos-gestion" className={styles.section}>
      <SectionTitle title="Recursos de gestión" />

      <div className={styles.stack}>
        <SplitPanel image={botiquinImage} imageAlt="Botiquín">
          <BotiquinesContent title="Botiquines" />
        </SplitPanel>

        <InfoCard title="Volante de Asistencia">
          <p>
            El volante de asistencia sanitaria es un documento por el que la empresa{' '}
            <strong>solicita asistencia sanitaria</strong> para su trabajador/a accidentado/a; su presentación no
            supone el reconocimiento de la existencia de un accidente de trabajo o enfermedad profesional.
          </p>
          <p>
            Se recomienda presentar el volante de asistencia cumplimentado por la empresa la{' '}
            <strong>primera vez</strong> que acude a nuestra red de centros ante el inicio de un proceso sanitario,
            siendo la empresa quien determina si sus trabajadores deben o no presentarlo.
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
        </InfoCard>
      </div>
    </section>
  );
}
