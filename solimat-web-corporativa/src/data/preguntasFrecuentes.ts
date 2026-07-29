import desplazadosExtranjeroPdf from '../pdfs/Asistencia-sanitaria-a-trabajadores-desplazados-al-extranjero.pdf';
import procedimientoAccidentePdf from '../pdfs/Procedimiento-de-actuacion-en-caso-de-accidente.pdf';

/** Texto plano dentro de una respuesta. */
export interface FaqText {
  kind: 'text';
  text: string;
}

/** Enlace a una ruta interna de la SPA (se renderiza con `<Link>`). */
export interface FaqRoute {
  kind: 'route';
  text: string;
  to: string;
}

/** Enlace externo o descarga de PDF local: siempre se abre en una pestaña nueva. */
export interface FaqExternal {
  kind: 'external';
  text: string;
  href: string;
}

/** Enlace que en el diseño todavía no tiene destino (`href="#"`). */
export interface FaqPlaceholder {
  kind: 'placeholder';
  text: string;
}

export type FaqFragment = FaqText | FaqRoute | FaqExternal | FaqPlaceholder;

export interface FaqParagraph {
  kind: 'paragraph';
  content: FaqFragment[];
}

export interface FaqList {
  kind: 'list';
  items: FaqFragment[][];
}

export type FaqBlock = FaqParagraph | FaqList;

export interface FaqEntry {
  id: string;
  question: string;
  answer: FaqBlock[];
}

function text(value: string): FaqText {
  return { kind: 'text', text: value };
}

