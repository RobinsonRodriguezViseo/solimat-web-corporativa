import ActionButton from '../ActionButton';
import Prose from '../Prose';
import styles from './PortalServiciosContent.module.css';

/** Texto y CTA del bloque "Portal de Servicios" (Para Empresa y Para Asesoría Laboral). */
export default function PortalServiciosContent() {
  return (
    <Prose>
      <p>
        Esta plataforma se consolida como una herramienta clave en la relación de Solimat con sus empresas
        mutualistas y colaboradores, contribuyendo a mejorar la gestión de la siniestralidad y a reforzar el acceso
        a la información.
      </p>
      <p>
        Este entorno digital ha permitido avanzar hacia un modelo de gestión más ágil, facilitando el acceso a la
        información relacionada con Accidentes de Trabajo, Enfermedades Profesionales y Contingencias Comunes, así
        como una mayor trazabilidad de los procesos y una comunicación más directa con la mutua.
      </p>
      <p>
        Entre sus principales capacidades se incluyen el envío de alertas automáticas, la comunicación directa con
        el gestor asignado, la gestión de botiquines, el acceso a utilidades Delt@ y la consulta de la
        siniestralidad, con opción de filtrado y generación de informes, lo que contribuye a una gestión más
        eficiente y estructurada de la información.
      </p>
      <p>Para acceder a la plataforma, date de alta en nuestro Portal de servicios en dos pasos:</p>
      <ul>
        <li>Pincha en la imagen y regístrate como nuevo usuario.</li>
        <li>Cumplimenta los datos, lee y confirma la cláusula de protección de datos y envíalo.</li>
      </ul>
      <p>Una vez dado de alta recibirás, por correo electrónico, tu usuario y contraseña para poder acceder.</p>
      <div className={styles.actions}>
        <ActionButton href="https://portal.solimat.com/" icon="arrow">
          Portal de Servicios
        </ActionButton>
      </div>
    </Prose>
  );
}
