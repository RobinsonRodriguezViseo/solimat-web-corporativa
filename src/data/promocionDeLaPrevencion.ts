/** Contenido de la página "Promoción de la Prevención", transcrito de design-refs/Promocion De La Prevencion.dc.html */

import type { DownloadLinkItem } from '../components/promocionDeLaPrevencion/DownloadLink';
import type { Feature } from '../components/promocionDeLaPrevencion/FeatureCard';
import type { Organismo } from '../components/promocionDeLaPrevencion/OrgLogo';
import type { PageIndexItem } from '../components/servicios/PageIndex';
import type { RichBlock } from '../components/servicios/RichContent';
import eashwLogo from '../images/eashw.png';
import castillaManchaLogo from '../images/castilla-mancha.png';
import insstLogo from '../images/insst.png';
import irsstLogo from '../images/irsst.png';
import itssLogo from '../images/itss.png';
import juntaCastillaLeonLogo from '../images/junta-castilla-leon.png';
import oitLogo from '../images/oit.png';
import calzadoPdf from '../pdfs/calzado-de-uso-profesional.pdf';
import distraccionesPdf from '../pdfs/distracciones-al-volante.pdf';
import ejerciciosEstiramientoPdf from '../pdfs/ejercicios-de-estiramiento.pdf';
import ejerciciosLumbarPdf from '../pdfs/ejercicios-dolor-lumbar.pdf';
import ejerciciosCervicalPdf from '../pdfs/ejercicios-relajacion-cervical.pdf';
import ergonomiaPdf from '../pdfs/ergonomia-postural.pdf';
import hieloNievePdf from '../pdfs/recomendaciones-de-seguridad-en-desplazamientos-con-hielo-y-nieve.pdf';
import integracionPdf from '../pdfs/integracion-de-la-prevencion.pdf';
import lluviaPdf from '../pdfs/lluvia-torrencial-viento-riada-o-inundacion.pdf';
import leyTraficoPdf from '../pdfs/18.-NOVEDADES-LEY-DE-TRAFICO.pdf';
import neumaticosPdf from '../pdfs/neumaticos.pdf';
import nieblaPdf from '../pdfs/niebla.pdf';
import ordenLimpiezaPdf from '../pdfs/orden-y-limpieza.pdf';
import procesoSeleccionPdf from '../pdfs/proceso-de-seleccion.pdf';
import proteccionAuditivaPdf from '../pdfs/proteccion-auditiva.pdf';
import proteccionGuantesPdf from '../pdfs/proteccion-guantes-riesgos-mecanicos.pdf';
import protegeteCalorPdf from '../pdfs/protegete-del-calor.pdf';
import protegeteFrioPdf from '../pdfs/protegete-del-frio.pdf';
import recursoPreventivoPdf from '../pdfs/recurso-preventivo.pdf';
import sindromePostvacacionalPdf from '../pdfs/sindrome-postvacacional.pdf';
import trabajoAireLibrePdf from '../pdfs/9.-RECOMENDACIONES-SEGURIDAD-TRABAJOS-AIRE-LIBRE.pdf';
import trabajoDomiciliarioPdf from '../pdfs/recomendaciones-de-seguridad-y-salud-para-realizar-trabajo-domiciliario.pdf';

export const SECTIONS: PageIndexItem[] = [
  { id: 'plan-general', label: 'Plan General de Actividades Preventivas' },
  { id: 'plan-siniestralidad', label: 'Plan de Reducción de la Siniestralidad' },
  { id: 'buenas-practicas', label: 'Divulgación de Buenas Prácticas' },
  { id: 'prevencion-10', label: 'Prevención 10' },
  { id: 'publicaciones', label: 'Códigos de Buenas Prácticas' },
  { id: 'epis', label: "Epi's la última barrera", level: 'sub' },
  { id: 'seguridad-trabajo', label: 'Seguridad y salud en el trabajo', level: 'sub' },
  { id: 'seguridad-vial', label: 'Seguridad Vial', level: 'sub' },
  { id: 'gestion-prevencion', label: 'Gestión de la Prevención', level: 'sub' },
  { id: 'canal-consultas', label: 'Canal de Consultas y Solicitudes' },
  { id: 'enlaces-interes', label: 'Enlaces de Interés' },
];

