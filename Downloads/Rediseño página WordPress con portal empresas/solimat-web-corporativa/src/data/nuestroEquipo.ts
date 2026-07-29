/** Contenido textual de la página "Nuestro equipo", transcrito de design-refs/Nuestro Equipo.dc.html */

import enfermerosImage from '../images/enfermeros-as.jpg';
import fisioterapeutasImage from '../images/fisioterapeutas.jpg';
import gestoresImage from '../images/gestores.jpg';
import medicosImage from '../images/nuestro-equipo-medicos.jpg';
import serviciosCentralesImage from '../images/personal-administracion.jpg';
import promocionPrevencionImage from '../images/promocion-de-la-prevencion.jpg';
import tsidImage from '../images/tsid.jpg';

export type TeamCategory = 'sanitario' | 'gestion';

export interface TeamIndexItem {
  id: string;
  label: string;
}

export interface TeamIndexGroup {
  label: string;
  items: TeamIndexItem[];
}

export interface TeamMember {
  id: string;
  category: TeamCategory;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  imageMinHeight: number;
}

export interface GestorFunction {
  number: number;
  strong: string;
  /** Se concatena tal cual tras el texto en negrita, por eso incluye su separador inicial. */
  text?: string;
  fullWidth?: boolean;
}

export const INDEX_GROUPS: TeamIndexGroup[] = [
  {
    label: 'Sanitario',
    items: [
      { id: 'medicos', label: 'Médicos/as' },
      { id: 'enfermeros', label: 'Enfermeros/as' },
      { id: 'tsid', label: 'Técnicos/as de diagnóstico por imagen (TSID)' },
      { id: 'fisioterapeutas', label: 'Fisioterapeutas' },
    ],
  },
  {
    label: 'Gestión',
    items: [
      { id: 'servicios-centrales', label: 'Servicios Centrales' },
      { id: 'gestores', label: 'Gestores' },
      { id: 'promocion-prevencion', label: 'Promoción de la Prevención' },
    ],
  },
];

export const SECTION_IDS: string[] = INDEX_GROUPS.flatMap((group) => group.items.map((item) => item.id));

export const INTRO_LEAD =
  'Solimat está formada por un equipo de más de 200 profesionales del ámbito sanitario y de la gestión.';

export const INTRO_TEXT =
  'Nuestro objetivo es siempre ofrecer el mejor servicio a nuestras empresas mutualistas, trabajadores protegidos, autónomos y asesorías laborales.';

export const SANITARIO_MEMBERS: TeamMember[] = [
  {
    id: 'medicos',
    category: 'sanitario',
    title: 'Médicos/as',
    paragraphs: [
      'Nuestros equipos médicos/as lo componen un conjunto de personas con una amplia y contrastada vocación de servicio. Ofrecen a nuestros afiliados su profesionalidad, conocimiento médico y su calidad humana, con el objetivo de proporcionar una asistencia sanitaria de calidad, integral y personalizada, con el fin principal de intentar conseguir la recuperación integra de sus lesiones y su mayor satisfacción.',
      'Su formación continua y adquisición de nuevas habilidades en el manejo de las tecnologías más novedosas es garante de la calidad de su asistencia.',
      'Su implicación, así como su colaboración con profesionales especialistas de otras entidades, conlleva una importante mejora en la eficacia de los tratamientos propuestos.',
    ],
    image: medicosImage,
    imageAlt: 'Médicos/as',
    imagePosition: 'right',
    imageMinHeight: 340,
  },
  {
    id: 'enfermeros',
    category: 'sanitario',
    title: 'Enfermeros/as',
    paragraphs: [
      'El equipo de Enfermería lo forman un grupo de profesionales que, con su indispensable labor siempre al lado de los/as médico/as, contribuyen de forma muy significativa a la recuperación de los pacientes y al bienestar de sus allegados/acompañantes, a los que ofrecen sus mejores cuidados, dedicación y apoyo.',
    ],
    image: enfermerosImage,
    imageAlt: 'Enfermeros/as',
    imagePosition: 'left',
    imageMinHeight: 280,
  },
  {
    id: 'tsid',
    category: 'sanitario',
    title: 'Técnicos/as de diagnóstico por imagen (TSID)',
    paragraphs: [
      'Los mejores resultados en la gestión de los procesos asistenciales no serían posibles sin la aportación que proporcionan también los TSID. Su actividad desarrollada tanto en el Área de Radiodiagnóstico, como su apoyo en el Área Quirúrgica demuestra su alta capacitación y su imprescindible colaboración.',
    ],
    image: tsidImage,
    imageAlt: 'Técnicos/as de diagnóstico por imagen',
    imagePosition: 'right',
    imageMinHeight: 280,
  },
  {
    id: 'fisioterapeutas',
    category: 'sanitario',
    title: 'Fisioterapeutas',
    paragraphs: [
      'Un pilar fundamental en la evolución de las lesiones lo constituye la Rehabilitación. Por esta razón, es prioritario que el trabajo rehabilitador sea eficaz y eficiente.',
      'Para ello se dispone de un Servicio de Fisioterapia formado por profesionales altamente cualificados.',
      'Todos ellos son conscientes y están comprometidos en la consecución de la máxima calidad asistencial, así como en la optimización de los plazos de recuperación.',
      'El servicio de fisioterapia está dotado con los últimos avances tecnológicos, tanto en terapias como en equipamientos y herramientas, y sus integrantes también se someten a planes de formación continua.',
    ],
    image: fisioterapeutasImage,
    imageAlt: 'Fisioterapeutas',
    imagePosition: 'left',
    imageMinHeight: 360,
  },
];

