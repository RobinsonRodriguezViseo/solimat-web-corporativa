/**
 * Contenido textual de la página "Canal Ético y de Información",
 * transcrito de design-refs/Canal Etico.dc.html.
 *
 * Los textos admiten énfasis en línea delimitado por `**`, que `RichText`
 * convierte en `<strong>` (nunca se inyecta HTML).
 */

export type CanalEticoBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] };

export interface CanalEticoSubsection {
  /** Ancla propia de la subsección, cuando el índice enlaza directamente a ella. */
  id?: string;
  title: string;
  /** `true` cuando el bloque se pinta como tarjeta blanca elevada. */
  card: boolean;
  blocks: CanalEticoBlock[];
}

export interface CanalEticoGroup {
  id: string;
  /** Cuando existe, se pinta la barra de título de sección. */
  title?: string;
  subsections: CanalEticoSubsection[];
}

export type CanalEticoIndexLevel = 'main' | 'sub';

export interface CanalEticoIndexItem {
  id: string;
  label: string;
  level: CanalEticoIndexLevel;
}

export const CANAL_ETICO_INDEX: CanalEticoIndexItem[] = [
  { id: 'el-canal', label: 'El Canal', level: 'main' },
  { id: 'introduccion', label: 'Introducción', level: 'sub' },
  { id: 'comunicacion', label: 'Comunicación', level: 'sub' },
  { id: 'derechos', label: 'Derechos', level: 'main' },
  { id: 'del-informante', label: 'Del informante', level: 'sub' },
  { id: 'de-la-persona-afectada', label: 'De la persona afectada', level: 'sub' },
  { id: 'procedimientos', label: 'Procedimientos', level: 'main' },
  { id: 'instruccion', label: 'Instrucción', level: 'sub' },
  { id: 'investigacion', label: 'Investigación', level: 'sub' },
  { id: 'conclusiones', label: 'Conclusiones', level: 'sub' },
  { id: 'accede-al-canal', label: 'Accede al Canal', level: 'main' },
];

