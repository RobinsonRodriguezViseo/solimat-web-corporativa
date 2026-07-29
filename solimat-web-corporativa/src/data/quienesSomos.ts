/** Contenido textual de la página "Quiénes somos", transcrito de design-refs/Quienes Somos.dc.html */

export const SECTIONS = [
  { id: 'las-mutuas', label: 'Las Mutuas' },
  { id: 'nuestra-historia', label: 'Nuestra historia' },
  { id: 'solimat-hoy', label: 'Solimat hoy' },
  { id: 'principios-valores', label: 'Principios y Valores' },
  { id: 'sostenibilidad', label: 'Sostenibilidad y RSC' },
] as const;

export const ACTIVIDADES_MUTUA: string[] = [
  'La gestión de las prestaciones económicas y de la asistencia sanitaria, incluida la rehabilitación, comprendidas en la protección de las contingencias de accidentes de trabajo y enfermedades profesionales de la Seguridad Social, así como de las actividades de prevención de las mismas contingencias que dispensa la acción protectora.',
  'La gestión de la prestación económica por incapacidad temporal derivada de contingencias comunes.',
  'La gestión de las prestaciones por riesgo durante el embarazo y riesgo durante la lactancia natural.',
  'La gestión de las prestaciones económicas por cese en la actividad de los trabajadores por cuenta propia, en los términos establecidos en el Título V de esta misma Ley.',
  'La gestión de la prestación por cuidado de menores afectados por cáncer u otra enfermedad grave.',
  'Las demás actividades de la Seguridad Social que le sean atribuidas legalmente.',
];

export const HISTORIA_PARAGRAPHS: string[] = [
  'A principios de los años 90 inició su expansión en dos sentidos: por un lado, mediante la absorción de otras mutuas de las provincias de Madrid y Ávila, y, por otro, ampliando su presencia a todas las provincias de Castilla-La Mancha.',
  'En abril de 1997, por exigencia legal, tuvo que cambiar su nombre originario —Seguros Soliss— por Solimat, para desligarse de forma clara de la compañía de seguros que, al amparo de la mutua, se había creado en los años 30.',
  'Fruto del lugar de nacimiento de la entidad y de su expansión por la comunidad autónoma de Castilla-La Mancha, se distingue como la mutua de esta región. Su diferenciación se centra en la cercanía y compromiso con sus usuarios.',
  'La entidad —que ofrece cobertura nacional— está formada por un equipo de más de 200 personas, entre sanitarios y personal de gestión, que ejercen su trabajo en los centros que posee en Castilla-La Mancha, Madrid y Ávila.',
];

export const SOLIMAT_HOY_PARAGRAPHS: string[] = [
  'Solimat, Mutua Colaboradora con la Seguridad Social nº72, es una de las 18 mutuas colaboradoras con la seguridad social que existen en nuestro país y la única con sede social en Castilla-La Mancha. Su zona de referencia es Castilla-La Mancha, Madrid y Ávila, estas dos últimas provincias fruto de fusiones con otras mutuas y su ámbito de actuación nacional. Cuenta con una población protegida de 150.000 trabajadores, cerca de 12.000 empresas asociadas y 20.000 autónomos adheridos.',
  'Posee 11 centros propios de atención directa al trabajador, un Hospital Laboral situado en Toledo, el Hospital San José —único del sector mutual en Castilla-La Mancha— y también cuenta con una amplia red asistencial a nivel nacional para prestar asistencia a cualquier trabajador que lo precise.',
  'Formada por más de 200 profesionales pertenecientes al ámbito sanitario y de la gestión, Solimat se ha convertido en una mutua referente en Castilla-La Mancha por sus raíces regionales, por su presencia a lo largo de ella, pero, principalmente, por ofrecer un servicio cercano, personalizado y de calidad a sus empresas mutualistas, asesorías laborales, autónomos y trabajadores protegidos.',
];