export const GESTION_MEMBERS: TeamMember[] = [
  {
    id: 'servicios-centrales',
    category: 'gestion',
    title: 'Servicios Centrales',
    paragraphs: [
      'Las personas que forman parte de los Servicios Centrales de Solimat sirven de apoyo a las principales áreas y procesos de la organización.',
      'De igual forma, garantizan los recursos tecnológicos, técnicos y materiales y la infraestructura adecuada para que se pueda desarrollar con éxito, de forma eficiente y sostenible, nuestra actividad. Todo ello cumpliendo con la normativa en cada momento y aportando valor a la sociedad.',
      'Las áreas que lo componen son Gerencia, Dirección de Personas, Gestión de Mutualistas y Comunicación, Económico-Financiero, Prestaciones, Asistencial y Sistemas de Información.',
    ],
    image: serviciosCentralesImage,
    imageAlt: 'Personal administración',
    imagePosition: 'right',
    imageMinHeight: 320,
  },
  {
    id: 'gestores',
    category: 'gestion',
    title: 'Gestores',
    paragraphs: [
      'Solimat pone a disposición de las empresas, asesorías laborales y trabajadores por cuenta propia una persona cuyo objetivo es la comunicación flexible y permanente con ellos: el Gestor, con el que colabora directa y personalmente, detectando necesidades e incidencias, al tiempo que ofrece soluciones ágiles mediante un servicio permanente de comunicación entre empresa, mutua y trabajador.',
    ],
    image: gestoresImage,
    imageAlt: 'Gestores',
    imagePosition: 'left',
    imageMinHeight: 300,
  },
  {
    id: 'promocion-prevencion',
    category: 'gestion',
    title: 'Promoción de la Prevención',
    paragraphs: [
      'En esta área, con el objetivo de reducir los accidentes de trabajo y las enfermedades profesionales, nuestros Técnicos de Prevención desarrollan el Plan General de Actividades Preventivas de la Seguridad Social. A través de él, llevan a cabo programas de actuaciones preventivas en nuestras empresas mutualistas y autónomos con mayor siniestralidad.',
    ],
    image: promocionPrevencionImage,
    imageAlt: 'Promoción de la prevención',
    imagePosition: 'right',
    imageMinHeight: 280,
  },
];

export const GESTOR_FUNCTIONS_TITLE = 'Entre sus principales funciones están las de:';

export const GESTOR_FUNCTIONS: GestorFunction[] = [
  {
    number: 1,
    strong: 'Informar de nuestros servicios y actividades.',
    text: ' Proporcionamos información actualizada de nuevos servicios y actividades, invitando a las empresas y trabajadores asociados a integrarse y participar en ellas.',
  },
  {
    number: 2,
    strong: 'Canalizar consultas y sugerencias.',
    text: ' El Gestor integral actúa como canal de comunicación con todos los departamentos de Solimat. El contacto con una persona familiarizada con la organización interna de la entidad permite canalizar de forma más directa y rápida las consultas y sugerencias.',
  },
  {
    number: 3,
    strong: 'Adecuar la prestación de nuestros servicios',
    text: ' a las necesidades de la empresa, a través de un contacto periódico y permanente.',
  },
  {
    number: 4,
    strong: 'Atender reclamaciones, incidencias o no conformidades',
    text: ', en coordinación con el área de Calidad, facilitando los canales adecuados para hacerse escuchar en Solimat.',
  },
  {
    number: 5,
    strong: 'Tramitación de Prestaciones, gestión de Bajas y solicitud de botiquines.',
    fullWidth: true,
  },
];

export const GESTOR_FUNCTIONS_FOOTNOTE =
  'El Gestor constituye una garantía de servicio para los intereses de nuestras empresas asociadas y sus trabajadores, autónomos y asesorías laborales.';
