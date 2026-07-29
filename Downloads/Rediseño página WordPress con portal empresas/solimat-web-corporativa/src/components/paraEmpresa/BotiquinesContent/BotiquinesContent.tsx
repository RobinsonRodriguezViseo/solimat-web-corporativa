import solicitudBotiquinPdf from '../../../pdfs/Solicitud-de-botiquin-de-primeros-auxilios-2024-autorrellenable.pdf';
import ActionButton from '../ActionButton';
import Prose from '../Prose';
import styles from './BotiquinesContent.module.css';

interface BotiquinesContentProps {
  /** Título dentro de la tarjeta; se omite cuando la sección ya lo aporta. */
  title?: string;
  /** El diseño escribe el enlace en minúsculas en Para Empresa y capitalizado en el resto. */
  provincialLabel?: string;
}

/** Texto y CTA del bloque "Botiquines" (Para Empresa, Para Autónomo y Para Asesoría Laboral). */
export default function BotiquinesContent({
  title,
  provincialLabel = 'Dirección Provincial',
}: BotiquinesContentProps) {
  return (
    <Prose>
      {title ? <h3>{title}</h3> : null}
      <p>
        Si necesitas un nuevo botiquín o reponer su contenido, envía esta solicitud a tu{' '}
        <a href="#">{provincialLabel}</a>:
      </p>
      <div className={styles.actions}>
        <ActionButton href={solicitudBotiquinPdf} icon="file" asset>
          Solicitud botiquín
        </ActionButton>
      </div>
      <p>Nos encargamos de tramitarla y, en unos días, lo recibirás en la dirección que nos indiques.</p>
    </Prose>
  );
}