export const STATS: Array<{ value: string; label: string }> = [
  { value: '150.000', label: 'Trabajadores protegidos' },
  { value: '12.000', label: 'Empresas asociadas' },
  { value: '20.000', label: 'Autónomos adheridos' },
  { value: '11', label: 'Centros propios' },
  { value: '+200', label: 'Profesionales' },
  { value: '1933', label: 'Año de fundación' },
];

export const PRINCIPIOS_PARAGRAPHS: string[] = [
  'En Solimat es primordial que nuestro comportamiento empresarial sea responsable y que nuestras actuaciones estén basadas en criterios éticos en lo que hacemos y en cómo lo hacemos, respetando siempre la legalidad vigente y las normas de buen gobierno corporativo.',
  'Y es que estamos convencidos de que solo una actuación ética, prudente y responsable por nuestra parte hará preservar la reputación de nuestra Entidad y garantizará la profesionalidad y diligencia de nuestro equipo humano y, por consiguiente, nos ayudará en el camino para la consecución de nuestros objetivos.',
];

export const MISION_TEXT =
  'Gestionar las prestaciones encomendadas por la Seguridad Social, con calidad y cercanía, promoviendo la mejora de la salud de los trabajadores, la competitividad de nuestras empresas y la sostenibilidad del Sistema.';

export const VISION_TEXT =
  'Ser una organización excelente en el cuidado y promoción de la salud de los trabajadores en nuestro ámbito de actuación, reconocida por el compromiso con las personas; la eficacia, innovación y transparencia en la gestión; y la calidad personalizada en la prestación del servicio.';

export const VALORES_ITEMS: string[] = [
  'Confianza y compromiso',
  'Orientación a la persona',
  'Orientación de servicio',
  'Transparencia e integridad',
];

export const RSC_PARAGRAPHS: string[] = [
  'En Solimat siempre se ha tenido en cuenta que la dirección y gestión de cualquier empresa ha de basarse en un sentido de servicio a la Sociedad. Para nosotros representa una actitud de compromiso voluntaria, constante en el tiempo y que justifica nuestro carácter de mutua.',
  'Desde Solimat se considera que competitividad y responsabilidad social corporativa constituyen dos elementos clave y esenciales que contribuyen a garantizar la sostenibilidad de nuestra actividad y mantener los compromisos con nuestros mutualistas, colaboradores, trabajadores y la sociedad en general.',
  'Por ello, nuestra estrategia de Responsabilidad Social Corporativa (RSC), impulsada por la Alta Dirección implica a todas las áreas de gestión de nuestra organización conforme a unos principios que persiguen el máximo respeto de todos sus stakeholders.',
  'El compromiso ético de Solimat y su concepto de la Responsabilidad Social se estructura en torno a los siguientes términos:',
];

export const RSC_PRINCIPLES: Array<{ title: string; text: string }> = [
  {
    title: 'Cercanía',
    text: 'Solimat es una mutua que si por algo se caracteriza es por su constante seguimiento y estrecha relación con todos los agentes de su entorno con los que interactúa fruto del desarrollo de su actividad.',
  },
  {
    title: 'Accesibilidad',
    text: 'Trata de mostrarse como una mutua que está presente en todo momento ante las dificultades y necesidades que puedan aparecer de imprevisto tanto a sus mutualistas como al resto de grupos de su entorno a los cuales afecta su actividad.',
  },
  {
    title: 'Transparencia',
    text: 'Todo el desarrollo de su actividad se realiza con la máxima comunicación e información a las partes implicadas sobre el desarrollo de nuestra actividad. De tal forma que, con ello, se pretende ayudar a que cada colectivo se sienta más identificado con nosotros.',
  },
  {
    title: 'Fiabilidad',
    text: 'El desempeño de nuestros profesionales se caracteriza por su eficiencia y eficacia. Ello supone integridad, responsabilidad y seguridad tanto en los procesos y servicios. Este tipo de actitud se materializa en una gestión de los recursos eficaz y eficiente mediante la cual se consigue contribuir al desarrollo sostenible de nuestra sociedad.',
  },
];

