import portalPacienteImage from '../../../images/solimat-portal-paciente.jpg';
import ActionButton from '../../paraEmpresa/ActionButton';
import InfoCard from '../../paraEmpresa/InfoCard';
import Prose from '../../paraEmpresa/Prose';
import styles from './PortalPacientePanel.module.css';

const PORTAL_PACIENTE_URL = 'https://pacientes.solimat.com/';

/** Bloque "Portal del Paciente" + "App Portal Paciente" (Para Trabajador y Para Autónomo). */
export default function PortalPacientePanel() {
  return (
    <>
      <div className={styles.panel}>
        <img className={styles.image} src={portalPacienteImage} alt="Portal del Paciente" />
        <div className={styles.body}>
          <Prose>
            <p>
              Siguiendo el compromiso continuo de Solimat con la innovación y la mejora de la atención al
              mutualista, el Portal del Paciente se ha consolidado como una pieza fundamental dentro de la
              estrategia de transformación digital de la entidad. Esta herramienta representa una evolución
              significativa en la forma en que los usuarios interactúan con la mutua, proporcionando un acceso
              directo, seguro y personalizado a los servicios sanitarios y a la gestión administrativa.
            </p>
            <p>
              La implantación del portal ha dado respuesta a la creciente demanda de servicios digitales que sean
              accesibles, eficientes y fiables, alineados con las necesidades actuales de los mutualistas. A través
              de este canal, se ha logrado acercar al paciente tanto a los profesionales sanitarios como a los
              equipos de gestión, facilitando una administración más ágil, transparente y centrada en la experiencia
              del usuario.
            </p>
            <p>
              Entre sus principales funcionalidades, se encuentran la comunicación directa con profesionales
              sanitarios y gestores, que permite al usuario realizar consultas, enviar documentación y gestionar
              incidencias. La gestión de citas médicas, facilitando la consulta de citas programadas y la recepción
              de recordatorios automáticos. Y el acceso a información y prestaciones, mediante la consulta
              centralizada de informes médicos, pruebas diagnósticas, partes de incapacidad temporal y otra
              información de interés.
            </p>
            <p>
              Esta plataforma contribuye a reforzar la relación entre el paciente y el equipo asistencial y de
              gestión, favorece una administración más eficiente de la información y las citas, mejora la
              comunicación a lo largo del proceso asistencial y reduce la carga administrativa asociada a trámites y
              documentación.
            </p>
            <p>
              Con el Portal del Paciente plenamente integrado en su operativa diaria, Solimat reafirma en 2025 su
              apuesta por la digitalización de los servicios, la atención orientada al paciente y la optimización de
              los procesos internos, en consonancia con las mejores prácticas del sector y con las expectativas de
              una sociedad cada vez más digitalizada.
            </p>
            <div className={styles.actions}>
              <ActionButton href={PORTAL_PACIENTE_URL} icon="arrow">
                Portal del Paciente
              </ActionButton>
            </div>
          </Prose>
        </div>
      </div>

      <InfoCard title="App Portal Paciente">
        <p>
          En línea con su estrategia de transformación digital, en 2025 Solimat reforzó su Portal del Paciente
          mediante el lanzamiento de su aplicación móvil para dispositivos iOS y Android, facilitando a los usuarios
          el acceso a sus servicios desde su teléfono móvil.
        </p>
        <p>
          Esta evolución refuerza el modelo de atención digital de Solimat, permitiendo la gestión de citas, la
          consulta de información clínica y la comunicación con la mutua de forma ágil y segura a través del móvil,
          en el marco de un modelo orientado a facilitar el acceso a los servicios, reforzar la autonomía del
          paciente y avanzar hacia una relación más eficiente con la entidad.
        </p>
      </InfoCard>
    </>
  );
}