export const PREGUNTAS_FRECUENTES: FaqEntry[] = [
  {
    id: 'que-es-una-mutua',
    question: '¿Qué es una mutua y qué servicios ofrece Solimat?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'Es una asociación privada de empresarios que realiza una colaboración eficaz y eficiente con la Seguridad Social.',
          ),
        ],
      },
      {
        kind: 'paragraph',
        content: [
          text(
            'Su principal actividad es la gestión de prestaciones económicas y la asistencia sanitaria en caso de accidente de trabajo de los trabajadores protegidos.',
          ),
        ],
      },
    ],
  },
  {
    id: 'afiliacion-autonomo',
    question: '¿Cómo puedo afiliarme a Solimat como trabajador autónomo?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'Si has decido dar el paso para ser trabajador por cuenta propia, necesitas una mutua que te proteja. Dándote de alta con Solimat tienes acceso a todos nuestros servicios. En el siguiente ',
          ),
          { kind: 'route', text: 'enlace', to: '/para-autonomo' },
          text(
            ' te explicamos paso a paso cómo hacerlo o, si lo prefieres, un gestor puede ayudarte con los trámites llamando a tu ',
          ),
          { kind: 'placeholder', text: 'Dirección Provincial' },
          text('.'),
        ],
      },
    ],
  },
  {
    id: 'beneficios-proteccion',
    question: '¿Cuáles son los beneficios de estar protegido por Solimat?',
    answer: [
      {
        kind: 'list',
        items: [
          [text('Tener un interlocutor único -gestor- que te ayuda en todas tus gestiones y/o resolución de dudas.')],
          [
            text(
              'Asistencia sanitaria centrada en la recuperación de los trabajadores y autónomos protegidos, con una gran calidad asistencial. Nuestros profesionales sanitarios acompañan a los pacientes en su proceso, con un trato cercano y personalizado.',
            ),
          ],
          [
            text(
              'Acceso a una amplia red de centros en todo el país y al único Hospital laboral en Castilla - La Mancha, el Hospital San José.',
            ),
          ],
          [text('Centros dotados con los últimos avances técnicos en el campo de la medicina y de la fisioterapia.')],
          [text('Plataformas de comunicación para ayudarte en tu gestión diaria.')],
        ],
      },
    ],
  },
  {
    id: 'prestaciones-economicas-trabajador',
    question: '¿Cuáles son las prestaciones económicas a las que tengo derecho como trabajador?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'En función de tu situación, puedes acceder a la prestación económica que te corresponda. Conócelas en este ',
          ),
          { kind: 'route', text: 'enlace', to: '/prestaciones-economicas' },
          text(' y sus trámites para solicitarlas. Si tienes alguna duda, ponte en contacto con '),
          { kind: 'placeholder', text: 'nosotros' },
          text(' y te ayudamos.'),
        ],
      },
    ],
  },
  {
    id: 'que-hacer-accidente-laboral',
    question: '¿Qué debo hacer en caso de accidente laboral?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text('En esta '),
          { kind: 'external', text: 'infografía', href: procedimientoAccidentePdf },
          text(
            ' te explicamos qué debes hacer ante cada situación. Si necesitas más información, contacta con nosotros a través del 900 111 072.',
          ),
        ],
      },
    ],
  },
  {
    id: 'desplazamientos-extranjero',
    question: '¿Qué hacer ante desplazamientos al extranjero por trabajo?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text('El país de destino determina los trámites a realizar. '),
          { kind: 'external', text: 'Aquí', href: desplazadosExtranjeroPdf },
          text(' te dejamos información básica. Puedes ampliarla en el 900 111 072.'),
        ],
      },
    ],
  },
  {
    id: 'embarazo-de-riesgo',
    question: '¿Qué diferencia hay entre embarazo de riesgo y riesgo en el embarazo?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'Un embarazo de riesgo es un embarazo con cualquier riesgo para la madre o para el feto y que hace aconsejable que la madre tenga unos cuidados especiales.',
          ),
        ],
      },
      {
        kind: 'paragraph',
        content: [
          text(
            'El riesgo en el embarazo está relacionado con el desempeño de la actividad y/o condiciones de trabajo de la gestante, influyendo negativamente en su salud, o en la de tu hijo/a.',
          ),
        ],
      },
    ],
  },
  {
    id: 'accidente-laboral-no-laboral',
    question: '¿Qué diferencia hay entre accidente laboral y no laboral?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'Un accidente laboral es toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo que se ejecute por cuenta ajena o propia. En este caso, será atendido por los servicios sanitarios de la mutua quiénes son los encargados de determinar la baja y alta del proceso.',
          ),
        ],
      },
      {
        kind: 'paragraph',
        content: [
          text(
            'En cambio, un accidente no laboral es un fenómeno que provoca una lesión funcional o corporal, permanente o temporal y que se produce de forma ajena al trabajo realizado por cuenta propia o ajena, sin ocasión de la prestación del servicio. Recibe la asistencia sanitaria del Sistema Público de Salud y, por tanto, la baja y el alta médica las determinan los médicos de la Seguridad Social.',
          ),
        ],
      },
    ],
  },
  {
    id: 'sistema-delta',
    question: '¿Qué es el Sistema Delt@ y para qué sirve?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'El Sistema Delta (Sistema de Declaración Electrónica de Trabajadores Accidentados) es una herramienta informática a través de la cual se comunican los accidentes que ocurren en el trabajo, tanto si es con baja como si no lo es. Puedes acceder ',
          ),
          { kind: 'route', text: 'aquí', to: '/recursos-y-herramientas' },
          text(' para ampliar la información.'),
        ],
      },
    ],
  },
  {
    id: 'portal-de-servicios',
    question: '¿Qué es el Portal de Servicios?',
    answer: [
      {
        kind: 'paragraph',
        content: [
          text(
            'Es una plataforma de intercambio de información que Solimat pone a disposición como ayuda en la gestión diaria a empresas, asesorías laborales y autónomos. Si quieres tener acceso a ella, pincha ',
          ),
          { kind: 'external', text: 'aquí', href: 'http://portal.solimat.com/' },
          text(' y te explicamos cómo darte de alta.'),
        ],
      },
    ],
  },
];