export const MEDIOAMBIENTAL_INTRO =
  'Solimat, consciente de la importancia del medio ambiente como principio básico del compromiso con la sociedad, así como que un servicio de calidad constituye un pilar fundamental para el correcto funcionamiento de la empresa, ha decidido impulsar la implantación de un sistema de Gestión Ambiental que garantice la protección del medioambiente, comprometiéndose en los siguientes principios:';

export const MEDIOAMBIENTAL_PRINCIPLES: string[] = [
  'Identificar y evaluar todos los impactos ambientales que se producen como consecuencia del desarrollo de nuestra actividad, tanto en nuestras oficinas como en nuestro Hospital y centros asistenciales, con el objeto de implantar medidas para disminuirlos, prevenir la contaminación, minimizar el consumo de recursos y fomentar la eficiencia y ahorro energéticos en nuestras instalaciones.',
  'Velar por el cumplimento de los requisitos ambientales legales que nos son de aplicación, así como de otros requisitos que la organización suscriba relacionados con sus aspectos ambientales.',
  'Mantener implicadas y concienciadas a todas las personas de Solimat, fomentando la participación en la gestión y la formación ambiental.',
  'Prevenir y evitar los impactos ambientales significativos producidos por la actividad de nuestros centros sanitarios, en especial los producidos por la generación y en el proceso de gestión de los residuos tóxicos y peligrosos.',
  'Apoyar el trabajo con proveedores que apliquen normas ambientales coherentes con la política ambiental, promoviendo de esta manera el comportamiento respetuoso con el medio ambiente.',
  'Documentar, implementar y mantener al día nuestra Política Ambiental, así como comunicarla a todas las personas de Solimat para que sea conocida, comprendida y aplicada a todos los niveles de la organización.',
  'Desarrollar una revisión y mejora continua del Sistema de Gestión Ambiental implantado para mantenerlo activo y efectivo.',
  'Poner a disposición no solo a nivel interno, sino de todos nuestros proveedores, colaboradores, clientes y público en general nuestra política ambiental para constatar nuestro compromiso medioambiental.',
];

export const PACTO_MUNDIAL_LEFT: string[] = [
  'En el año 2015, Solimat dio un paso más en su firme compromiso con la responsabilidad social corporativa aprobando su adhesión al Pacto Mundial de Naciones Unidas y convirtiéndose, por tanto, en el punto de inicio de su compromiso, en la estrategia de la entidad, con los 10 principios que promueve, así como con los Objetivos de Desarrollo Sostenible.',
  'Solimat ha seguido avanzando en este compromiso y en noviembre de 2020 formalizó su adhesión al Pacto Mundial —de manera oficial— mediante su inscripción y envío de carta dirigida a Naciones Unidas.',
  'Lanzada en el año 2000, Global Compact de Naciones Unidas, en castellano Pacto Mundial, es la mayor iniciativa de sostenibilidad corporativa del mundo. Actualmente hay más de 13.500 entidades adheridas en más de 190 países y cuenta con 76 redes locales. En España más de 2.000 organizaciones han firmado el Pacto Mundial, lo que la convierte en la Red Local con mayor número de entidades adheridas y, por lo tanto, la más importante del mundo.',
];

export const PACTO_MUNDIAL_RIGHT: string[] = [
  'Esta iniciativa promueve implementar 10 Principios universalmente aceptados para promover el desarrollo sostenible en las áreas de Derechos Humanos y Empresa, Normas Laborales, Medio Ambiente y Lucha contra la Corrupción en las actividades y la estrategia de negocio de las empresas.',
  'Así pues, el Pacto Mundial es un marco práctico para desarrollar, implantar y divulgar políticas y prácticas de sostenibilidad empresarial, ofreciendo a sus signatarios una amplia gama de recursos y herramientas de gestión para ayudarles a implementar modelos de negocio y desarrollo sostenible.',
  'Solimat, al firmar esta adhesión, se comprometió a alinear sus operaciones con estos Diez Principios universalmente aceptados y canalizar acciones en apoyo de los objetivos de las Naciones Unidas plasmados, actualmente, en los Objetivos de Desarrollo Sostenible (ODS).',
];
