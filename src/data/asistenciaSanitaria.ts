/** Contenido de la página "Asistencia Sanitaria", transcrito de design-refs/Asistencia Sanitaria.dc.html */

import type { PillarIcon } from '../components/asistenciaSanitaria/PillarCard';
import type { Unit } from '../components/asistenciaSanitaria/UnitCard';
import type { PageIndexItem } from '../components/servicios/PageIndex';
import type { RichBlock } from '../components/servicios/RichContent';
import consultasImage from '../images/consultas.jpg';
import curasSucesivasImage from '../images/curas-sucesivas.jpg';
import recuperacionFisioterapiaImage from '../images/recuperacion-fisioterapia.jpg';
import unidadCirugiaImage from '../images/unidad-cirugia-traumatologica-ortopedia-1.jpg';
import unidadFisioterapiaImage from '../images/unidad-de-fisioterapia.jpg';
import unidadUrgenciasImage from '../images/unidad-urgencias-medicina-asistencial.jpg';

export const SECTIONS: PageIndexItem[] = [
  { id: 'modelo-asistencial', label: 'Modelo Asistencial' },
  { id: 'asistencia-24h', label: 'Asistencia Sanitaria 24 horas' },
  { id: 'hospital-san-jose', label: 'Hospital San José' },
  { id: 'red-de-centros', label: 'Red de Centros' },
];

export const INTRO_LEAD =
  'La Asistencia Sanitaria en Solimat se centra en la recuperación de los trabajadores y autónomos protegidos, ofreciendo la mejor calidad asistencial, acompañando a nuestros pacientes en su proceso, cuidando la experiencia, mediante el trato cercano y personalizado, y aplicando los últimos avances técnicos en el campo de la medicina y de la fisioterapia.';

export const HIGHLIGHTS: Array<{ title: string; items: string[] }> = [
  {
    title: 'Nuestro equipo médico está formado por reconocidos especialistas encargados de:',
    items: [
      'Coordinar sistemáticamente la asistencia médica de cualquier accidentado, garantizando su óptima recuperación.',
      'Realizar el seguimiento continuado de la evolución de las lesiones de los accidentados.',
    ],
  },
  {
    title: 'Apostamos por la innovación para:',
    items: [
      'Dotar a todos nuestros centros asistenciales y nuestro hospital de tecnología de última generación.',
      'Impulsar la formación de nuestro personal sanitario en técnicas y terapias novedosas.',
    ],
  },
];

export const PILLARS: Array<{ icon: PillarIcon; text: string }> = [
  { icon: 'heart', text: 'Atención cercana y personalizada.' },
  { icon: 'team', text: 'Acompañamiento en el proceso sanitario.' },
  { icon: 'star', text: 'Profesionales especializados y experimentados.' },
  { icon: 'shield', text: 'Calidad asistencial y seguridad del paciente.' },
];

export const ASISTENCIA_24H_LEAD =
  'Garantizamos tu asistencia sanitaria, 24 horas los 365 días del año, a través del servicio telefónico gratuito de la Línea 900.';

export const ASISTENCIA_24H_BLOCKS: RichBlock[] = [
  {
    kind: 'list',
    items: [
      { text: ['Call Center Medicalizado.'] },
      { text: ['Primeras pautas a seguir en caso de urgencia.'] },
      { text: ['Localización del centro más cercano.'] },
      { text: ['Gestión del transporte sanitario, en función de la gravedad.'] },
    ],
  },
  {
    kind: 'p',
    text: [
      'En el caso de desplazamiento de trabajadores en el extranjero, ',
      { kind: 'link', text: 'contacta con nosotros', href: '/quienes-somos/podemos-ayudarte' },
      ' para informarte de las pautas a seguir.',
    ],
  },
];

export const HOSPITAL_LEAD = 'Hospital de referencia en Castilla-La Mancha. Abierto 24 horas, 365 días del año';

export const HOSPITAL_CONTACT = {
  street: 'Calle San Pedro el Verde, 35',
  city: '45004 Toledo',
  phone: '925 21 52 67',
  phoneHref: 'tel:925215267',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.217043371674!2d-4.043402923410283!3d39.869375971532804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0b1d6e4a23a7%3A0x7d5bc5cb109d219d!2sHospital%20Laboral%20Solimat!5e0!3m2!1ses!2ses!4v1695484175772!5m2!1ses!2ses',
  mapTitle: 'Mapa Hospital San José',
};

