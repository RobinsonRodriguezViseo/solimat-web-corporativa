/** Contenido de la página "Prestaciones económicas", transcrito de design-refs/Prestaciones Economicas.dc.html */

import type { Grade } from '../components/prestacionesEconomicas/GradeCard';
import type { PrestacionTab } from '../components/prestacionesEconomicas/PrestacionTabs';
import type { PageIndexItem } from '../components/servicios/PageIndex';
import type { InlineNode, RichBlock, RichListItem } from '../components/servicios/RichContent';

// Constructores breves para mantener legible la transcripción literal del diseño.
const b = (text: string): InlineNode => ({ kind: 'strong', text });
const em = (text: string): InlineNode => ({ kind: 'em', text });
const a = (text: string, href: string): InlineNode => ({ kind: 'link', text, href });
const p = (...text: InlineNode[]): RichBlock => ({ kind: 'p', text });
const label = (text: string): RichBlock => ({ kind: 'label', text });
const h3 = (text: string): RichBlock => ({ kind: 'h3', text });
const ul = (...items: RichListItem[]): RichBlock => ({ kind: 'list', items });
const li = (...text: InlineNode[]): RichListItem => ({ text });
const liNested = (text: InlineNode[], items: RichListItem[]): RichListItem => ({ text, items });

export const CTA_LABEL = '¿Quieres tramitar esta prestación? Te ayudamos';
export const CTA_HREF = '/quienes-somos/podemos-ayudarte';

export const SECTIONS: PageIndexItem[] = [
  { id: 'contingencias-profesionales', label: 'Contingencias Profesionales' },
  { id: 'contingencias-comunes', label: 'Contingencias Comunes' },
  { id: 'riesgo-embarazo-lactancia', label: 'Riesgo durante el embarazo y la lactancia natural' },
  { id: 'cuidado-menores', label: 'Cuidado de menores afectados por cáncer u otra enfermedad grave' },
  { id: 'cese-actividad', label: 'Cese de actividad de los trabajadores autónomos' },
  { id: 'mecanismo-red', label: 'Mecanismo RED', level: 'sub' },
  { id: 'prestaciones-complementarias', label: 'Prestaciones complementarias' },
  { id: 'incapacidad', label: 'Incapacidad permanente e invalidez' },
  { id: 'muerte-supervivencia', label: 'Prestación por muerte y supervivencia' },
];

/* ---------------------------------------------------------------- *
 * Contingencias Profesionales
 * ---------------------------------------------------------------- */

export const CONTINGENCIAS_PROFESIONALES_HEADER: RichBlock[] = [
  p(
    'Si te encuentras en situación de ',
    b('incapacidad temporal'),
    ' como consecuencia de un accidente de trabajo o enfermedad profesional, te:',
  ),
  ul(
    li('Prestamos asistencia sanitaria'),
    li('Abonamos el 75% de tu base reguladora, a partir del día siguiente al de la baja médica.'),
  ),
];