export const INTRO_BLOCKS: RichBlock[] = [
  {
    kind: 'p',
    text: [
      'Nuestras actividades están reguladas por el Real Decreto 860/2018, de 13 de julio, por el que se regulan las actividades preventivas de la acción protectora de la Seguridad Social a realizar por las mutuas colaboradoras con la Seguridad Social y la Dirección General de Ordenación de la Seguridad Social determina los servicios y actividades técnico-preventivas que deben prestar las Mutuas anualmente.',
    ],
  },
  {
    kind: 'p',
    text: [
      'Las actividades preventivas que desarrollamos no incluyen las obligaciones que las empresas deben desarrollar derivadas del cumplimiento de la Ley 31/1995 de Prevención de Riesgos Laborales.',
    ],
  },
];

export const PLAN_GENERAL_BLOCKS: RichBlock[] = [
  {
    kind: 'p',
    text: [
      'La Secretaría de Estado de la Seguridad Social y Pensiones establece anualmente y dentro de su acción protectora la Planificación General de actividades preventivas de la Seguridad Social, a desarrollar por las mutuas colaboradoras.',
    ],
  },
  {
    kind: 'p',
    text: [
      'Solimat en cumplimiento a lo establecido en las resoluciones anuales realiza la planificación de sus actividades preventivas que consisten en el desarrollo de planes y programas dirigidos a:',
    ],
  },
  {
    kind: 'list',
    items: [
      { text: ['Asesoramiento técnico a pymes y empresas de sectores con un alto índice de siniestralidad.'] },
      { text: ['Asesoramiento a empresas con actividades concurrentes.'] },
      { text: ['Difusión del servicio de la Seguridad Social “Prevencion10.es”.'] },
      { text: ['Asesoramiento para la adaptación de puestos de trabajo.'] },
      {
        text: [
          'Actuaciones para el control y, en su caso, reducción de los accidentes de trabajo y de las enfermedades profesionales.',
        ],
      },
      {
        text: [
          'Actividades de investigación, desarrollo e innovación para la reducción de las contingencias profesionales.',
        ],
      },
    ],
  },
];

export const PLAN_SINIESTRALIDAD_BLOCKS: RichBlock[] = [
  {
    kind: 'p',
    text: [
      'El Plan de Reducción de la Siniestralidad es un programa de asesoramiento técnico en materia de prevención de riesgos laborales, realizado por los técnicos de prevención de Solimat.',
    ],
  },
  {
    kind: 'p',
    text: [
      'Este programa consiste en un asesoramiento a la empresa para control y reducción de las situaciones que han ocasionado una alta siniestralidad, incluyendo recomendaciones sobre las mejoras a realizar en su sistema de Gestión de la Prevención.',
    ],
  },
  {
    kind: 'p',
    text: [
      'En este programa, cuya duración aproximada será de tres años, los técnicos de prevención de Solimat realizarán diversas actuaciones, en función de las características de la empresa.',
    ],
  },
  {
    kind: 'list',
    items: [
      { text: ['Identificación de las causas de los accidentes y enfermedades profesionales.'] },
      { text: ['Verificación del grado de cumplimiento de los requisitos legales en materia de prevención.'] },
      { text: ['Asesoramiento en la investigación de accidentes de trabajo.'] },
      {
        text: [
          'Diagnóstico de nivel de integración de la prevención de riesgos laborales en el sistema de gestión de la empresa.',
        ],
      },
      {
        text: [
          'Asesoramiento en la implantación de un procedimiento de Coordinación de Actividades empresariales.',
        ],
      },
    ],
  },
  {
    kind: 'p',
    text: [
      'Si su empresa está interesada en la inclusión en este Programa de Reducción de siniestralidad puede contactar en: ',
      { kind: 'link', text: 'web@solimat.com', href: 'mailto:web@solimat.com' },
    ],
  },
];