export const HOSPITAL_UNITS: Unit[] = [
  {
    title: 'Unidad de Urgencias y Medicina Asistencial',
    image: unidadUrgenciasImage,
    imageAlt: 'Unidad de Urgencias y Medicina Asistencial',
    blocks: [
      {
        kind: 'list',
        items: [
          { text: ['Asistencia 24 horas'] },
          { text: ['Atención personalizada y especializada'] },
          { text: ['Supervisión a cargo de médicos especialistas'] },
        ],
      },
      {
        kind: 'p',
        text: [
          'Con el objeto de dar un servicio de calidad, hemos dotado a esta Unidad de tecnología de última generación, desfibriladores automáticos, radiología digital en red y electrocardiografía digital.',
        ],
      },
    ],
  },
  {
    title: 'Unidad de Cirugía Traumatológica y Ortopedia',
    image: unidadCirugiaImage,
    imageAlt: 'Unidad de Cirugía Traumatológica y Ortopedia',
    blocks: [
      {
        kind: 'p',
        text: [
          'Somos referente en Castilla-La Mancha. Aplicamos las más avanzadas tecnologías quirúrgico – traumatológicas para tratar a los accidentados de trabajo.',
        ],
      },
      {
        kind: 'p',
        text: [
          'Destacamos en técnicas de Radiofrecuencia, Anestesia de Plexo, Ecocirugía y Tratamientos de baja agresividad en cirugías, entre otras.',
        ],
      },
    ],
  },
  {
    title: 'Unidad del Dolor',
    icon: 'heart',
    blocks: [
      {
        kind: 'p',
        text: [
          'Equipo de profesionales especializados en el ',
          { kind: 'strong', text: 'tratamiento de cuadros dolorosos complejos' },
          ' (severos y casi siempre crónicos)',
          { kind: 'strong', text: ',' },
          ' ya sean para pacientes que no toleren los tratamientos convencionales, sean resistentes a ellos, o simplemente requieran tratamientos especiales.',
        ],
      },
      {
        kind: 'p',
        text: [
          'Al frente de la misma se encuentra un médico especializado en Anestesiología y un equipo de personal sanitario con años de experiencia y conocimiento en las sintomatologías y patologías, tratamientos médicos farmacológicos e intervencionistas.',
        ],
      },
    ],
  },
  {
    title: 'Unidad de Fisioterapia',
    image: unidadFisioterapiaImage,
    imageAlt: 'Unidad de Fisioterapia',
    blocks: [
      {
        kind: 'p',
        text: [
          'Formada por profesionales altamente cualificados y especializados. Además, cuenta con los medios técnicos más avanzados para el tratamiento de las lesiones más complejas.',
        ],
      },
      { kind: 'p', text: ['Dispone instrumentación y medios técnicos para realizar terapias de:'] },
      {
        kind: 'list',
        items: [
          { text: ['Termoterapia'] },
          { text: ['Electroterapia'] },
          { text: ['Laserterapia'] },
          { text: ['Magnetoterapia'] },
          { text: ['Terapia ocupacional'] },
          { text: ['Onda corta'] },
        ],
      },
    ],
  },
  {
    title: 'Unidad de Valoración Funcional o Biomecánica',
    icon: 'chart',
    wide: true,
    blocks: [
      {
        kind: 'p',
        text: [
          'Comprometidos con la recuperación de nuestros pacientes, el equipo médico encargado del seguimiento de los procesos del paciente, determina la realización de pruebas biomecánicas para:',
        ],
      },
      {
        kind: 'list',
        items: [
          {
            text: [
              'Objetivar el alcance las limitaciones funcionales y el progreso conseguido con las terapias aplicadas.',
            ],
          },
          {
            text: [
              'Ayudar a definir el tratamiento más idóneo para conseguir la mejor recuperación de los trabajadores.',
            ],
          },
        ],
      },
    ],
  },
];

export const RED_CENTROS_BLOCKS: RichBlock[] = [
  {
    kind: 'p',
    text: [
      'Pincha ',
      { kind: 'link', text: 'aquí', href: '/red-de-centros' },
      ' y sabrás a qué Centro puedes acudir.',
    ],
  },
  { kind: 'p', text: ['Todos nuestros Centros Asistenciales propios poseen los siguientes servicios:'] },
];

export const RED_CENTROS_LEAD =
  'Solimat pone a tu disposición una Red de Centros propios y concertados a lo largo de todo el territorio nacional.';

export const RED_CENTROS_SERVICES: Unit[] = [
  {
    title: 'Urgencias',
    icon: 'plus',
    blocks: [
      {
        kind: 'p',
        text: [
          'Nuestros servicios de urgencias tienen como misión la prestación de la atención sanitaria urgente a las personas que han sufrido un accidente de trabajo, en el tiempo adecuado, con los recursos técnicos y humanos necesarios para atenderles.',
        ],
      },
      {
        kind: 'p',
        text: [
          'Se realizan en el centro sanitario más próximo al lugar del accidente en la Red Asistencial Propia o Concertada de Solimat.',
        ],
      },
      {
        kind: 'p',
        text: [
          'Para aquellos casos que revistan especial gravedad los trabajadores pueden acudir a la red sanitaria pública.',
        ],
      },
    ],
  },
  {
    title: 'Curas sucesivas',
    image: curasSucesivasImage,
    imageAlt: 'Curas sucesivas',
    blocks: [
      {
        kind: 'p',
        text: [
          'Todos nuestros centros cuentan con servicio de curas, personal de enfermería y médico cualificado para completar la prestación asistencial requerida por los trabajadores accidentados.',
        ],
      },
    ],
  },
  {
    title: 'Consultas',
    image: consultasImage,
    imageAlt: 'Consultas',
    blocks: [
      {
        kind: 'p',
        text: [
          'Realizamos el seguimiento de todo tu proceso asistencial a través de consultas periódicas donde analizaremos los pasos a seguir en la recuperación de nuestros pacientes.',
        ],
      },
    ],
  },
  {
    title: 'Recuperación y Fisioterapia',
    image: recuperacionFisioterapiaImage,
    imageAlt: 'Recuperación y Fisioterapia',
    blocks: [
      {
        kind: 'p',
        text: [
          'Nuestro servicio de Fisioterapia completa la prestación asistencial requerida y se convierte, en los casos requeridos, en una parte fundamental en la recuperación de nuestros pacientes.',
        ],
      },
      {
        kind: 'p',
        text: [
          'Solimat cuenta con los medios técnicos y humanos más avanzados para el tratamiento de las lesiones más complejas. Dispone de la siguiente instrumentación y medios técnicos:',
        ],
      },
      {
        kind: 'list',
        items: [
          { text: ['Termoterapia'] },
          { text: ['Electroterapia'] },
          { text: ['Laserterapia y magnetoterapia'] },
          { text: ['Terapia ocupacional'] },
          { text: ['Onda Corta'] },
        ],
      },
    ],
  },
];