export const CONTINGENCIAS_PROFESIONALES_TABS: PrestacionTab[] = [
  {
    id: 'cuenta-ajena',
    label: 'Cuenta ajena',
    blocks: [
      p('En Solimat asumimos la prestación económica en caso de accidente de trabajo o enfermedad profesional:'),
      label('Periodo'),
      ul(li('Desde el día siguiente a la baja médica hasta el día del alta.'), li('Duración máxima: 730 días')),
      label('Cuantía'),
      ul(li('75% de la base reguladora.')),
      label('Requisitos'),
      ul(
        li('Que la empresa tenga la ', b('contingencia profesional'), ' cubierta con ', b('Solimat'), '.'),
        li(
          'Estar ',
          b('afiliado y en alta'),
          ' (o en situación asimilada al alta) en la fecha del accidente de trabajo o del diagnóstico de la enfermedad profesional.',
        ),
        li('Estar en ', b('baja médica'), '.'),
      ),
      label('Forma de abono'),
      ul(
        li(
          b('Pago delegado'),
          ': prestación satisfecha por la empresa en nómina, en concepto de incapacidad temporal, y posterior compensación de las cantidades satisfechas en los boletines de cotización.',
        ),
        li(
          b('Pago directo'),
          ': previa solicitud del trabajador, cuando se encuentre en alguna de las siguientes situaciones.',
        ),
      ),
      label('Situaciones que originan el pago directo'),
      ul(
        li('Quedar en ', b('desempleo'), '.'),
        li(
          'Pasar a situación de ',
          b('prórroga de incapacidad temporal'),
          ' (después de 365 días), tras resolución del Instituto Nacional de la Seguridad Social.',
        ),
        li(
          b('No recepción'),
          ' del pago de la prestación en modalidad de ',
          b('pago delegado'),
          ' por incapacidad temporal por parte de la empresa.',
        ),
        li(b('Recaída'), ' estando ', b('en situación de desempleo'), '.'),
        li(
          b('Estar excluido del pago delegado'),
          ' (Representantes de Comercio, Artistas, Profesionales Taurinos, Agrarios, Empleados de hogar y trabajadores de los grupos II y III del Régimen Especial del Mar).',
        ),
        li(b('Suspensión del contrato en caso de trabajadores fijos-discontinuos.')),
      ),
    ],
  },
  {
    id: 'cuenta-propia',
    label: 'Cuenta propia',
    blocks: [
      p('En Solimat asumimos la prestación económica en caso de accidente de trabajo o enfermedad profesional:'),
      label('Periodo'),
      ul(li('Desde el día siguiente a la baja médica hasta el día del alta.'), li('Duración máxima: 730 días.')),
      label('Cuantía'),
      ul(li('75% de la base reguladora.')),
      label('Requisitos'),
      ul(
        li('Tener la ', b('contingencia profesional'), ' cubierta con ', b('Solimat'), '.'),
        li(
          'Estar ',
          b('adherido y en alta'),
          ' (o en situación asimilada al alta) en la fecha del accidente de trabajo o del diagnóstico de la enfermedad profesional.',
        ),
        li('Estar al ', b('corriente en el pago'), ' de las cuotas a la Seguridad Social.'),
        li('Estar en ', b('baja médica'), '.'),
        li(b('Presentar parte de accidente')),
      ),
      label('Forma de abono'),
      ul(li(b('Pago directo'), ': previa solicitud del autónomo.')),
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Contingencias Comunes
 * ---------------------------------------------------------------- */

export const CONTINGENCIAS_COMUNES_HEADER: RichBlock[] = [
  p(
    'Si te encuentras en situación de incapacidad temporal como consecuencia de un enfermedad común o accidente no laboral, te:',
  ),
  ul(li('Abonamos la prestación económica.')),
  p('La asistencia sanitaria, en estos casos, le corresponde a Seguridad Social.'),
];

export const CONTINGENCIAS_COMUNES_TABS: PrestacionTab[] = [
  {
    id: 'cuenta-ajena',
    label: 'Cuenta ajena',
    blocks: [
      p(
        'En Solimat asumimos la prestación económica por incapacidad temporal derivada de una enfermedad común o accidente no laboral.',
      ),
      label('Periodo'),
      ul(li('Desde el 4º día de la baja hasta el día del alta.'), li('Duración máxima: 730 días.')),
      label('Cuantía'),
      ul(
        li(b('60% de base reguladora'), ', del 4º al 15º día de baja, a cargo de la empresa.'),
        li(b('60% de base reguladora'), ', del día 16º al 20º día, a cargo de Solimat.'),
        li(b('75% de base reguladora'), ', del 21º día en adelante, a cargo de Solimat.'),
      ),
      p(
        'Te recordamos que, si mientras estás de baja, pasas a situación de desempleo, la cuantía que recibes es la misma que por desempleo, con la particularidad de ir consumiendo tiempo de paro.',
      ),
      label('Forma de abono'),
      ul(
        li(
          b('Pago delegado'),
          ': prestación satisfecha por la empresa en nómina, en concepto de incapacidad temporal, y posterior compensación de las cantidades satisfechas en los boletines de cotización.',
        ),
        li(
          b('Pago directo'),
          ': previa solicitud del trabajador, cuando se encuentre en alguna de las siguientes situaciones.',
        ),
      ),
      label('Requisitos'),
      ul(
        li('Que la empresa tenga la ', b('contingencia común'), ' cubierta con ', b('Solimat'), '.'),
        li(
          'Estar ',
          b('afiliado y en alta'),
          ' (o en situación asimilada al alta) en la fecha del accidente no laboral o del diagnóstico de la enfermedad.',
        ),
        li('Estar en ', b('baja médica'), '.'),
        li(
          'Tener cubierto un periodo de cotización de ',
          b('180 días dentro de los 5 años inmediatamente anteriores a la baja médica'),
          '. (Requisito no exigible en los casos de incapacidad temporal derivada de accidente no laboral). En los contratos a tiempo parcial, requiere acreditar los periodos de cotización necesarios para tener derecho a la prestación.',
        ),
      ),
      label('Situaciones que originan el pago directo'),
      ul(
        li('Quedar en ', b('desempleo'), '.'),
        li('Pasar a situación de ', b('prórroga de incapacidad temporal'), '.'),
        li(b('Recaída'), ' estando en situación de ', b('desempleo'), '.'),
        li(
          b('Estar excluido del pago delegado'),
          ' (Representantes de Comercio, Artistas, Profesionales Taurinos, Agrarios, Empleados de hogar y trabajadores de los grupos II y III del Régimen Especial del Mar).',
        ),
        li(b('Suspensión del contrato'), ' en caso de trabajadores ', b('fijos-discontinuos'), '.'),
        li('Estar ', b('jubilado parcialmente'), '.'),
      ),
    ],
  },
  {
    id: 'cuenta-propia',
    label: 'Cuenta propia',
    blocks: [
      p(
        'En Solimat asumimos la prestación económica por incapacidad temporal derivada de una enfermedad común o accidente no laboral.',
      ),
      label('Periodo'),
      ul(li('Desde el 4º día de la baja hasta el día del alta.'), li('Duración máxima: 730 días.')),
      label('Cuantía'),
      ul(
        li('60% de tu base regulador, del 4º al 20º día de la baja.'),
        li('75% de la base reguladora, del día 21 y hasta el día del alta.'),
      ),
      label('Forma de abono'),
      ul(
        li(
          b('Pago directo'),
          ': previa solicitud del autónomo y presentación de la declaración de situación de actividad.',
        ),
      ),
      label('Requisitos'),
      ul(
        li('Tener la ', b('contingencia común'), ' cubierta con ', b('Solimat'), '.'),
        li(
          'Estar ',
          b('adherido y de alta'),
          ' en el régimen de autónomos (o en situación asimilada al alta) a la fecha del accidente no laboral o del diagnóstico de la enfermedad.',
        ),
        li('Estar en ', b('baja médica'), '.'),
        li('Estar al ', b('corriente en el pago'), ' de las cotizaciones a la Seguridad Social.'),
        li(
          'Tener cubierto un ',
          b('periodo de cotización de 180 días dentro de los 5 años inmediatamente anteriores a la baja médica'),
          ' (Requisito no exigible en los casos de incapacidad temporal derivada de accidente no laboral).',
        ),
      ),
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Riesgo durante el embarazo y la lactancia natural
 * ---------------------------------------------------------------- */

const CAUSAS_EXTINCION: RichListItem[] = [
  li('Suspensión por maternidad y/o el hijo cumpla 9 meses de edad.'),
  li('Extinción del contrato de trabajo.'),
  li('Reincorporación al puesto de trabajo anterior o a otro compatible con tu estado.'),
  li('Interrupción del embarazo.'),
  li('Fallecimiento de la madre o del bebé.'),
];

export const RIESGO_EMBARAZO_HEADER: RichBlock[] = [
  p('Si eres mujer, trabajas, estás embarazada o estás periodo de lactancia natural, y:'),
  ul(
    li(
      'En el desempeño de tu actividad y/o condiciones de trabajo influyen negativamente en tu salud, o en la de tu hijo/a (feto o lactante).',
    ),
    li('Y no es posible cambiar o adaptar tu puesto de trabajo por otro compatible con tu estado.'),
  ),
  p(
    'Puedes optar a ella tanto si eres trabajadora por cuenta ajena como autónoma si tienes que interrumpir tu actividad profesional, como consecuencia de un posible riesgo en tu puesto de trabajo.',
  ),
];

export const RIESGO_EMBARAZO_TABS: PrestacionTab[] = [
  {
    id: 'cuenta-ajena',
    label: 'Cuenta ajena',
    blocks: [
      p('En Solimat gestionamos y abonamos tu prestación por riesgo durante el embarazo y la lactancia natural.'),
      label('Duración'),
      p(b('Inicio:')),
      p('Durante el embarazo: Fecha de inicio del cese de actividad por riesgo durante el embarazo.'),
      p(
        'Durante la lactancia materna: Fecha de inicio del cese de actividad por riesgo durante la lactancia natural.',
      ),
      p(b('Fin:'), ' hasta que exista una causa legal de extinción.'),
      label('Causas legales de extinción'),
      ul(...CAUSAS_EXTINCION),
      label('Cuantía'),
      ul(
        li(
          '100% de la base reguladora establecida para la prestación de incapacidad temporal derivada de contingencias profesionales.',
        ),
      ),
      label('Forma de abono'),
      ul(
        li(
          'Directamente a la trabajadora, previa solicitud de ésta, tras el reconocimiento de la existencia del riesgo y suspensión del contrato.',
        ),
      ),
      label('Requisitos'),
      ul(
        li('Estar afiliada y en situación de alta en la empresa.'),
        li('Estar embarazada o en situación de lactancia natural con un menor de 9 meses.'),
        li('Existen riesgos para tu salud o la de tu bebé, relacionados con tu puesto de trabajo.'),
        li('No han podido adaptarse las condiciones y/o tiempos de trabajo.'),
        li(
          'El riesgo está relacionado con agentes, procedimientos o condiciones de trabajo del puesto desempeñado.',
        ),
        li(
          'Estar al corriente de pago de las cuotas a la Seguridad Social (si estás incluida en el Régimen Especial de Empleados del Hogar).',
        ),
      ),
    ],
  },
  {
    id: 'cuenta-propia',
    label: 'Cuenta propia',
    blocks: [
      p('En Solimat gestionamos y abonamos tu prestación por riesgo durante el embarazo y la lactancia natural.'),
      label('Duración'),
      p(b('Inicio:')),
      ul(
        li('Durante el embarazo: Fecha de inicio del cese de actividad por riesgo durante el embarazo.'),
        li(
          'Durante la lactancia materna: Fecha de inicio del cese de actividad por riesgo durante la lactancia natural.',
        ),
      ),
      p(b('Fin:'), ' hasta que exista una causa legal de extinción.'),
      label('Causas legales de extinción'),
      ul(...CAUSAS_EXTINCION),
      label('Cuantía'),
      ul(
        li(
          '100% de la base reguladora establecida para la prestación de incapacidad temporal derivada de contingencias profesionales.',
        ),
      ),
      label('Forma de abono'),
      ul(
        li(
          'Directamente a la autónoma, previa solicitud de ésta, y tras el reconocimiento de la existencia del riesgo.',
        ),
      ),
      label('Requisitos'),
      ul(
        li('Estás afiliada y de alta en el Régimen Especial de Trabajadores Autónomos.'),
        li('Estás embarazada y/o estás en situación de lactancia natural con un menor de 9 meses.'),
        li('Existen riesgos para tu salud o la del bebé, relacionados con tu actividad profesional.'),
        li('No se han podido adaptar las condiciones y/o tiempos de trabajo.'),
        li('Debe existir relación con agentes, procedimientos o condiciones de trabajo del puesto desempeñado.'),
        li('Estás al corriente en el pago de las cuotas a la Seguridad Social.'),
      ),
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Cuidado de menores afectados por cáncer u otra enfermedad grave
 * ---------------------------------------------------------------- */

const PERIODO_COTIZACION_MENORES: RichListItem[] = [
  li('De ', b('21 años'), ': no precisan carencia.'),
  li(
    'Entre ',
    b('21 y 25 años'),
    ': 90 días en los 7 años anteriores a la solicitud de la prestación o 180 días en el total de la vida laboral.',
  ),
  li(
    b('26 años o más'),
    ': 180 días en los 7 años anteriores a la solicitud de la prestación o 360 días en el total de la vida laboral.',
  ),
];

const REQUISITOS_ENFERMEDAD: RichBlock[] = [
  p('Requisitos relativos a la ', b('enfermedad padecida'), ':'),
  ul(
    li(
      'Tener cáncer o una enfermedad grave ',
      b('incluida en el listado'),
      ' del anexo ',
      a('Real Decreto 1148/2011', 'https://www.boe.es/eli/es/rd/2011/07/29/1148'),
    ),
    li(
      'Requerir ',
      b('ingreso hospitalario de larga duración y tratamiento médico en domicilio'),
      ', acreditado por informe del Servicio Público de Salud u órgano administrativo sanitario de la Comunidad Autónoma correspondiente.',
    ),
  ),
];

export const CUIDADO_MENORES_HEADER: RichBlock[] = [
  p(
    'Si necesitas reducir tu jornada laboral un 50% o más, para el cuidado directo, continuado y permanente de un menor a tu cargo, por padecer cáncer u otra enfermedad grave, te:',
  ),
  ul(li('Abonamos el 100% de tu base reguladora.')),
];

export const CUIDADO_MENORES_TABS: PrestacionTab[] = [
  {
    id: 'cuenta-ajena',
    label: 'Cuenta ajena',
    blocks: [
      p(
        'En Solimat estamos a tu lado, cuando tu familia y tú más lo necesitáis. Asumimos la prestación económica por cuidado de menores con cáncer u otra enfermedad grave.',
      ),
      label('Duración'),
      ul(
        li(b('Inicio:'), ' Desde el reconocimiento del derecho a la prestación.'),
        li(b('Fin:'), ' Hasta como máximo de los 26 años del menor.'),
      ),
      label('Cuantía'),
      ul(
        li(
          b('100% de la base reguladora'),
          ' establecida para la prestación por incapacidad temporal derivada de contingencias profesionales.',
        ),
        li(b('Proporcional a la reducción de jornada'), '.'),
      ),
      label('Forma de abono'),
      ul(
        li(
          'Directamente al trabajador/a tras solicitud previa de este/a y resolución sobre el reconocimiento del derecho.',
        ),
      ),
      label('Requisitos'),
      p('Relativos a la ', b('persona trabajadora'), ':'),
      ul(
        li('Estar protegido por ', b('Solimat'), '.'),
        li(
          'Estar ',
          b('afiliada y en alta'),
          ' a la Seguridad Social (No aplicable al funcionariado incluido en el Estatuto Básico del Empleado Público).',
        ),
        li(
          'Estar ',
          b('trabajando ambos progenitores, guardadores o acogedores'),
          '. En el caso de familias monoparentales este requisito bebe cumplirlo la persona progenitora, guardadora o acogedora.',
        ),
        liNested(['Acreditar el ', b('período de cotización'), ' exigido, para menores:'], PERIODO_COTIZACION_MENORES),
      ),
      p('Requisitos relativos a los ', b('hijos, adoptados o acogidos'), ', afectados por la enfermedad:'),
      ul(
        li('Ser ', b('menores de 18 años')),
        li(
          'Ser ',
          b('menores de 23 años'),
          ' y la enfermedad haya sido diagnosticada antes de haber cumplido los 18 años.',
        ),
        li(
          'Ser ',
          b('menores de 26 años'),
          ' y acredite tener reconocido un grado de discapacidad igual o superior al 65%, antes de haber cumplido este los 23 años.',
        ),
        li('Precisar ', b('cuidado directo, continuo y permanente.')),
      ),
      ...REQUISITOS_ENFERMEDAD,
    ],
  },
  {
    id: 'cuenta-propia',
    label: 'Cuenta propia',
    blocks: [
      p(
        'En Solimat estamos a tu lado, cuando tu familia y tú más lo necesitáis. Asumimos la prestación económica por cuidado de menores con cáncer u otra enfermedad grave.',
      ),
      label('Duración'),
      ul(
        li(b('Inicio:'), ' Desde el reconocimiento del derecho a la prestación.'),
        li(b('Fin:'), ' Hasta como máximo de los 26 años del menor.'),
      ),
      label('Cuantía'),
      ul(
        li(
          b('100% de la base reguladora'),
          ' establecida para la prestación por incapacidad temporal derivada de contingencias profesionales.',
        ),
        li(b('Proporcional a la reducción de jornada'), '.'),
      ),
      label('Forma de abono'),
      ul(
        li(
          'Directamente al autónomo/a tras solicitud previa de este/a y resolución sobre el reconocimiento del derecho.',
        ),
      ),
      label('Requisitos'),
      p('Relativos a la ', b('persona trabajadora'), ':'),
      ul(
        li('Estar adherido/a a ', b('Solimat'), '.'),
        li('Estar en ', b('alta'), ' a la Seguridad Social.'),
        li('Estar al ', b('corriente de pago'), ' de las cuotas a la Seguridad Social'),
        li(
          'Estar ',
          b('trabajando ambos progenitores, guardadores o acogedores'),
          '. En el caso de familias monoparentales este requisito bebe cumplirlo la persona progenitora, guardadora o acogedora.',
        ),
        liNested([b('Acreditar el período de cotización exigido'), ', para menores:'], PERIODO_COTIZACION_MENORES),
      ),
      p('Requisitos relativos a los ', b('hijos, adoptados o acogidos'), ', afectados por la enfermedad:'),
      ul(
        li('Ser ', b('menores de 18 años'), '.'),
        li(
          'Ser ',
          b('menores de 23 años'),
          ' y la enfermedad haya sido diagnosticada antes de haber cumplido los 18 años.',
        ),
        li(
          'Ser ',
          b('menores de 26 años'),
          ' y acredite tener reconocido un grado de discapacidad igual o superior al 65%, antes de haber cumplido este los 23 años.',
        ),
        li('Precisar ', b('cuidado directo, continuo y permanente.')),
      ),
      ...REQUISITOS_ENFERMEDAD,
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Cese de actividad de los trabajadores autónomos
 * ---------------------------------------------------------------- */

export const CESE_ACTIVIDAD_NOTE = 'Nueva regulación Cese de Actividad';

export const CESE_ACTIVIDAD_BLOCKS: RichBlock[] = [
  h3('Prestaciones económicas por cese de actividad de trabajadores autónomos'),
  p('Puedes solicitar la prestación por cese de actividad si eres:'),
  ul(
    li(
      'Persona trabajadora autónoma comprendida en el Régimen Especial de Trabajadores por Cuenta Propia o Autónomos.',
    ),
    li('Persona trabajadora por cuenta propia incluida en el Régimen Especial de Trabajadores del Mar.'),
    li('Socio de cooperativa de trabajo y persona trabajadora societarias.'),
  ),
  p('Y te encuentras en alguna de estas situaciones:'),
  ul(
    li('Haber cesado totalmente tu actividad de forma involuntaria.'),
    li('Haber reducido tu actividad de forma temporal.'),
    li(
      'Te has visto afectado/a por un cese temporal de tu actividad por una declaración de emergencia adoptada por la autoridad pública competente.',
    ),
  ),
  p('A partir del 1 de enero de 2023, se amplía las situaciones de protección, de forma que el cese de actividad puede ser:'),
  ul(
    li('Definitivo'),
    liNested(
      ['Temporal:'],
      [
        li('Total: comporta la interrupción de todas las actividades que puedan originar el alta como RETA.'),
        li('Parcial: cuando se produzca una reducción de la actividad que afecte a un sector o centro de trabajo.'),
      ],
    ),
  ),
  label('Motivos de situación legal de cese'),
  p('En esta situación se encuentran aquellos/as trabajadores/as que acrediten alguna de las causas siguientes:'),
  ul(
    liNested(
      [b('Motivos económicos, técnicos, productivos u organizativos:')],
      [
        li(
          'Pérdidas derivadas del desarrollo de su actividad, en un año completo, superiores al 10% de los ingresos obtenidos, excluido el primer año de inicio de la actividad.',
        ),
        li(
          'Ejecuciones judiciales o administrativas que comporten al menos el 30% de los ingresos del ejercicio económico inmediatamente anterior.',
        ),
        li('Declaración judicial de concurso de acreedores.'),
        li(
          'Cese temporal con trabajadores/as a su cargo, siempre y cuando hayan tenido que reducir el 60% de la jornada laboral de todo el personal o haber suspendido temporalmente los contratos de, al menos, del 60% del personal, siempre que en los dos trimestres fiscales previos a la solicitud el nivel de ingresos haya disminuido en un 75% respecto a los mismos periodos del ejercicio o anteriores y los rendimientos netos mensuales del/la autónomo/a sean inferiores al SMI o de la base por la que viniera cotizando, si esta fuera inferior.',
        ),
        li(
          'Cese temporal sin trabajadores/as a su cargo, siempre y cuando se tengan deudas exigibles con acreedores superiores al 150% de los ingresos durante los dos trimestres fiscales previos a la solicitud y que los ingresos supongan una reducción del 75% respecto a los mismos periodos.',
        ),
      ],
    ),
    li(b('Por fuerza mayor (puede ser temporal o definitivo).')),
    li(b('Por pérdida de licencia administrativa.')),
    li(b('Por violencia de género.')),
  ),
  p('Otros motivos adicionales, en el caso de:'),
  ul(
    liNested(
      [b('Trabajadores económicamente dependientes (TRADE)')],
      [
        li('Terminación de la duración contractual, obra o servicio.'),
        li('Incumplimiento contractual grave del cliente.'),
        li('Rescisión de la relación contractual del cliente por causa justificada.'),
        li('Rescisión de la relación contractual del cliente por causa injustificada.'),
        li('Por muerte, incapacidad permanente o jubilación del cliente.'),
      ],
    ),
    liNested(
      [b('Socios (cese en el cargo de la sociedad)')],
      [
        li('Si el patrimonio neto ha disminuido por debajo de las 2/3 partes del capital social.'),
        li(
          'Por pérdidas derivadas del desarrollo de la actividad en un año completo, superiores al 10% de los ingresos obtenidos en el mismo periodo (excluido primer año de inicio de actividad).',
        ),
      ],
    ),
    liNested(
      [b('Trabajador/a autónomo/a que ejerce funciones de ayuda familiar, colaborador familiar:')],
      [
        li('Por divorcio o separación matrimonial.'),
        li('Por muerte, incapacidad o jubilación del empresario titular del negocio.'),
        li(
          'Cuando el titular del negocio cese por una de las causas comunes para todos los tipos de autónomos (económicas, fuerza mayor, pérdida de licencia administrativa, violencia de género).',
        ),
      ],
    ),
    liNested(
      [b('Socios trabajadores/as de cooperativas de trabajo asociado')],
      [
        li('Por expulsión improcedente.'),
        li('Finalización periodo del vínculo societario.'),
        li('Pérdida de la licencia administrativa de la cooperativa.'),
        li('Cese durante el periodo de prueba por decisión unilateral del consejo rector.'),
      ],
    ),
    liNested(
      [b('Trabajador/a autónomo/a por cuenta propia agrario')],
      [
        li(
          'Cuando por fuerza mayor se realice un cambio de cultivo o de actividad ganadera, durante el periodo necesario para el desarrollo del ciclo normal de evolución del nuevo cultivo o ganadería.',
        ),
        li(
          'Cuando por fuerza mayor se produzcan daños en las explotaciones agrarias o ganaderas, durante el tiempo imprescindible para la recuperación de las mismas.',
        ),
        li('Durante el periodo de erradicación de las enfermedades en explotaciones ganaderas.'),
      ],
    ),
    liNested(
      [b('Trabajador/a autónomo/a por cuenta del Régimen Especial del Mar')],
      [
        li(
          'Por cese temporal por fuerza mayor en los supuestos de suspensión de la actividad de las mariscadoras por toxinas (veda de carácter extraordinario).',
        ),
      ],
    ),
  ),
  label('Duración'),
  ul(
    li(
      'Inicio: ',
      b('día siguiente a la baja'),
      ' en el Régimen Especial, por norma general, con las siguientes excepciones del artículo 331 de la Ley General de la Seguridad Social:',
    ),
  ),
  {
    kind: 'table',
    head: ['Situación', 'Fecha de efectos'],
    rows: [
      [['Apartado 1.a) Epígrafe 4º'], ['Primer día del mes siguiente a la comunicación a la autoridad laboral']],
      [['Apartado 1.a) Epígrafe 5º'], ['Primer día del mes siguiente al de la solicitud.']],
      [['Fuerza mayor'], ['Día que se acredite la concurrencia de la fuerza mayor']],
      [
        [
          'Pérdida de la licencia administrativa, siempre que la misma constituya un requisito para el ejercicio de la actividad económica/profesional y no venga motivada por la comisión de infracciones penales.',
        ],
        ['Primer día del mes siguiente al que tengan efectos la baja como consecuencia del cese'],
      ],
      [
        ['Violencia de género y sexual'],
        [
          'Fecha indicada en la orden de protección o, en su defecto, el informe del Ministerio Fiscal, a partir de la cual se ha producido el cese o la interrupción.',
        ],
      ],
      [
        [
          'Divorcio o separación matrimonial, mediante resolución judicial, en los supuestos en que el autónomo ejerciera funciones de ayuda familiar en el negocio de su excónyuge o de la persona de la que se ha separado, en función de las cuales estaba incluido en el correspondiente Régimen de la Seguridad Social',
        ],
        ['Primer día del mes siguiente al que tengan efectos la baja como consecuencia del cese.'],
      ],
    ],
  },
  ul(
    li(
      'Fin: En función de los ',
      b('períodos de cotización'),
      ' efectuados dentro de los 48 meses anteriores a la situación legal de cese de actividad de los que, al menos, 12 meses deben estar comprendidos en los 24 meses inmediatamente anteriores a dicha situación de cese con arreglo a la siguiente escala:',
    ),
  ),
  {
    kind: 'table',
    head: [
      'Periodo cotización (meses)',
      'De 12 a 17',
      'De 18 a 23',
      'De 24 a 29',
      'De 30 a 35',
      'De 36 a 42',
      'De 43 a 47',
      'De 48 en adelante',
    ],
    rows: [
      [
        [b('Duración protección (meses)')],
        [b('4')],
        [b('6')],
        [b('8')],
        [b('10')],
        [b('12')],
        [b('16')],
        [b('24')],
      ],
    ],
  },
  label('Cuantía'),
  ul(
    li('70% de la base reguladora* durante todo su periodo de disfrute.'),
    li(
      '50% de la base reguladora en los supuestos previstos en los epígrafes 4º y 5º del artículo 331.1.a) y en los supuestos de suspensión temporal parcial debida a fuerza mayor.',
    ),
  ),
  p(
    '*Base reguladora: promedio de las bases por las que se hubiere cotizado durante los 12 meses continuados e inmediatamente anteriores a la situación legal de cese.',
  ),
  ul(
    li(
      'Sujeta a limitaciones del Indicador Público de Renta de Efectos Múltiples (IPREM) en el mismo criterio que la prestación por desempleo, salvo para los supuestos de los epígrafes 4º y 5º y la suspensión temporal parcial.',
    ),
  ),
  label('Forma de abono'),
  ul(
    li(
      'Directamente a la persona trabajadora por cuenta propia autónomo/a, previa solicitud de la misma y justificación del cumplimiento de los requisitos.',
    ),
  ),
  label('Requisitos'),
  ul(
    li(
      'Tener ',
      b('cubierto el período mínimo de cotización'),
      ' por cese de actividad (al menos 12 meses cotizados en los 24 meses anteriores a la situación de cese).',
    ),
    li(
      'Encontrarte en ',
      b('situación legal de cese de actividad'),
      ', baja en el Régimen Especial, salvo para los motivos de los epígrafes 4º y 5º del artículo 331.1a), y fuerza mayor temporal total y parcial.',
    ),
    li(
      'En caso de cese definitivo, ',
      b('si'),
      ' puedes acceder a la ',
      b('pensión de jubilación'),
      ' ',
      b('no'),
      ' podrá acceder a la ',
      b('prestación por cese de actividad'),
      '.',
    ),
    li('Estar al ', b('corriente en el pago'), ' de las cuotas a la Seguridad Social.'),
    liNested(
      [
        'Para los supuestos de los ',
        b('epígrafes 4º y 5º del 331.1.a) no podrá ejercer otra actividad'),
        ', salvo:',
      ],
      [
        li(
          'En caso de ',
          em('pluriactividad'),
          ', donde el trabajador autónomo podrá percibir una remuneración por el trabajo por cuenta ajena que se venía desarrollando, siempre y cuando la suma de la retribución mensual media de los últimos cuatro meses inmediatamente anteriores al nacimiento del derecho a la prestación por cese y la propia prestación por cese de actividad, resulte en una cantidad media mensual inferior al importe del salario mínimo interprofesional vigente en el momento del nacimiento del derecho a la prestación por cese.',
        ),
        li(
          'Cuando vaya a realizar la ',
          em('misma actividad por la que causa el cese'),
          ', siempre que los rendimientos netos mensuales obtenidos durante la percepción de la prestación no sean superiores a la cuantía del salario mínimo interprofesional o al importe de la base por la que viniera cotizando, si esta fuera inferior.',
        ),
      ],
    ),
    li(
      'Si tienes ',
      b('trabajadores a tu cargo'),
      ', debes, previo al cese, ',
      b('cumplir las garantías y obligaciones con tus trabajadores'),
      ', salvo los casos de ',
      em('fuerza mayor temporal total y parcial'),
      ', así como en los ',
      em('ceses derivados de los epígrafes 4º o 5º'),
      ' que no será necesaria la baja en el Régimen.',
    ),
  ),
  label('Cotización'),
  p('En Solimat nos hacemos cargo del:'),
  ul(
    li(
      b('100% de la cuota'),
      ' que corresponda durante la percepción de las prestaciones económicas por cese de actividad.',
    ),
    li(
      b('50% de la cuota'),
      ' que corresponda durante la percepción de la prestación económica, en los supuestos previstos en los epígrafes 4.º y 5.º del apartado 1.a) del artículo 331, el otro 50 % es a cargo del trabajador.',
    ),
  ),
  p('El pago de esta cuota será en pago directo por la mutua junto a la prestación.'),
  p(
    'En los supuestos de violencia de género o violencia sexual determinante del cese temporal o definitivo de la actividad de la trabajadora autónoma, no existe la obligación de cotizar a la Seguridad Social',
  ),
];

/* ---------------------------------------------------------------- *
 * Mecanismo RED
 * ---------------------------------------------------------------- */

export const MECANISMO_RED_HEADER: RichBlock[] = [
  p(
    'El 1 de enero de 2023 entran en vigor dos nuevas prestaciones para los trabajadores autónomos activados por el Mecanismo RED (artículo 47 bis del Estatuto de los Trabajadores).',
  ),
  p(
    'Durante la vigencia de estas medidas, las personas trabajadoras autónomas podrán acceder a una de las dos prestaciones reguladas en las disposiciones adicionales 48 y 49 del Real Decreto-ley 13/2022, de 26 de julio, por el que se establece un nuevo sistema de cotización para los trabajadores por cuenta propia o autónomos y se mejora la protección por cese de actividad:',
  ),
];

export const MECANISMO_RED_TABS: PrestacionTab[] = [
  {
    id: 'ciclica',
    label: 'Modalidad Cíclica',
    blocks: [
      label('Destinatarios'),
      p(
        'Pueden causar derecho a esta prestación las personas trabajadoras autónomas que desarrollen su ',
        b('actividad en un sector afectado por el Acuerdo del Consejo de Ministros que active el Mecanismo RED en su modalidad cíclica'),
        ', previsto en el artículo 47 bis del texto refundido de la Ley del Estatuto de los Trabajadores.',
      ),
      label('Requisitos'),
      p('Comunes a todos los trabajadores autónomos:'),
      ul(
        li('Estar de ', b('alta en el régimen especial'), ' al que se encuentre adscrita la actividad.'),
        li('Estar al ', b('corriente en el pago'), ' de obligaciones tributarias y de Seguridad Social.'),
        li(
          b('No prestar servicios'),
          ' por cuenta ajena o por cuenta propia ',
          b('en otra actividad no afectada por el mecanismo RED'),
          ' o, siéndolo, no haber adoptado las medidas previstas en el artículo 47 bis del texto refundido de la Ley del Estatuto de los Trabajadores salvo lo dispuesto en al apartado cuarto de esta disposición adicional sobre incompatibilidades.',
        ),
        li(
          b('No percibir una prestación de cese de actividad'),
          ' o ',
          b('para la sostenibilidad de la actividad'),
          '.',
        ),
        li(
          b('No haber cumplido la edad ordinaria para causar derecho a la pensión contributiva de jubilación'),
          ', salvo que el trabajador autónomo no tuviera acreditado el período de cotización requerido para ello.',
        ),
      ),
      p(
        'Trabajadores autónomos, trabajadores autónomos socios de sociedades de capital, trabajadores de cooperativas de trabajo asociado o trabajadores autónomos que ejercen su actividad profesional conjuntamente, cuyas empresas tengan ',
        b('trabajadores asalariados'),
        ', se exigirá igualmente:',
      ),
      ul(
        li(
          b('Resolución de la autoridad laboral'),
          ' autorizando la aplicación del mecanismo RED para los trabajadores de la empresa.',
        ),
        li(
          'Que la adopción de las medidas del mecanismo RED afecte al ',
          b('75 por ciento de las personas en situación de alta con obligación de cotizar'),
          ' de la empresa.',
        ),
        li(
          'Que se produzca una ',
          b('reducción de ingresos ordinarios o ventas durante los dos trimestres fiscales previos'),
          ' a la solicitud presentados ante la Administración tributaria del 75 por ciento respecto de los registrados en los mismos periodos del ejercicio o ejercicios anteriores.',
        ),
        li(
          'Que los ',
          b('rendimientos netos mensuales del trabajador autónomo durante los dos trimestres fiscales anteriores'),
          ' a la solicitud de la prestación, por todas las actividades económicas, empresariales o profesionales que desarrolle, ',
          b('no alcancen la cuantía del salario mínimo interprofesional'),
          ' o el de la ',
          b('base'),
          ' por la que ',
          b('viniera cotizando'),
          ', si esta fuera inferior.',
        ),
        li(
          b('Cumplir la empresa con las obligaciones laborales'),
          ' adquiridas como consecuencia de la adopción de medidas al amparo del Mecanismo RED y estar al ',
          b('corriente en el pago de salarios de los trabajadores'),
          '.',
        ),
      ),
      p(
        'Trabajadores autónomos, trabajadores autónomos socios de sociedades de capital, trabajadores de cooperativas de trabajo asociado o trabajadores autónomos que ejercen su actividad profesional conjuntamente, cuyas empresas ',
        b('no tengan trabajadores asalariados'),
        ', se exigirá igualmente:',
      ),
      ul(
        li(
          'Que se produzca una ',
          b('reducción de ingresos ordinarios o ventas durante los dos trimestres fiscales previos a la solicitud'),
          ' presentados ante la Administración tributaria del 75 por ciento respecto de los registrados en los mismos periodos del ejercicio o ejercicios anteriores.',
        ),
        li(
          'Que los ',
          b('rendimientos netos mensuales'),
          ' del trabajador autónomo durante los ',
          b('dos trimestres fiscales anteriores a la solicitud'),
          ' de la prestación, por todas las actividades económicas o profesionales que desarrolle, no alcancen la cuantía del ',
          b('salario mínimo interprofesional'),
          ' o el de la ',
          b('base'),
          ' por la que ',
          b('viniera cotizando'),
          ', si esta fuera inferior.',
        ),
      ),
      label('Cuantía'),
      p('Comprende dos prestaciones:'),
      ul(
        liNested(
          [b('50% de la base reguladora*'), '.'],
          [
            li(
              'La base reguladora* de la prestación económica es la correspondiente a la base prevista en el tramo 3 de la tabla reducida aplicable a las personas trabajadoras autónomas.',
            ),
          ],
        ),
        liNested(
          [
            b('50% de la cotización a la Seguridad Social'),
            ' del trabajador autónomo al régimen correspondiente calculada sobre la base reguladora de la prestación. Solimat abona esta prestación.',
          ],
          [li('El otro 50% es a cargo de la persona trabajadora autónoma.')],
        ),
      ),
      label('Forma de abono'),
      ul(
        li(
          'Abono directo de la prestación y el importe de la cuota al/a autónomo/a, previa solicitud y justificación del cumplimiento de los requisitos.',
        ),
      ),
      label('Obligaciones'),
      p('Trabajadores autónomos ', b('con trabajadores por cuenta ajena'), ' perceptor de la prestación debe:'),
      ul(
        li('Incorporarse a la actividad cuando se acuerde el levantamiento de las medidas adoptadas en el mecanismo Red.'),
        li('Mantenerse en el desarrollo de la actividad al menos 6 meses consecutivos.'),
        li('Mantener al corriente en las cotizaciones a la Seguridad Social de los trabajadores de la empresa.'),
      ),
      p('Trabajadores autónomos ', b('sin trabajadores por cuenta ajena'), ' perceptor de la prestación debe:'),
      ul(
        li('Incorporarse a la actividad cuando finalice el derecho a la prestación.'),
        li('Mantenerse en el desarrollo de la actividad al menos 6 meses consecutivos.'),
      ),
    ],
  },
  {
    id: 'sectorial',
    label: 'Modalidad Sectorial',
    blocks: [
      label('Destinatarios'),
      p(
        'Pueden causar derecho a la prestación para la sostenibilidad de la actividad regulada en esta disposición, las personas trabajadoras autónomas que desarrollen su ',
        b('actividad en un sector afectado por el Acuerdo del Consejo de Ministros que active el Mecanismo RED en su modalidad sectorial'),
        ', previsto en el artículo 47 bis del texto refundido de la Ley del Estatuto de los Trabajadores.',
      ),
      label('Requisitos'),
      p('Comunes a todos los trabajadores autónomos:'),
      ul(
        li('Estar de ', b('alta en el régimen especial'), ' al que se encuentre adscrita la actividad.'),
        li(
          'Tener ',
          b('cubierto el periodo mínimo de cotización'),
          ' por cese de actividad a que se refiere el artículo 338.',
        ),
        li('Estar al ', b('corriente en el pago'), ' de obligaciones tributarias y de Seguridad Social.'),
        li(
          b('No prestar servicios'),
          ' por cuenta ajena o por cuenta propia ',
          b('en otra actividad no afectada por el mecanismo RED'),
          ' o siéndolo no haber adoptado las medidas previstas en el artículo 47 bis del texto refundido de la Ley del Estatuto de los Trabajadores salvo lo dispuesto en lo establecido en el apartado de incompatibilidades.',
        ),
        li(
          b('No percibir una prestación de cese de actividad'),
          ' o ',
          b('para la sostenibilidad de la actividad.'),
        ),
        li(
          b('No haber cumplido la edad ordinaria para causar derecho a la pensión contributiva de jubilación'),
          ', salvo que el trabajador autónomo no tuviera acreditado el período de cotización requerido para ello.',
        ),
        li(b('Suscripción del compromiso de actividad'), ' al que se refiere el artículo 300.'),
      ),
      p(
        'Trabajadores autónomos, trabajadores autónomos por su condición de socios de sociedades de capital, trabajadores de cooperativas de trabajo asociado o trabajadores autónomos que ejercen su actividad profesional conjuntamente, cuyas empresas ',
        b('tengan trabajadores asalariados'),
        ', se exigirá igualmente:',
      ),
      ul(
        li(
          b('Resolución de la autoridad laboral'),
          ' autorizando la aplicación del mecanismo RED para los trabajadores de la empresa.',
        ),
        li(
          'Que la adopción de las medidas del mecanismo RED afecte al ',
          b('75 por ciento de las personas en situación de alta con obligación de cotizar'),
          ' de la empresa.',
        ),
        li(
          'Que se produzca una ',
          b('reducción de ingresos ordinarios o ventas durante los dos trimestres fiscales previos'),
          ' a la solicitud presentados ante la Administración tributaria del ',
          b('75 %'),
          ' respecto de los registrados en los mismos periodos del ejercicio o ejercicios anteriores.',
        ),
        li(
          'Que los ',
          b('rendimientos netos mensuales del trabajador autónomo durante los dos trimestres fiscales anteriores'),
          ' a la solicitud de la prestación, por todas las actividades económicas, empresariales o profesionales que desarrolle, no alcancen la cuantía del ',
          b('salario mínimo interprofesional'),
          ' o el de la ',
          b('base'),
          ' por la que ',
          b('viniera cotizando'),
          ', si esta fuera inferior.',
        ),
        li(
          b('Cumplir la empresa con las obligaciones laborales adquiridas'),
          ' como consecuencia de la adopción de medidas al amparo del Mecanismo RED y estar al ',
          b('corriente en el pago de salarios de los trabajadores'),
          '.',
        ),
      ),
      p(
        'Trabajadores autónomos, trabajadores autónomos por su condición de socios de sociedades de capital, trabajadores de cooperativas de trabajo asociado o trabajadores autónomos que ejercen su actividad profesional conjuntamente, cuyas empresas ',
        b('no tengan trabajadores asalariados'),
        ', se exigirá igualmente:',
      ),
      ul(
        li(
          'Que se produzca una ',
          b('reducción de ingresos ordinarios o ventas durante los dos trimestres fiscales previos'),
          ' a la solicitud presentados ante la Administración tributaria del ',
          b('75%'),
          ' respecto de los registrados en los mismos periodos del ejercicio o ejercicios anteriores.',
        ),
        li(
          'Que los ',
          b('rendimientos netos mensuales'),
          ' del trabajador autónomo durante los ',
          b('dos trimestres fiscales anteriores'),
          ' a la solicitud de la prestación, por todas las actividades económicas o profesionales que desarrolle, no alcancen la cuantía del ',
          b('salario mínimo interprofesional'),
          ' o el de la ',
          b('base'),
          ' por la que viniera cotizando, si esta fuera inferior.',
        ),
        li('Presentar a Solimat un ', b('proyecto de inversión y actividad a desarrollar'), '.'),
        li('Participar en un ', b('plan de recualificación'), ' que debe ser presentado a Solimat.'),
      ),
      label('Cuantía'),
      p('Comprende las prestaciones siguientes:'),
      p(
        'Para trabajadores autónomos, trabajadores autónomos por su condición de socios de sociedades de capital, trabajadores de cooperativas de trabajo asociado o trabajadores autónomos que ejercen su actividad profesional conjuntamente, cuyas empresas ',
        b('tengan trabajadores asalariados'),
        ':',
      ),
      ul(
        li(
          b('70 % de la base reguladora*'),
          ' y su determinación estará vinculada al tiempo de duración del mecanismo RED y en ningún caso podrá exceder de la que le corresponda atendiendo a lo previsto en el artículo 338.1.',
        ),
      ),
      p(
        'Para de trabajadores autónomos, trabajadores autónomos por su condición de socios de sociedades de capital, trabajadores de cooperativas de trabajo asociado o trabajadores autónomos que ejercen su actividad profesional conjuntamente, cuyas empresas ',
        b('no tengan trabajadores asalariados'),
        ':',
      ),
      ul(
        li(
          b('70 % de la base reguladora*'),
          ' teniendo en cuenta los periodos de cotización de conformidad con lo previsto en el artículo 338.',
        ),
      ),
      p(
        'La base reguladora* de la prestación económica será el promedio de las bases de cotización de los doce meses continuados e inmediatamente anteriores al acuerdo del Consejo de Ministros.',
      ),
      ul(
        li(
          'Y el ',
          b('50% de la cotización a la Seguridad Social'),
          ' del trabajador autónomo al régimen correspondiente calculada sobre la base reguladora de la prestación. Solimat abona esta prestación.',
        ),
      ),
      p('El otro 50% es a cargo de la persona trabajadora autónoma.'),
      label('Forma de abono'),
      ul(
        li(
          'Abono directo y ',
          b('pago único'),
          ' a la persona trabajadora autónoma, previa solicitud y justificación del cumplimiento de los requisitos.',
        ),
      ),
      label('Obligaciones'),
      p('Trabajadores autónomos perceptores de la prestación deben:'),
      ul(
        li(
          'Incorporarse a la actividad cuando se acuerde el levantamiento de las medidas adoptadas en el mecanismo Red, al menos a uno de los trabajadores de la empresa.',
        ),
        li('Mantenerse en el desarrollo de la actividad al menos 6 meses consecutivos.'),
        li(
          'Mantenerse al corriente en las cotizaciones a la Seguridad Social, propias y de los trabajadores de la empresa o asimilados.',
        ),
        li('Cotizar el 50% por todas las contingencias, incluido el cese de actividad.'),
        li(
          'Invertir el importe de la prestación en un actividad económica o profesional como trabajadores autónomos o destinar el 100% de su importe a realizar una aportación al capital social de una entidad mercantil de nueva constitución o constituida en el plazo máximo de doces meses anteriores a la aportación, siempre que vayan a poseer el control efectivo de la misma, conforme a lo previsto en el texto refundido de la LGSS y a ejercer en ella una actividad, encuadrados como trabajadores por cuenta propia en el régimen especial de la Seguridad Social correspondiente por razón de su actividad.',
        ),
      ),
    ],
  },
];

/* ---------------------------------------------------------------- *
 * Prestaciones complementarias
 * ---------------------------------------------------------------- */

export const PRESTACIONES_COMPLEMENTARIAS_HEADER: RichBlock[] = [
  p(
    'Te ayudamos a poder acceder a las prestaciones complementarias. Son ayudas económicas que concede la Comisión de Prestaciones Especiales de Solimat y son de carácter potestativo.',
  ),
];

export const PRESTACIONES_COMPLEMENTARIAS_BLOCKS: RichBlock[] = [
  label('Beneficiarios'),
  ul(
    li(
      'Trabajadores al servicio de los empresarios asociados con Solimat que hayan sufrido un accidente de trabajo (con baja) o estén afectos a una enfermedad profesional aún con posterioridad a la pérdida del empleo, siempre y cuando quede acreditado con el correspondiente informe médico que son consecuencia directa del accidente de trabajo o de la enfermedad profesional.',
    ),
    li(
      'El cónyuge o la pareja de hecho del trabajador aun en los casos en los que no tenga derechos sucesorios del trabajador fallecido y los hijos del trabajador accidentado. En ambos supuestos, deberán constituir una unidad de convivencia con el trabajador.',
    ),
    li(
      'En defecto de los anteriores: los nietos; y, a falta de ellos, los padres. En ambos supuestos, deberán constituir una unidad de convivencia con el trabajador.',
    ),
    li(
      'Podrá ser beneficiario de la prestación de auxilio por defunción cualquier familiar, cónyuge o pareja de hecho que tenga la condición de derechohabiente y haya hecho frente a los gastos del deceso.',
    ),
    li(
      'También aplica a Trabajadores Autónomos en las mismas condiciones y términos a los establecidos para trabajadores por cuenta ajena.',
    ),
  ),
  label('Requisitos'),
  p(
    'Las prestaciones complementarias están dirigidas a los trabajadores de las empresas asociadas a Solimat, a los trabajadores autónomos adheridos y a sus derechohabientes. Puedes solicitarlas siempre que cumplas los requisitos siguientes:',
  ),
  ul(
    li('Tener la cobertura de contingencias profesionales con Solimat.'),
    li('Haber sufrido un accidente de trabajo o enfermedad profesional.'),
    li('Encontrarte en estado y/o situación concreta de necesidad.'),
    li('Cumplir con los requisitos establecidos legalmente.'),
    li('Informe de asistente donde se determine y cuantifique la ayuda solicitada.'),
  ),
  label('Tipos de ayuda'),
  ul(
    li('Rehabilitación y recuperación.'),
    li('Reorientación profesional y adaptación del puesto de trabajo.'),
    li(
      'Ayuda para la adaptación de los medios esenciales para el desarrollo de las actividades básicas de la vida diaria.',
    ),
    li('Complemento auxilio por defunción.'),
    li('Ayuda para la formación en el cuidado de personas en situación de Gran Invalidez.'),
    li('Ayuda para el mantenimiento de la posesión o disfrute de la vivienda habitual.'),
  ),
  label('Cuantía'),
  p(
    'La Comisión de Prestaciones Especiales es la encargada de estudiar y aprobar o denegar las solicitudes recibidas. En el caso de ser aprobadas, estas pueden cubrirse total o parcialmente.',
  ),
];

/* ---------------------------------------------------------------- *
 * Incapacidad permanente e invalidez
 * ---------------------------------------------------------------- */

export const INCAPACIDAD_HEADER: RichBlock[] = [
  p(
    'Si como consecuencia de un accidente de trabajo o enfermedad profesional, ',
    b('después del tratamiento médico presenta reducciones que disminuyen o anulan su capacidad'),
    ' laboral, será dado de alta con una propuesta de solicitud de grado de incapacidad.',
  ),
  p(
    'En función de la disminución de la capacidad laboral, la determinación de la incapacidad se establece en grados de incapacidad.',
  ),
];

export const INCAPACIDAD_GRADES: Grade[] = [
  {
    title: 'Lesiones permanentes no invalidantes',
    blocks: [
      ul(
        li(
          'Situación: Disminución o alteración de la integridad física a causa de lesiones, mutilaciones y deformidades de carácter definitivo no incapacitantes.',
        ),
        li(
          'Cuantía: recogida en el ',
          b('baremo'),
          ' establecido al efecto (indemnización única según el baremo vigente adjuntar enlace, ojo este creo que se modifica periódicamente tenerlo en cuenta para alertado en el mapa web para actualización).',
        ),
        li('Forma de pago: Pago único'),
      ),
    ],
  },
  {
    title: 'Incapacidad permanente parcial',
    blocks: [
      ul(
        li('Situación: Disminución no inferior al 33% en el rendimiento normal para la profesión sin impedirle otras tareas.'),
        li(
          'Cuantía: cantidad equivalente a 24 mensualidades de la base reguladora (del mes anterior a la baja) del cálculo de la prestación de incapacidad temporal.',
        ),
        li('Forma de pago: Pago único.'),
      ),
    ],
  },
  {
    title: 'Incapacidad permanente total',
    blocks: [
      ul(
        li(
          'Situación: Inhabilita al trabajador/a para realizar las tareas fundamentales de su profesión, a realizar su oficio, pero puede dedicarse a otra distinta.',
        ),
        li(
          'Cuantía: 55% de la base reguladora anual, revisable para mayores de 55 años que no realicen trabajos (incremento en un 20%).',
        ),
        li('Forma de pago: pensión vitalicia.'),
      ),
    ],
  },
  {
    title: 'Incapacidad permanente absoluta',
    blocks: [
      ul(
        li('Inhabilita por completo al que trabaja para toda profesión u oficio.'),
        li('Cuantía: pensión vitalicia del 100% de la base reguladora anual.'),
        li('Forma de pago: pensión vitalicia.'),
      ),
    ],
  },
  {
    title: 'Gran invalidez',
    wide: true,
    blocks: [
      ul(
        li(
          'La persona afectada por incapacidad permanente necesita de la asistencia de otra persona para llevar a cabo los actos más esenciales de la vida.',
        ),
        li(
          'Cuantía: 100% de la base reguladora, más un complemento no inferior al 45% de la pensión, para la persona que lo atiende.',
        ),
        li('Forma de pago: pensión vitalicia.'),
      ),
    ],
  },
];

export const INCAPACIDAD_FOOTNOTE: RichBlock[] = [
  p(
    'Para más información: ',
    a(
      'Seguridad Social: Información Útil (seg-social.es)',
      'https://www.seg-social.es/wps/portal/wss/internet/InformacionUtil/44539/45982',
    ),
  ),
];

/* ---------------------------------------------------------------- *
 * Prestación por muerte y supervivencia
 * ---------------------------------------------------------------- */

export const MUERTE_SUPERVIVENCIA_HEADER: RichBlock[] = [
  p(
    'En caso de ',
    b('fallecimiento'),
    ' como consecuencia de un accidente de trabajo o enfermedad profesional, el ',
    b('cónyuge, hijos menores de 18 años o familiares próximos'),
    ' pueden solicitar:',
  ),
];

export const MUERTE_SUPERVIVENCIA_BLOCKS: RichBlock[] = [
  ul(
    liNested(
      [b('Pensión de viudedad para'), ' el cónyuge superviviente:'],
      [li('Cuantía: 52% de la base reguladora del fallecido.')],
    ),
    liNested(
      [b('Pensión de orfandad'), ':'],
      [
        li(
          'Cuantía: 20% de la base reguladora: hasta los 21 años, ampliable hasta los 25 años bajo determinadas circunstancias. Este porcentaje se puede incrementar un 52%.',
        ),
      ],
    ),
    liNested(
      [b('Prestación a favor de familiares'), ':'],
      [
        li('Cuantía: 20% de la base reguladora'),
        li('Requiere: el cumplimiento previo de determinados requisitos.'),
      ],
    ),
    liNested(
      [b('Auxilio por defunción:')],
      [
        li('Cuantía: ayuda obligatoria es de 46,5 euros.'),
        li('No exige periodo de carencia.'),
        li('Finalidad hacer frente a los gastos del sepelio.'),
        li('Beneficiarios: familiares que hayan sufragado el gasto.'),
        li('Forma de pago: pago único.'),
      ],
    ),
    liNested(
      [b('Indemnización a tanto alzado:')],
      [
        liNested(
          ['Cuantías:'],
          [
            li('6 mensualidades de la base reguladora*, para el cónyuge.'),
            li(
              '1 mensualidad de la base reguladora*, para cada hijo, (si no hay cónyuge superviviente, prorrateando entre los hijos las 6 mensualidades que deberían corresponder al cónyuge).',
            ),
            li(
              '9 mensualidades para el caso de madre o padre, y 6 mensualidades para cada uno si sobrevivieran ambos siempre que no exista ningún familiar con derecho a pensión por muerte o supervivencia y no tengan derecho a prestación a favor de familiares.',
            ),
          ],
        ),
      ],
    ),
  ),
  p('*Base reguladora del fallecido.'),
  p(
    'Para más información: ',
    a(
      'Seguridad Social: Información Útil (seg-social.es)',
      'https://www.seg-social.es/wps/portal/wss/internet/InformacionUtil/44539/45659',
    ),
  ),
];