export const BUENAS_PRACTICAS_BLOCKS: RichBlock[] = [
  {
    kind: 'p',
    text: [
      'Tenemos muy presente nuestro objetivo de concienzar a las personas trabajadoras, en cuanto a la importancia de los cuidados de la salud y la integridad psicofísica en el entorno de trabajo.',
    ],
  },
  {
    kind: 'p',
    text: [
      'En Solimat realizamos acciones divulgativas a través de nuestro ',
      { kind: 'strong', text: 'Campus Virtual' },
      ' llevando a cabo diversas actividades educativas en diferentes materias, con el fin de sensibilizar a empresas y trabajadores sobre medidas de prevención y promoción de la salud.',
    ],
  },
  {
    kind: 'p',
    text: [
      'Estas actividades están dirigidas a los trabajadores de empresas asociadas a Solimat, así como a nuestros autónomos adheridos, no teniendo ningún coste su realización.',
    ],
  },
];

export const PREVENCION_10_BLOCKS: RichBlock[] = [
  { kind: 'p', text: ['Es un servicio público de asesoramiento en Prevención de Riesgos Laborales que permite:'] },
  {
    kind: 'list',
    items: [
      { text: ['Gestionar de forma sencilla los riesgos laborales de hasta 25 trabajadores.'] },
      {
        text: [
          'Facilitar el cumplimiento en materia de coordinación de actividades empresariales e informar de sus riesgos a los trabajadores autónomos.',
        ],
      },
    ],
  },
];

export const PREVENCION_10_FEATURES: Feature[] = [
  {
    title: 'evalua-t®',
    blocks: [
      {
        kind: 'p',
        text: [
          'Permite la realización de la evaluación de riesgos, la planificación preventiva y la obtención del plan de prevención de riesgos laborales.',
        ],
      },
    ],
  },
  {
    title: 'autopreven-t®',
    blocks: [
      {
        kind: 'p',
        text: [
          'Proporciona información sobre riesgos laborales y facilita la coordinación de actividades empresariales a quienes trabajen por cuenta propia y no tengan personal a su cargo.',
        ],
      },
    ],
  },
  {
    title: 'instruye-t®',
    blocks: [
      {
        kind: 'p',
        text: [
          'Curso ',
          { kind: 'em', text: 'on-line' },
          ' de 30 horas con el que obtener la capacitación para el desempeño de las funciones de nivel básico en prevención de riesgos laborales.',
        ],
      },
    ],
  },
  {
    title: 'STOP Riesgos Laborales',
    blocks: [{ kind: 'p', text: ['Línea telefónica de atención al público.'] }],
  },
];

export interface PublicacionGroup {
  id: string;
  title: string;
  items: DownloadLinkItem[];
}

