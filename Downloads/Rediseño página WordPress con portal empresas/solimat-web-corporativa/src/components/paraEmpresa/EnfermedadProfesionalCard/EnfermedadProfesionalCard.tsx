import InfoCard from '../InfoCard';
import SectionLabel from '../SectionLabel';

const RD_1299_2006_URL = 'https://boe.es/buscar/act.php?id=BOE-A-2006-22169';

/** Tarjeta "Enfermedad profesional" de la sección "En caso de…" de Para Empresa. */
export default function EnfermedadProfesionalCard() {
  return (
    <InfoCard id="enfermedad-profesional" title="Enfermedad profesional">
      <p>
        Una enfermedad profesional es aquella producida a consecuencia de las condiciones del trabajo (patología
        médica, traumática o el daño contraído como consecuencia del trabajo realizado) y esté especificada en el
        cuadro de enfermedades profesionales oficial recogido en el{' '}
        <a href={RD_1299_2006_URL} target="_blank" rel="noopener noreferrer">
          RD 1299/2006 de 10 de noviembre
        </a>
        .
      </p>
      <p>Si crees que algún trabajador se encuentra en esta circunstancia:</p>
      <ul>
        <li>
          Localiza el <strong>centro más cercano</strong> llamando al 900 111 072.
        </li>
        <li>
          Cumplimenta y entrega el <strong>volante de asistencia</strong> a la persona (opcional por parte de la
          empresa).
        </li>
        {/*
          PENDIENTE — Descarga "información necesaria" (SOLIMAT_informacionRequeridaEnf_02_empresa.pdf).
          El diseño enlaza aquí ese documento como descarga, pero el PDF no está disponible: no existe
          en `src/pdfs` y la ruta del sitio antiguo
          (`/pdf/contingencia-profesional/SOLIMAT_informacionRequeridaEnf_02_empresa.pdf` en el dominio
          corporativo) responde 404.
          Para restaurarlo: añadir el PDF a `src/pdfs`, importarlo aquí y volver a envolver
          el texto "información necesaria" en `<a href={informacionRequeridaPdf} target="_blank" rel="noopener noreferrer">`.
        */}
        <li>
          Una vez atendido por el servicio médico de Solimat y ante la sospecha de que un trabajador pueda padecer
          una enfermedad profesional, facilita a Solimat la información necesaria para la correcta tramitación de la
          enfermedad profesional a la autoridad laboral.
        </li>
        <li>
          Ante el inicio de un periodo de observación para la determinación de la existencia de enfermedad
          profesional, Solimat atenderá al/a paciente. (Duración máxima 6 meses, prorrogable otros 6, previo informe
          del INSS).
        </li>
        <li>
          Si se determina enfermedad profesional y:
          <ul>
            <li>
              <strong>No requiere situación de incapacidad temporal</strong>, la empresa tiene la opción de: cambiar
              a otro puesto exento de riesgo a esta persona, para evitar la progresión de la enfermedad,
              beneficiándose de una reducción del 50% en las aportaciones empresariales a la Seguridad Social por
              contingencias comunes. Si no fuese posible el cambio, previa conformidad de la Inspección de Trabajo,
              la empresa puede solicitar la interrupción de la relación laboral.
            </li>
            <li>
              <strong>Requiera situación de incapacidad temporal</strong>, la tramitación del parte de enfermedad
              profesional y su comunicación a la autoridad laboral, la llevará a cabo Solimat, a través de la
              aplicación CEPROSS.
            </li>
            <li>
              <strong>Requiera otro tipo de incapacidad</strong>
            </li>
          </ul>
        </li>
      </ul>
      <SectionLabel>
        Obligaciones de la empresa para cubrir un puesto de trabajo con riesgo de enfermedad profesional
      </SectionLabel>
      <ul>
        <li>
          Realización de un <strong>reconocimiento médico previo a la admisión</strong> del trabajador que ha de
          ocupar dicho puesto.
        </li>
        <li>
          Realización de <strong>reconocimientos médicos periódicos</strong>, determinados para cada tipo de
          enfermedad.
        </li>
      </ul>
      <SectionLabel>¿Qué hace Solimat por ti?</SectionLabel>
      <ul>
        <li>
          Atendemos sanitariamente y acompañamos al/a trabajador/a durante todo el proceso de detección y
          diagnóstico de la enfermedad profesional y una vez reconocida la misma.
        </li>
        <li>Te asesoramos a ti y a tus trabajadores/as sobre los trámites a realizar, a través de tu gestor Solimat.</li>
        <li>Abonamos la prestación económica al trabajador afectado por enfermedad profesional.</li>
        <li>
          Asumimos el abono directo de la prestación, en caso de extinción de trabajo durante la situación de
          incapacidad temporal derivada de enfermedad profesional.
        </li>
      </ul>
    </InfoCard>
  );
}