export const CANAL_ETICO_GROUPS: CanalEticoGroup[] = [
  {
    id: 'el-canal',
    title: 'El Canal',
    subsections: [
      {
        id: 'introduccion',
        title: 'Introducción',
        card: false,
        blocks: [
          {
            kind: 'paragraph',
            text: 'El objeto del presente canal es regular la recepción, tratamiento, investigación y resolución de las comunicaciones (denuncias) sobre presuntas irregularidades o incumplimientos cometidos por empleados, directivos o terceros, que puedan surgir en el ejercicio de la actividad profesional de SOLIMAT.',
          },
          {
            kind: 'paragraph',
            text: 'El Canal Ético y de Información (anterior canal de denuncias y buzón del código ético) de SOLIMAT es accesible a través de la web corporativa facilitando su uso a cualquier informante.',
          },
          {
            kind: 'paragraph',
            text: 'El objetivo del Canal Ético y de Información es canalizar y facilitar la formulación segura de cualquier comunicación sobre sospechas de conductas irregulares, malas prácticas y cualquier violación de las obligaciones de Compliance, fomentando un entorno de Cumplimiento basado en los principios y valores de SOLIMAT, así como facilitar la correcta aplicación y mejora del código ético, poniendo en comunicación a los empleados y resto de integrantes de la organización con la Comisión del código ético o de integridad institucional.',
          },
          {
            kind: 'paragraph',
            text: 'Además, el procedimiento busca asegurar que durante todo el proceso se garantice eficazmente la protección de la privacidad de las personas involucradas y la confidencialidad sobre los datos contenidos en la denuncia, pudiendo realizarse la denuncia de forma anónima si así lo considera el informante.',
          },
        ],
      },
    ],
  },
  {
    id: 'comunicacion',
    subsections: [
      {
        title: 'Comunicación',
        card: true,
        blocks: [
          {
            kind: 'paragraph',
            text: 'Todo aquel que tuviera conocimiento fundado de cualquier tipo de acto o hecho que pudiera suponer una acto ilícito o contrario a la normativa vigente, deberá comunicarlo a través del canal establecido.',
          },
          {
            kind: 'paragraph',
            text: 'El Canal Ético y de Información debe entenderse como un instrumento que permita la comunicación de irregularidades o incumplimientos, así como para comunicar cuestiones relacionadas con temas éticos. Por ello, no debe emplearse de manera indiscriminada, sino para los fines que ha sido concebido.',
          },
          {
            kind: 'paragraph',
            text: 'Los hechos comunicados deben estar enfocados en conductas, incumplimientos, irregularidades o bien constituir un acto ilícito que sea contrario a la normativa aplicable. También canaliza aquellas cuestiones referentes a la interpretación y concreción de los principios y valores incorporados en el código ético.',
          },
          {
            kind: 'paragraph',
            text: 'La comunicación o solicitud, en su caso, deberá ser individual. En caso de que varias personas tengan conocimiento del mismo hecho o circunstancia que deba ser comunicada, cada una de ellas deberá hacerlo de forma individual a través del canal ético y de información. La solicitud debe contener los datos identificativos de la persona que realiza la consulta, así como los datos de contacto a través de los cuales quiere que se le comunique la contestación. Se garantiza, en todo caso, su confidencialidad preservando su identidad ante el órgano encargado de dilucidar la consulta.',
          },
          {
            kind: 'paragraph',
            text: 'En este sentido, SOLIMAT dentro de la gestión del Canal Ético y de Información, tiene plenamente identificados los principios y valores que constituyen la cultura organizativa que desde SOLIMAT se quiere fomentar en el seno de la organización, y que han sido formalmente descritas en nuestro programa de cumplimiento.',
          },
          {
            kind: 'paragraph',
            text: 'El Canal Ético y de Información de SOLIMAT debe emplearse de manera responsable y adecuada. La comunicación de hechos falsos, con una actitud maliciosa y moralmente deshonesta, supone una infracción de la buena fe que debe presidir las relaciones de trabajo dentro de la mutua, pudiendo derivar en medidas disciplinarias de conformidad con el Convenio Colectivo Vigente.',
          },
          {
            kind: 'paragraph',
            text: 'Si, tras el oportuno análisis, se pudiera concluir que los hechos comunicados son manifiestamente falsos y que la denuncia ha sido presentada con actitud maliciosa y mala fe: (i) se archivará la denuncia, documentando los motivos que han llevado a archivar el expediente, finalizando la labor de investigación; (ii) se trasladará dicha circunstancia a la Dirección de RRHH para que, en coordinación con el Comité de Compliance o Comisión del Código Ético, se propongan medidas disciplinarias de conformidad con el Convenio Colectivo Vigente y; (iii) se informará, de forma escrita, la propuesta de sanción al Comité de Dirección o, en su caso, a la Junta Directiva, quien decidirá la acción disciplinaria a aplicar al informante de mala fe.',
          },
        ],
      },
    ],
  },
  {
    id: 'derechos',
    title: 'Derechos',
    subsections: [
      {
        id: 'del-informante',
        title: 'Del informante',
        card: true,
        blocks: [
          {
            kind: 'paragraph',
            text: '**a) Derecho a la protección en el transcurso de la investigación.** SOLIMAT proporcionará la debida protección a todas las personas que realicen una comunicación de acuerdo con las directrices del presente Procedimiento.',
          },
          {
            kind: 'paragraph',
            text: 'En el caso de que el informante haga público el contenido de la comunicación sólo podrá acogerse a las medidas de protección en el caso de que haya primero denunciado a través del canal ético y de información y con los plazos y medidas establecidos.',
          },
          {
            kind: 'paragraph',
            text: '**b) Prohibición de represalias.** En ningún caso se tomarán represalias contra el informante, aun si del resultado de las consecuentes investigaciones se verificara que no ha existido incumplimiento de la normativa aplicable, siempre que no haya obrado de mala fe.',
          },
          {
            kind: 'paragraph',
            text: '**c) Derecho a recibir información.** El informante será informado por escrito, una vez analizada la comunicación, si es considerada procedente para ser analizada. Una vez finalizada la investigación, el informante deberá ser informado sobre las medidas de seguimiento previstas, la remisión a una autoridad competente, así como del resultado de las investigaciones.',
          },
          {
            kind: 'paragraph',
            text: '**d) Derecho a elegir.** El informante podrá elegir el cauce de la comunicación que considere más adecuado, pudiendo acudir a canales externos (autoridades competentes), sin poder obligarse al informante a utilizar una vía concreta.',
          },
          {
            kind: 'paragraph',
            text: '**e) Derecho a la información limitada.** Al informante no se le podrá solicitar datos que no sean estrictamente necesarios para tramitar la comunicación. La información facilitada no podrá ser utilizada para fines distintos a la investigación, de conformidad con el RGPD y la LOPDGDD.',
          },
          {
            kind: 'paragraph',
            text: '**f) Derecho al anonimato.** El informante podrá mantener el anonimato en torno a su identidad, garantizándose el mismo durante el proceso.',
          },
          {
            kind: 'paragraph',
            text: '**g) Derecho a la confidencialidad.** La identidad del informante será confidencial, no pudiendo revelarse sin su consentimiento expreso, salvo excepciones legales.',
          },
          {
            kind: 'paragraph',
            text: '**h) Derecho a recibir una respuesta en un plazo razonable.** Acuse de recibo en un **plazo máximo de siete días**; el tratamiento e investigación no podrá exceder los **tres meses**.',
          },
          {
            kind: 'paragraph',
            text: '**i) Derecho a la supresión de datos.** Transcurridos tres meses desde la introducción de los datos, deberá procederse a su supresión del sistema, salvo excepciones legales o procesales.',
          },
        ],
      },
      {
        id: 'de-la-persona-afectada',
        title: 'De la persona afectada',
        card: true,
        blocks: [
          {
            kind: 'paragraph',
            text: '**a) Derecho a la protección en el transcurso de la investigación.** Solimat proporcionará al denunciado la completa garantía de sus derechos como cualquier empleado, no siendo aplicables medidas sancionadoras hasta comprobar la veracidad de los hechos.',
          },
          {
            kind: 'paragraph',
            text: '**b) Derecho a recibir información.** El denunciado debe ser informado del proceso de investigación para poder ejercer su derecho de defensa, salvo que ello suponga un riesgo para la investigación.',
          },
          {
            kind: 'paragraph',
            text: '**c) Derecho a la confidencialidad.** Se garantiza la confidencialidad de sus datos personales durante toda la investigación, protegiendo también la confidencialidad del informante.',
          },
          {
            kind: 'paragraph',
            text: '**d) Derecho a una investigación transparente.** Basada en el análisis objetivo de las evidencias recabadas.',
          },
        ],
      },
    ],
  },
  {
    id: 'procedimientos',
    title: 'Procedimientos',
    subsections: [
      {
        id: 'instruccion',
        title: 'Instrucción',
        card: true,
        blocks: [
          {
            kind: 'paragraph',
            text: 'El Comité de Compliance o la Comisión del Código Ético según la materia comunicada, llevarán a cabo las labores de investigación, desarrollando este procedimiento interno que regula la instrucción de la información, desde su comunicación inicial hasta su resolución. Este procedimiento se divide en dos fases:',
          },
          {
            kind: 'paragraph',
            text: '**Fase de investigación:** comprende la recepción y evaluación inicial de la comunicación, hasta la investigación de los hechos denunciados y la recopilación de evidencias.',
          },
          {
            kind: 'paragraph',
            text: '**Fase de Conclusiones:** comprende el análisis de las evidencias y pruebas aportadas y la posterior redacción del informe, por parte del Comité de Compliance o Comisión del Código Ético, con las eventuales propuestas de medidas al Comité de Dirección o, en su caso, a la Junta Directiva.',
          },
        ],
      },
      {
        id: 'investigacion',
        title: 'Investigación',
        card: true,
        blocks: [
          {
            kind: 'paragraph',
            text: '**Admisión de la denuncia o comunicación:** los hechos descritos son hechos denunciables que pueden suponer un acto ilícito o contrario a la normativa vigente o cuestiones referentes a la interpretación de los principios y valores del código ético.',
          },
          {
            kind: 'paragraph',
            text: 'El Comité de Compliance o la Comisión del Código Ético, una vez evaluada y admitida la denuncia, procederá a la elaboración de un expediente de apertura, que contendrá: información descriptiva de la comunicación, datos aportados, valoración del contenido y fiabilidad del denunciante, personas afectadas y proposición de medidas de urgencia.',
          },
          {
            kind: 'list',
            items: [
              'El equipo investigador está conformado por los miembros del Comité de Compliance y Comité del Código Ético, o personas en quien deleguen con las debidas garantías de confidencialidad.',
              'En el transcurso de la investigación, se podrá recurrir a otras áreas de la Organización para contrastar los hechos denunciados.',
              'El proceso de investigación durará como máximo **3 meses** desde la recepción de la comunicación.',
            ],
          },
          {
            kind: 'paragraph',
            text: '**Inadmisión de la denuncia o comunicación:** los hechos descritos son de una naturaleza distinta, procediéndose a su archivo o a referenciarle al área más adecuado para su tratamiento.',
          },
        ],
      },
      {
        id: 'conclusiones',
        title: 'Conclusiones',
        card: true,
        blocks: [
          {
            kind: 'paragraph',
            text: 'Una vez recabadas las pruebas, se cierra la fase de investigación y se procede a la toma de decisiones, proponiendo al Comité de Dirección o, en su caso, a la Junta Directiva, las medidas que se deberán adoptar. El Comité de Dirección podrá adoptar las siguientes medidas:',
          },
          {
            kind: 'list',
            items: [
              '**Denuncia no procedente:** ausencia de incumplimiento; se informa al informante y al denunciado de la decisión y sus motivos.',
              '**Denuncia procedente:** se prueba que los hechos son ciertos; se aplica el régimen sancionador conforme al Convenio Colectivo y la legislación vigente, informando al denunciado para su defensa.',
              '**Consulta procedente:** sirve para la actualización del código ético y/o la emisión de notas interpretativas.',
            ],
          },
          {
            kind: 'paragraph',
            text: 'Los Informes resultantes serán trasladados a la Junta General a través de la Memoria Anual de actividades.',
          },
        ],
      },
    ],
  },
];
