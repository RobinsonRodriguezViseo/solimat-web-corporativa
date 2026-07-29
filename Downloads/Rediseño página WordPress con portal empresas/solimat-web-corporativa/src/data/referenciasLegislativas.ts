/** Referencias legislativas transcritas de design-refs/Referencias Legislativas.dc.html */

export interface LegislativeReference {
  title: string;
  description: string;
  /** Enlace al texto completo publicado en el BOE. */
  url: string;
}

export interface LegislativeYearGroup {
  /** Ancla usada por el índice de años. */
  id: string;
  year: number;
  items: LegislativeReference[];
}

export const REFERENCIAS_LEGISLATIVAS: LegislativeYearGroup[] = [
  {
    id: 'y2023',
    year: 2023,
    items: [
      {
        title: 'Real Decreto Ley 5/2023',
        description:
          'De 28 de junio, de por el que se adoptan y prorrogan determinadas medidas de respuesta a las consecuencias económicas y sociales de la Guerra de Ucrania, de apoyo a la reconstrucción de la isla de La Palma y a otras situaciones de vulnerabilidad.',
        url: 'https://boe.es/boe/dias/2023/06/29/pdfs/BOE-A-2023-15135.pdf',
      },
      {
        title: 'Orden PCM/313/2023 de normas legales de cotización',
        description:
          'De 30 de marzo, por la que se modifica la Orden PCM/2023, de 30 de enero, por la que se desarrollan las normas legales de cotización a la Seguridad Social para el ejercicio 2023.',
        url: 'https://www.boe.es/boe/dias/2023/03/31/pdfs/BOE-A-2023-8121.pdf',
      },
      {
        title: 'Real Decreto Ley 1/2023',
        description:
          'De 10 de enero, de medidas urgentes en materia de incentivos a la contratación laboral y mejora de la protección social de las personas artistas.',
        url: 'https://boe.es/boe/dias/2023/01/11/pdfs/BOE-A-2023-625.pdf',
      },
      {
        title: 'Real Decreto Ley 2/2023',
        description:
          'De 16 de marzo, de medidas urgentes para la ampliación de derechos de los pensionistas, la reducción de la brecha de género y el establecimiento de un nuevo marco de sostenibilidad del sistema público de pensiones.',
        url: 'https://boe.es/boe/dias/2023/03/17/pdfs/BOE-A-2023-6967.pdf',
      },
      {
        title: 'Ley 3/2023, de empleo',
        description:
          'De 28 de febrero, de Empleo.',
        url: 'https://boe.es/boe/dias/2023/03/01/pdfs/BOE-A-2023-5365.pdf',
      },
      {
        title: 'Ley 2/2023, reguladora de las personas que informen',
        description:
          'De 20 de febrero, reguladora de las personas que informen sobre infracciones normativas y de lucha contra la corrupción.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-4513',
      },
      {
        title: 'Orden PCM 74/2023, de normas legales de cotización',
        description:
          'De 30 de enero, por la que se desarrollan las normas generales de cotización a la Seguridad Social para el ejercicio 2023.',
        url: 'https://boe.es/boe/dias/2023/01/31/pdfs/BOE-A-2023-2472.pdf',
      },
      {
        title: 'Real Decreto 1060/2022, sobre gestión de procesos por IT',
        description:
          'De 27 de diciembre, por el que se modifica el Real Decreto 625/2014, sobre gestión y control de los procesos por incapacidad temporal en los primeros 365 días.',
        url: 'https://boe.es/boe/dias/2023/01/05/pdfs/BOE-A-2023-160.pdf',
      },
    ],
  },
  {
    id: 'y2022',
    year: 2022,
    items: [
      {
        title: 'Real Decreto Ley 16/2022, mejoras para empleadas de hogar',
        description:
          'De 6 de septiembre, para la mejora de las condiciones de trabajo y de Seguridad Social de las personas trabajadoras al servicio del hogar.',
        url: 'https://boe.es/boe/dias/2022/09/08/pdfs/BOE-A-2022-14680.pdf',
      },
      {
        title: 'Real Decreto Ley 14/2022, sobre eficiencia energética',
        description:
          'De 1 de agosto, de medidas de sostenibilidad económica en el ámbito del transporte, becas y ayudas al estudio, y de ahorro y eficiencia energética.',
        url: 'https://boe.es/boe/dias/2022/08/02/pdfs/BOE-A-2022-12925.pdf',
      },
      {
        title: 'Real Decreto Ley 13/2022, sobre cotizaciones de autónomos',
        description:
          'De 26 de julio, por el que se establece un nuevo sistema de cotización para los trabajadores por cuenta propia o autónomos y se mejora la protección por cese de actividad.',
        url: 'https://boe.es/boe/dias/2022/07/27/pdfs/BOE-A-2022-12482.pdf',
      },
      {
        title: 'Real Decreto 504/2022, de 27 junio',
        description:
          'Por el que se modifica el Reglamento General sobre inscripción de empresas y afiliación, altas, bajas y variaciones de datos de trabajadores en la Seguridad Social.',
        url: 'https://boe.es/boe/dias/2022/06/28/pdfs/BOE-A-2022-10677.pdf',
      },
      {
        title: 'Real Decreto 286/2022, sobre el uso de mascarillas',
        description:
          'De 19 de abril, por el que se modifica la obligatoriedad del uso de mascarillas durante la crisis sanitaria ocasionada por la COVID-19.',
        url: 'https://www.boe.es/boe/dias/2022/04/20/pdfs/BOE-A-2022-6449.pdf',
      },
      {
        title: 'Real Decreto Ley 6/2022, de 29 de marzo',
        description:
          'Por el que se adoptan medidas urgentes en el marco del Plan Nacional de respuesta a las consecuencias económicas y sociales de la guerra en Ucrania.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-4972',
      },
      {
        title: 'Real Decreto Ley 2/2022, de 22 de febrero',
        description:
          'Por el que se adoptan medidas urgentes para la protección de los trabajadores autónomos, la transición hacia mecanismos estructurales de defensa del empleo y la recuperación de La Palma.',
        url: 'https://boe.es/boe/dias/2022/02/23/pdfs/BOE-A-2022-2849.pdf',
      },
      {
        title: 'Real Decreto 152/2022, de 22 de febrero',
        description:
          'Por el que se fija el salario mínimo interprofesional para 2022.',
        url: 'https://boe.es/boe/dias/2022/02/23/pdfs/BOE-A-2022-2851.pdf',
      },
    ],
  },
  {
    id: 'y2021',
    year: 2021,
    items: [
      {
        title: 'Ley 22/2021 de Presupuestos Generales del Estado',
        description:
          'Extracto de los aspectos más destacables en materia de cotización, prestaciones y pensiones de la Seguridad Social, con entrada en vigor el 1 de enero de 2022.',
        url: 'https://www.boe.es/boe/dias/2021/12/29/pdfs/BOE-A-2021-21653.pdf',
      },
      {
        title: 'Real Decreto Ley 32/2021, de 28 de diciembre',
        description:
          'De medidas urgentes para la reforma laboral, la garantía de la estabilidad en el empleo y la transformación del mercado de trabajo.',
        url: 'https://boe.es/boe/dias/2021/12/30/pdfs/BOE-A-2021-21788.pdf',
      },
      {
        title: 'Orden PCM/1353/2021, de 2 de diciembre',
        description:
          'Por la que se desarrollan las normas legales de cotización a la Seguridad Social para el ejercicio 2021.',
        url: 'https://boe.es/boe/dias/2021/12/04/pdfs/BOE-A-2021-20075.pdf',
      },
      {
        title: 'Real Decreto 817/2021, de 28 de septiembre',
        description:
          'Por el que se fija el salario mínimo interprofesional para 2021.',
        url: 'https://boe.es/boe/dias/2021/09/29/pdfs/BOE-A-2021-15770.pdf',
      },
      {
        title: 'Ley 12/2021, de 28 de septiembre',
        description:
          'Por la que se modifica el Estatuto de los Trabajadores, para garantizar los derechos laborales de las personas dedicadas al reparto en plataformas digitales.',
        url: 'https://boe.es/boe/dias/2021/09/29/pdfs/BOE-A-2021-15767.pdf',
      },
      {
        title: 'Real Decreto Ley 18/2021, de 28 de septiembre',
        description:
          'De medidas urgentes para la protección del empleo, la recuperación económica y la mejora del mercado de trabajo.',
        url: 'https://boe.es/boe/dias/2021/09/29/pdfs/BOE-A-2021-15768.pdf',
      },
      {
        title: 'Ley 10/2021, de 9 de julio',
        description:
          'De trabajo a distancia.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-11472',
      },
      {
        title: 'Real Decreto Ley 11/2021, de 27 de mayo',
        description:
          'Sobre medidas urgentes para la defensa del empleo, la reactivación económica y la protección de los trabajadores autónomos.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8877',
      },
      {
        title: 'Ley 2/2021, de 29 de marzo',
        description:
          'De medidas urgentes de prevención, contención y coordinación para hacer frente a la crisis sanitaria ocasionada por la COVID-19.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-4908',
      },
      {
        title: 'Real Decreto Ley 5/2021',
        description:
          'De medidas extraordinarias de apoyo a la solvencia empresarial en respuesta a la pandemia de la COVID-19.',
        url: 'https://boe.es/boe/dias/2021/03/13/pdfs/BOE-A-2021-3946.pdf',
      },
      {
        title: 'Real Decreto Ley 3/2021',
        description:
          'Por el que se adoptan medidas para la reducción de la brecha de género y otras materias en los ámbitos de la Seguridad Social y económico.',
        url: 'https://boe.es/boe/dias/2021/02/03/pdfs/BOE-A-2021-1529.pdf',
      },
      {
        title: 'Real Decreto Ley 2/2021',
        description:
          'De 26 de enero, de refuerzo y consolidación de medidas sociales en defensa del empleo.',
        url: 'https://boe.es/boe/dias/2021/01/27/pdfs/BOE-A-2021-1130.pdf',
      },
    ],
  },
  {
    id: 'y2020',
    year: 2020,
    items: [
      {
        title: 'Ley 11/2020 de Presupuestos Generales del Estado',
        description:
          'De 30 de diciembre, de Presupuestos Generales del Estado para 2021.',
        url: 'https://www.boe.es/boe/dias/2020/12/31/pdfs/BOE-A-2020-17339.pdf',
      },
      {
        title: 'Real Decreto Ley 35/2020',
        description:
          'De medidas urgentes de apoyo al sector turístico, la hostelería y el comercio y en materia tributaria.',
        url: 'https://boe.es/boe/dias/2020/12/23/pdfs/BOE-A-2020-16823.pdf',
      },
      {
        title: 'Real Decreto 902/2020',
        description:
          'De igualdad retributiva entre mujeres y hombres.',
        url: 'https://boe.es/boe/dias/2020/10/14/pdfs/BOE-A-2020-12215.pdf',
      },
      {
        title: 'Real Decreto 901/2020',
        description:
          'Por el que se regulan los planes de igualdad y su registro.',
        url: 'https://boe.es/boe/dias/2020/10/14/pdfs/BOE-A-2020-12214.pdf',
      },
      {
        title: 'Real Decreto Ley 30/2020',
        description:
          'De 30 de septiembre, de medidas sociales en defensa del empleo.',
        url: 'https://boe.es/boe/dias/2020/09/30/pdfs/BOE-A-2020-11416.pdf',
      },
      {
        title: 'Real Decreto Ley 28/2020',
        description:
          'De 22 de septiembre, de trabajo a distancia.',
        url: 'https://boe.es/boe/dias/2020/09/23/pdfs/BOE-A-2020-11043.pdf',
      },
      {
        title: 'Real Decreto Ley 26/2020',
        description:
          'De medidas de reactivación económica para hacer frente al impacto del COVID-19 en transportes y vivienda.',
        url: 'https://boe.es/boe/dias/2020/07/08/pdfs/BOE-A-2020-7432.pdf',
      },
      {
        title: 'Real Decreto Ley 24/2020',
        description:
          'De medidas sociales de reactivación del empleo y protección del trabajo autónomo y de competitividad del sector industrial.',
        url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-6838',
      },
      {
        title: 'Real Decreto Ley 21/2020',
        description:
          'De medidas urgentes de prevención, contención y coordinación para hacer frente a la crisis sanitaria ocasionada por el COVID-19.',
        url: 'https://boe.es/boe/dias/2020/06/10/pdfs/BOE-A-2020-5895.pdf',
      },
      {
        title: 'Real Decreto Ley 19/2020',
        description:
          'Por el que se adoptan medidas complementarias en materia agraria, científica, económica, de empleo y Seguridad Social para paliar los efectos del COVID-19.',
        url: 'https://www.boe.es/buscar/pdf/2020/BOE-A-2020-3692-consolidado.pdf',
      },
      {
        title: 'Real Decreto Ley 18/2020',
        description:
          'De 12 de mayo, de medidas sociales en defensa del empleo.',
        url: 'https://www.boe.es/buscar/pdf/2020/BOE-A-2020-4959-consolidado.pdf',
      },
      {
        title: 'Orden TMA/424/2020 y Orden TMA/419/2020',
        description:
          'Sobre la utilización de mascarillas en los distintos medios de transporte y medidas para la navegación marítima.',
        url: 'https://www.boe.es/boe/dias/2020/05/21/pdfs/BOE-A-2020-5192.pdf',
      },
      {
        title: 'Real Decreto Ley 15/2020',
        description:
          'De medidas urgentes complementarias para apoyar la economía y el empleo.',
        url: 'https://www.boe.es/buscar/pdf/2020/BOE-A-2020-4554-consolidado.pdf',
      },
      {
        title: 'Real Decreto Ley 11/2020',
        description:
          'Por el que se adoptan medidas urgentes complementarias en el ámbito social y económico para hacer frente al COVID-19.',
        url: 'https://www.boe.es/boe/dias/2020/04/01/pdfs/BOE-A-2020-4208.pdf',
      },
      {
        title: 'Real Decreto Ley 10/2020',
        description:
          'Por el que se regula un permiso retribuido recuperable para reducir la movilidad de la población frente al COVID-19.',
        url: 'https://boe.es/boe/dias/2020/03/29/pdfs/BOE-A-2020-4166.pdf',
      },
      {
        title: 'Real Decreto Ley 8/2020',
        description:
          'De medidas urgentes extraordinarias para hacer frente al impacto económico y social del COVID-19.',
        url: 'https://boe.es/boe/dias/2020/03/18/pdfs/BOE-A-2020-3824.pdf',
      },
      {
        title: 'Real Decreto 463/2020',
        description:
          'Por el que se declara el estado de alarma para la gestión de la crisis sanitaria ocasionada por el COVID-19.',
        url: 'https://www.boe.es/boe/dias/2020/03/14/pdfs/BOE-A-2020-3692.pdf',
      },
      {
        title: 'Real Decreto Ley 7/2020',
        description:
          'Por el que se adoptan medidas urgentes para responder al impacto económico del COVID-19.',
        url: 'https://boe.es/boe/dias/2020/03/13/pdfs/BOE-A-2020-3580.pdf',
      },
    ],
  },
  {
    id: 'y2019',
    year: 2019,
    items: [
      {
        title: 'Real Decreto Ley 8/2019',
        description:
          'De medidas urgentes de protección social y de lucha contra la precariedad laboral en la jornada de trabajo.',
        url: 'https://www.boe.es/boe/dias/2019/03/12/pdfs/BOE-A-2019-3481.pdf',
      },
      {
        title: 'Real Decreto Ley 6/2019',
        description:
          'De medidas urgentes para garantía de la igualdad de trato y de oportunidades entre mujeres y hombres en el empleo y la ocupación.',
        url: 'https://boe.es/boe/dias/2019/03/07/pdfs/BOE-A-2019-3244.pdf',
      },
    ],
  },
  {
    id: 'y2018',
    year: 2018,
    items: [
      {
        title: 'Real Decreto Ley 28/2018',
        description:
          'Resumen de las novedades para la revalorización de las pensiones públicas y otras medidas urgentes en materia social, laboral y de empleo.',
        url: 'https://www.boe.es/boe/dias/2018/12/29/pdfs/BOE-A-2018-17992.pdf',
      },
    ],
  },
];

export const LEGISLATIVE_LINK_TEXT = 'Ver texto completo (BOE)';