export const PUBLICACIONES: PublicacionGroup[] = [
  {
    id: 'epis',
    title: "Epi's la última barrera",
    items: [
      { label: 'Proceso de selección', href: procesoSeleccionPdf },
      { label: 'Calzado de uso profesional', href: calzadoPdf },
      { label: 'Protección auditiva', href: proteccionAuditivaPdf },
      { label: 'Protección guantes de riesgo mecánico', href: proteccionGuantesPdf },
    ],
  },
  {
    id: 'seguridad-trabajo',
    title: 'Seguridad y Salud en el trabajo',
    items: [
      {
        label: 'Recomendaciones de seguridad y salud para realizar trabajo domiciliario',
        href: trabajoDomiciliarioPdf,
      },
      { label: 'Trabajos al aire libre. Protégete', href: trabajoAireLibrePdf },
      { label: 'Protégete del frío', href: protegeteFrioPdf },
      { label: 'Protégete del calor', href: protegeteCalorPdf },
      { label: 'Orden y limpieza', href: ordenLimpiezaPdf },
      { label: 'Síndrome Postvacacional', href: sindromePostvacacionalPdf },
      { label: 'Ejercicios dolor lumbar', href: ejerciciosLumbarPdf },
      { label: 'Ejercicios relajación cervical', href: ejerciciosCervicalPdf },
      { label: 'Ejercicios de estiramiento', href: ejerciciosEstiramientoPdf },
      { label: 'Ergonomía postural', href: ergonomiaPdf },
    ],
  },
  {
    id: 'seguridad-vial',
    title: 'Seguridad Vial',
    items: [
      { label: 'Principales novedades. Ley de Tráfico y Seguridad Vial', href: leyTraficoPdf },
      { label: 'Recomendaciones de Seguridad en desplazamientos con hielo y nieve', href: hieloNievePdf },
      { label: 'Lluvia torrencial, viento, riada o inundación', href: lluviaPdf },
      { label: 'Neumáticos', href: neumaticosPdf },
      { label: 'Niebla', href: nieblaPdf },
      { label: 'Distracciones al volante', href: distraccionesPdf },
    ],
  },
  {
    id: 'gestion-prevencion',
    title: 'Gestión de la Prevención',
    items: [
      { label: 'Integración de la Prevención', href: integracionPdf },
      { label: 'Recurso Preventivo', href: recursoPreventivoPdf },
    ],
  },
];

export const PUBLICACIONES_FOOTNOTE: RichBlock[] = [
  {
    kind: 'p',
    text: [
      'También ',
      { kind: 'link', text: 'aquí', href: 'https://www.insst.es/documentacion/catalogo-de-publicaciones' },
      ' te podrás descargar el Catálogo de Publicaciones del Instituto Nacional de Seguridad y Salud en el trabajo (INSST).',
    ],
  },
];

export const CANAL_CONSULTAS_TEXT =
  'Si eres mutualista, puedes dirigirnos tus consultas en materia de prevención y/o solicitar informes de siniestralidad de su empresa contactando a través de la dirección de correo electrónico:';

export const ORGANISMOS_AUTONOMICOS: Organismo[] = [
  {
    name: 'Castilla la Mancha',
    href: 'https://seguridadlaboral.castillalamancha.es/',
    logo: castillaManchaLogo,
  },
  {
    name: 'IRSST',
    href: 'https://www.comunidad.madrid/inversion/prevencion-riesgos-laborales',
    logo: irsstLogo,
  },
  {
    name: 'Junta de Castilla y Leon',
    href: 'https://trabajoyprevencion.jcyl.es/web/es/trabajo-prevencion-riesgos-laborales.html',
    logo: juntaCastillaLeonLogo,
  },
];

export const ORGANISMOS_ESTATALES: Organismo[] = [
  { name: 'INSST', href: 'http://www.insht.es/portal/site/Insht/', logo: insstLogo },
  { name: 'ITSS', href: 'https://www.mites.gob.es/itss/web/', logo: itssLogo },
];

export const ORGANISMOS_ESTATALES_LINKS: DownloadLinkItem[] = [
  {
    label: 'Notas técnicas de prevención',
    href: 'https://www.insst.es/ntp-notas-tecnicas-de-prevencion',
    icon: 'arrow',
  },
  { label: 'Guias técnicas', href: 'https://www.insst.es/guias-tecnicas-transversales', icon: 'arrow' },
];

export const ORGANISMOS_INTERNACIONALES: Organismo[] = [
  { name: 'EASHW', href: 'https://osha.europa.eu/es', logo: eashwLogo },
  { name: 'OIT', href: 'https://www.ilo.org/global/lang--es/index.htm', logo: oitLogo },
];
