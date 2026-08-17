import InfoCard from '../InfoCard';
import SectionLabel from '../SectionLabel';

const INFORMACION_UTIL_URL = 'https://www.seg-social.es/wps/portal/wss/internet/InformacionUtil/32078';
const FORMULARIOS_PAIS_URL = 'https://www.seg-social.es/wps/portal/wss/internet/InformacionUtil/32078/38626';
const TA300_URL = 'https://www.seg-social.es/descarga/es/51664';

/** Tarjeta "Desplazamiento al extranjero" de la sección "En caso de…" de Para Empresa. */
export default function DesplazamientoExtranjeroCard() {
  return (
    <InfoCard id="desplazamiento-al-extranjero" title="Desplazamiento al extranjero">
      <p>
        Si como empresa necesitas enviar trabajadores al extranjero, debes{' '}
        <strong>comunicar previamente a la Tesorería General de la Seguridad Social</strong> el desplazamiento de
        estos.
      </p>
      <p>
        Los trámites administrativos varían en función del país de destino, puede ampliar la información en:{' '}
        <a href={INFORMACION_UTIL_URL} target="_blank" rel="noopener noreferrer">
          Seguridad Social: Información Útil (seg-social.es)
        </a>
        .
      </p>
      <SectionLabel>Trámites previos al desplazamiento</SectionLabel>
      <ul>
        <li>
          Ante la <strong>Tesorería General de la Seguridad Social:</strong>
          <ul>
            <li>
              Presentar cumplimentado el modelo{' '}
              <a href={TA300_URL} target="_blank" rel="noopener noreferrer">
                TA300.cdr (seg-social.es)
              </a>
              .
            </li>
            <li>
              Cumplimentar y presentar en la Tesorería General de la Seguridad Social los formularios específicos
              del país de destino:
              <ul>
                <li>
                  Para países con convenio bilateral con y sin asistencia sanitaria, puedes acceder a los
                  formularios en:{' '}
                  <a href={FORMULARIOS_PAIS_URL} target="_blank" rel="noopener noreferrer">
                    Seguridad Social: Información Útil (seg-social.es)
                  </a>
                </li>
                <li>
                  No dispone de convenio bilateral con la Seguridad Social: No requiere trámite ante la TGSS, siendo
                  recomendable la contratación de un seguro privado con cobertura en contingencia profesional.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Ante <strong>Solimat</strong>, se recomienda remitir a su gestor una relación nominal de los trabajadores
          que se van a desplazar, lugar de destino, actividad que van a desarrollar y la duración de la estancia en
          el destino. De esta forma, te podremos facilitar previamente la red de centros sanitarios donde acudir en
          caso de accidente de trabajo.
        </li>
      </ul>
      <h4>Accidente laboral en el extranjero</h4>
      <SectionLabel>¿Qué hace Solimat por ti?</SectionLabel>
      <ul>
        <li>
          Asesoramos sobre la red de centros sanitarios más próximos en el país de destino, tras informarnos del
          desplazamiento.
        </li>
        <li>Orientamos telefónicamente en el +34 925 72 72 72.</li>
        <li>Asistimos la urgencia y realizamos el seguimiento conforme a la normativa y convenios aplicables.</li>
        <li>
          Abonamos el transporte sanitario (repatriación), previa autorización del Servicio Médico Solimat para
          continuar el tratamiento en España.
        </li>
      </ul>
      <SectionLabel>Recomendaciones</SectionLabel>
      <ul>
        <li>
          Remitir a <a href="mailto:web@solimat.com">web@solimat.com</a>, previo al desplazamiento, una relación
          nominal de los trabajadores que van a viajar, el lugar, la actividad a desarrollar y la duración del viaje
          para una mejor comunicación.
        </li>
        <li>Hacer entrega al trabajador de la tarjeta de la Línea 900.</li>
        <li>Contar con un seguro privado para procesos de Contingencia Común de tus trabajadores.</li>
        <li>
          Contactar con tu Servicio de Prevención, si el desplazamiento se realiza a países con posibles
          enfermedades endémicas para posibles vacunas.
        </li>
      </ul>
    </InfoCard>
  );
}
