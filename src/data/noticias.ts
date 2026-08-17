import noticiaAecc from '../images/noticia-aecc.png';
import noticiaPrevencion from '../images/noticia-prevencion.png';
import noticiaIso9001 from '../images/noticia-iso9001.png';
import noticiaEfr from '../images/noticia-efr.png';
import noticia8m from '../images/noticia-8m.png';
import noticiaResultado from '../images/noticia-resultado.png';
import noticiaAbsentismo from '../images/noticia-absentismo.png';
import noticiaHospital30 from '../images/noticia-hospital30.png';
import noticiaDiamagnetica from '../images/noticia-diamagnetica.png';
import noticiaRodilla3d from '../images/noticia-rodilla3d.png';
import noticiaHuella from '../images/noticia-huella.png';
import noticiaAniversario from '../images/noticia-aniversario.png';
import noticiaSobresaliente from '../images/noticia-sobresaliente.png';
import noticiaCaritas from '../images/noticia-caritas.png';
import noticiaEla from '../images/noticia-ela.png';
import noticiaChristmas from '../images/noticia-christmas.png';
import noticiaIgualdad from '../images/noticia-igualdad.png';
import noticiaMujerFachada from '../images/noticia-mujer-fachada.png';
import noticiaVial from '../images/noticia-vial.png';
import noticia12millones from '../images/noticia-12millones.png';
import noticiaFedeto from '../images/noticia-fedeto.png';
import noticiaActuemos from '../images/noticia-actuemos.png';
import noticiaJuntaAprueba from '../images/noticia-junta-aprueba.png';
import noticiaCancerMama from '../images/noticia-cancer-mama.png';

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'quote'; text: string; author?: string };

export interface Noticia {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  blocks?: Block[];
  url?: string;
}

export type NoticiaPublica = {
  id: number | string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  blocks?: Block[];
  url?: string;
  content?: string;
};

const P = (text: string): Block => ({ kind: 'p', text });
const H = (text: string): Block => ({ kind: 'h', text });
const Q = (text: string, author?: string): Block => ({ kind: 'quote', text, author });

export const noticias: Noticia[] = [
  {
    id: 1,
    date: '12 mayo, 2025',
    title:
      'Solimat colabora con la Asociación Española Contra el Cáncer para sensibilizar sobre la importancia de la investigación oncológica',
    image: noticiaAecc,
    excerpt:
      'Solimat, Mutua Colaboradora con la Seguridad Social nº72, en su compromiso con la salud y el bienestar de las personas, ha puesto a disposición de la Asociación Española Contra el Cáncer (AECC) las instalaciones de su Hospital San José.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias/solimat-colabora-con-la-asociacion-espanola-contra-el-cancer-para-sensibilizar-sobre-la-importancia-de-la-investigacion-oncologica',
    blocks: [
      P(
        'Solimat, Mutua Colaboradora con la Seguridad Social nº72, en su compromiso con la salud y el bienestar de las personas, ha puesto a disposición de la Asociación Española Contra el Cáncer (AECC) las instalaciones de su Hospital San José, para la instalación de una mesa informativa que tiene como objetivo sensibilizar a pacientes, familiares y profesionales sanitarios sobre la importancia de la investigación en la lucha contra el cáncer.',
      ),
      P(
        'Durante esta acción conjunta, personal de la AECC ofrece información relevante sobre la enfermedad, los avances científicos, los recursos de apoyo disponibles para pacientes oncológicos y donde se sitúa su sede más cercana. Y es que 1 de cada 3 personas va a sufrir esta enfermedad a lo largo de su vida. Así pues, esta colaboración busca no solo dar visibilidad a la causa, sino también fomentar una cultura de prevención, detección precoz y solidaridad.',
      ),
      Q(
        '«Desde Solimat, creemos firmemente en la fuerza de la colaboración entre entidades para impulsar causas sociales de gran impacto. Facilitar espacios como este, donde la concienciación y la investigación se ponen en primer plano, es una forma más de demostrar nuestro compromiso con la salud integral de las personas»',
        'José Ángel González, Director del Hospital Solimat',
      ),
      P(
        'Esta iniciativa se enmarca en el compromiso de responsabilidad social de Solimat, orientado a apoyar proyectos que promuevan el cuidado de la salud más allá del ámbito laboral, y refuerza la labor continua de la AECC en su misión de avanzar en la investigación y mejorar la calidad de vida de las personas con cáncer.',
      ),
      H('Sobre Solimat'),
      P(
        'Solimat es una de las dieciocho mutuas que existen en la actualidad en nuestro país y la única con sede social en Castilla-La Mancha. Protege en torno a 150.000 trabajadores, más de 11.000 empresas asociadas y cerca de 20.000 autónomos adheridos.',
      ),
      P(
        'Formada por un equipo de 200 personas, que trabajan día a día por el cuidado y protección de la salud de los trabajadores que tiene encomendados. Para ello, cuenta con 10 centros propios en su ámbito de actuación (Madrid y Castilla-La Mancha) y el único Hospital Laboral de la región -el Hospital Solimat San José- ubicado en Toledo, así como una amplia red asistencial a nivel nacional.',
      ),
    ],
  },
  {
    id: 2,
    date: '27 abril, 2025',
    title:
      'Solimat, comprometida con la prevención, se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo',
    image: noticiaPrevencion,
    excerpt:
      'Solimat, mutua comprometida con la prevención, se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo. Muestra de ello es su apoyo a la campaña de cada año y su divulgación a través de todos sus canales de comunicación.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias/solimat-comprometida-con-la-prevencion-se-suma-a-la-conmemoracion-del-dia-mundial-de-la-seguridad-y-salud-en-el-trabajo',
    blocks: [
      P(
        'Solimat, mutua comprometida con la prevención, se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo. Muestra de ello es su apoyo a la campaña de cada año y su divulgación a través de todos sus canales de comunicación.',
      ),
      P(
        'Este Día Mundial, que se celebra cada 28 de abril, promueve la prevención de los accidentes y las enfermedades profesionales en todo el mundo, siendo este año el lema “Revolución de la Seguridad y Salud: Papel de la IA y la digitalización en el trabajo”.',
      ),
      P(
        'En este sentido, la OIT expone que la digitalización y la automatización presentan oportunidades para mejorar la seguridad y la salud en el trabajo, pudiendo llegar a reducir la exposición a entornos peligrosos, prevenir lesiones en el lugar de trabajo y mejorar las condiciones laborales. No obstante, se necesitan políticas proactivas para abordar los riesgos potenciales, siendo necesaria la participación de los gobiernos, las empresas y los trabajadores, junto con los profesionales de la Seguridad y Salud en el Trabajo y otros grupos de interés para garantizar que la transformación digital refuerce, y no comprometa, la seguridad y la salud en el trabajo.',
      ),
      H('Sobre el Día Mundial de la Seguridad y Salud en el Trabajo'),
      P(
        'El origen de esta fecha tan relevante fue gracias a la iniciativa de la Organización Internacional del Trabajo (OIT). Cada 28 de abril, la OIT celebra el Día Mundial de la Seguridad y la Salud con el fin de promover la prevención de accidentes de trabajo y enfermedades profesionales en todo el mundo.',
      ),
      P(
        'La celebración consiste en una campaña anual de sensibilización cuyo objetivo es centrar la atención a nivel internacional sobre las nuevas tendencias en el ámbito de la seguridad y la salud en el trabajo y sobre la magnitud de las lesiones, enfermedades y muertes relacionadas con el trabajo.',
      ),
    ],
  },
  {
    id: 3,
    date: '3 abril, 2025',
    title:
      'El Hospital Solimat se consolida como referente en salud laboral en Castilla-La Mancha tras obtener la certificación ISO 9001',
    image: noticiaIso9001,
    excerpt:
      'El Hospital Solimat refuerza su compromiso con la calidad y el bienestar de sus usuarios y se consolida como referente en el ámbito de la salud laboral en Castilla-La Mancha, gracias a la obtención de la certificación ISO 9001, uno de los más altos estándares internacionales en gestión de la calidad.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias/el-hospital-solimat-se-consolida-como-referente-en-salud-laboral-en-castilla-la-mancha-tras-obtener-la-certificacion-iso-9001',
    blocks: [
      P(
        'El Hospital Solimat refuerza su compromiso con la calidad y el bienestar de sus usuarios y se consolida como referente en el ámbito de la salud laboral en Castilla-La Mancha, gracias a la obtención de la certificación ISO 9001, uno de los más altos estándares internacionales en gestión de la calidad.',
      ),
      P(
        'Un logro que consigue tras cumplir 30 años de existencia en la capital regional y que refleja su compromiso con la mejora continua, la seguridad de los pacientes y la eficiencia de sus servicios, ofreciendo una atención sanitaria más fiable y de mayor calidad a sus usuarios.',
      ),
      H('Un proceso riguroso de mejora continua'),
      P(
        'A lo largo de la implementación de esta norma, se han realizado importantes adaptaciones en los procedimientos y protocolos internos del Hospital San José, único en Castilla-La Mancha en el sector mutual. Un hecho que repercute directamente en la calidad del servicio brindado a los usuarios, mejorando su satisfacción.',
      ),
      P(
        'Así pues, gracias a estas mejoras, la satisfacción de los usuarios se incrementa al generar una mayor confianza en la calidad de la atención recibida y garantizar una mayor seguridad en los tratamientos. Además, se logra una comunicación más efectiva y una respuesta más ágil ante consultas y reclamaciones y, también, los procesos administrativos se vuelven más eficientes, brindando mayor comodidad a los pacientes.',
      ),
      P(
        'En definitiva, el Hospital Solimat San José, gracias a la certificación ISO 9001, no solo cumple con los más altos estándares de calidad, sino que también reafirma su compromiso con la mejora continua y la seguridad de todos sus usuarios, consolidándose como referente en la salud laboral en Castilla-La Mancha.',
      ),
      H('Sobre Solimat'),
      P(
        'Solimat es una de las dieciocho mutuas que existen en la actualidad en nuestro país y la única con sede social en Castilla-La Mancha. Protege en torno a 150.000 trabajadores, más de 11.000 empresas asociadas y cerca de 20.000 autónomos adheridos.',
      ),
      P(
        'Formada por un equipo de 200 personas, que trabajan día a día por el cuidado y protección de la salud de los trabajadores que tiene encomendados. Para ello, cuenta con 10 centros propios en su ámbito de actuación (Madrid y Castilla-La Mancha) y el único Hospital Laboral de la región -el Hospital Solimat San José- ubicado en Toledo, así como una amplia red asistencial a nivel nacional.',
      ),
    ],
  },
  {
    id: 4,
    date: '25 marzo, 2025',
    title:
      'Solimat renueva la certificación efr, que acredita su compromiso con la conciliación, la transformación social y la sostenibilidad',
    image: noticiaEfr,
    excerpt:
      'Toledo, 25 de marzo de 2025.- Solimat, Mutua Colaboradora con la Seguridad Social Nº72, ha renovado la certificación efr alcanzando la categoría B Empresa Proactiva en conciliación. Se trata de una certificación promovida por Fundación Másfamilia y que, en este caso, ha sido auditada por AENOR.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias/solimat-renueva-la-certificacion-efr-que-acredita-su-compromiso-con-la-conciliacion-la-transformacion-social-y-la-sostenibilidad',
  },
  {
    id: 5,
    date: '7 marzo, 2025',
    title:
      'Solimat celebra el Día Internacional de la Mujer destacando el equilibrio de género en su equipo de trabajo',
    image: noticia8m,
    excerpt:
      'En el marco del Día Internacional de la Mujer, Solimat, Mutua Colaboradora con la Seguridad Social Nº72, pone en valor el equilibrio de género en su equipo, destacando que las mujeres representan el 58,33% de la plantilla.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias/solimat-celebra-el-dia-internacional-de-la-mujer-destacando-el-equilibrio-de-genero-en-su-equipo-de-trabajo',
  },
  {
    id: 6,
    date: '18 septiembre, 2024',
    title: 'Solimat logra un resultado positivo de más de 8 millones de euros',
    image: noticiaResultado,
    excerpt:
      'La Quinta de Amando ha sido el lugar escogido para celebrar la Junta General Ordinaria de la mutua, donde se han presentado los resultados económicos y los datos más relevantes del ejercicio 2023.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias/solimat-logra-un-resultado-positivo-de-mas-de-8-millones-de-euros',
  },
  {
    id: 7,
    date: '18 septiembre, 2024',
    title: 'Solimat analiza el impacto del absentismo laboral en las II Jornadas Empresariales',
    image: noticiaAbsentismo,
    excerpt:
      'Organizadas por Nieves Moreno Abogados-CE Consulting, se han celebrado hoy en el Salón de Actos de la Diputación Provincial de Albacete. Albacete, 27 de junio de 2024.- Solimat, Mutua Colaboradora con la Seguridad Social nº72, ha participado en las II Jornadas Empresariales organizadas por Nieves Moreno Abogados-CE Consulting.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 8,
    date: '18 septiembre, 2024',
    title: 'El Hospital de Solimat celebra 30 años de excelencia y compromiso con la salud laboral',
    image: noticiaHospital30,
    excerpt:
      'Toledo, 23 de junio de 2024.- El Hospital de Solimat celebra, este 24 de junio, su 30º Aniversario. A lo largo de estas tres décadas, este centro hospitalario ha evolucionado significativamente, siempre con el objetivo de proporcionar un servicio de calidad a sus pacientes.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 9,
    date: '18 septiembre, 2024',
    title: 'Solimat incorpora equipamiento innovador en sus servicios de fisioterapia: la bomba diamagnética',
    image: noticiaDiamagnetica,
    excerpt:
      'Toledo, 3 de junio de 2024.- Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, en su constante búsqueda por mejorar la calidad de vida de sus pacientes, ha incorporado al servicio de fisioterapia la CTU Mega 20, más conocida como bomba diamagnética.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 10,
    date: '18 septiembre, 2024',
    title: 'Solimat organiza el primer curso de rodilla para la zona centro con planificación 3D',
    image: noticiaRodilla3d,
    excerpt:
      'Se ha celebrado en el Hospital Laboral de la mutua, el Hospital San José. Toledo, 21 de mayo de 2024.- Solimat, Mutua Colaboradora con la Seguridad Social Nº72, dentro de su plan de formación e investigación, ha organizado el primer curso básico de osteotomía de rodilla dirigido a Especialistas en Cirugía.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 11,
    date: '18 septiembre, 2024',
    title: 'Solimat calcula su Huella de Carbono',
    image: noticiaHuella,
    excerpt:
      'Ha procedido a inscribirse en el Registro de huella de carbono, compensación y proyectos de absorción de CO2 del Ministerio de Transición Ecológico y el Reto Demográfico. Toledo, 2 de mayo de 2024.- Solimat, fiel a su compromiso social y ambiental, ha cuantificado, por primera vez, su huella de carbono.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 12,
    date: '18 septiembre, 2024',
    title: 'La mutua Solimat celebra su aniversario',
    image: noticiaAniversario,
    excerpt:
      'El 16 de abril del 1933 nació esta mutua con el fin de velar por la salud de sus trabajadores protegidos. Hoy día, esa misma esencia continúa vigente en la entidad. Toledo, 15 de abril de 2024.- Mañana 16 de abril, Solimat cumple 91 años.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 13,
    date: '18 septiembre, 2024',
    title: 'Los pacientes de Solimat califican a la mutua con un sobresaliente',
    image: noticiaSobresaliente,
    excerpt:
      'Así lo han reflejado las encuestas de satisfacción que se han llevado a cabo, a lo largo del año 2023, en todos sus centros asistenciales y en su hospital laboral. Toledo, 11 de marzo de 2024.- Con el fin de conocer la experiencia que tienen los usuarios en los centros.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 14,
    date: '17 septiembre, 2024',
    title: 'Solimat entrega 300 kilos de alimentos a Cáritas Diocesana',
    image: noticiaCaritas,
    excerpt:
      'Los alimentos han sido donados por los propios empleados de la mutua y por pacientes que acuden al Hospital San José. Toledo, 26 de diciembre de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social nº 72, fiel a su compromiso de colaborar con aquellas iniciativas que ayuden a diversas causas.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 15,
    date: '1 febrero, 2024',
    title:
      'Solimat se suma a la lucha contra la ELA, colaborando con la Carrera Solidaria de la Fundación Eurocaja Rural',
    image: noticiaEla,
    excerpt:
      'Toledo, 1 de octubre de 2023.- Solimat, fiel a su compromiso de colaborar con aquellas iniciativas que ayuden a diversas causas sociales, se ha unido a la lucha contra la ELA, colaborando con la Carrera Solidaria de la Fundación Eurocaja Rural, celebrada hoy en Toledo.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 16,
    date: '1 febrero, 2024',
    title: 'Solimat lleva a cabo el XII Concurso de Christmas Navideños para felicitar la Navidad',
    image: noticiaChristmas,
    excerpt:
      'Toledo, 20 de diciembre de 2023.- Solimat, con el objetivo de promover la participación social de los familiares de todo el personal de la entidad y poder seleccionar las felicitaciones que están siendo la imagen de la Navidad de la mutua, ha llevado a cabo el XII Concurso de Felicitaciones.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 17,
    date: '1 febrero, 2024',
    title: 'La mutua Solimat recibe el XV Premio «Talavera en Igualdad Empresa»',
    image: noticiaIgualdad,
    excerpt:
      'Toledo, 14 de diciembre de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social nº 72, ha recibido esta mañana el XV Premio «Talavera en Igualdad Empresa». Con este premio, el Ayuntamiento de Talavera de la Reina y su Centro de la Mujer reconocen el compromiso de la mutua con la igualdad.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 18,
    date: '24 octubre, 2023',
    title: 'Solimat se suma a la conmemoración del Día Internacional de la Mujer',
    image: noticiaMujerFachada,
    excerpt:
      'Iluminando la fachada del Hospital San José y dando difusión de este día a través de sus canales de comunicación. Toledo, 8 de marzo de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social nº 72, se suma a la conmemoración del Día Internacional de la Mujer iluminando la fachada del Hospital San José.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 19,
    date: '24 octubre, 2023',
    title: 'Solimat contribuye a la mejora de la Seguridad Vial en las empresas de la región',
    image: noticiaVial,
    excerpt:
      'Toledo, 20 de junio 2023.- Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, ha contribuido, con su experiencia, en la Jornada organizada por CECAM «Gestión de la Seguridad Vial y Movilidad Sostenible en Empresas», celebrada en Toledo.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 20,
    date: '24 octubre, 2023',
    title:
      'La mutua Solimat contribuye al sostenimiento de la Seguridad Social ingresando cerca de 12 millones de euros',
    image: noticia12millones,
    excerpt:
      'Toledo, 6 de julio de 2023.- El Laberinto del Rey ha sido el lugar escogido para celebrar la Junta General Ordinaria de la mutua, donde se han presentado los resultados económicos y los datos más relevantes del ejercicio pasado, y se ha resaltado los 90 años de historia de la entidad.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 21,
    date: '24 octubre, 2023',
    title:
      'Solimat colabora con Fedeto para dar a conocer las actuaciones que se deben aplicar en el entorno laboral ante las altas temperaturas',
    image: noticiaFedeto,
    excerpt:
      'Toledo, 20 de julio de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, ha participado en la Jornada de Fedeto «Cómo protegernos ante altas temperaturas», organizada por el área de Prevención.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 22,
    date: '16 febrero, 2023',
    title: 'Solimat se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo',
    image: noticiaActuemos,
    excerpt:
      'Toledo, 28 de abril de 2022.– Solimat, mutua comprometida con la prevención, se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo, que este año se celebra bajo el lema «Actuar juntos para construir una cultura de seguridad y salud positiva».',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 23,
    date: '16 febrero, 2023',
    title: 'La Junta General de Solimat aprueba por unanimidad la Gestión de la Mutua',
    image: noticiaJuntaAprueba,
    excerpt:
      'Toledo, 14 de julio de 2022.– Solimat ha celebrado su Junta General Ordinaria donde ha presentado sus resultados económicos y se han expuesto los datos más relevantes del ejercicio pasado. Previo a su comienzo, se ha llevado a cabo un homenaje a su Presidente de Honor, José Luis García Paniagua.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
  {
    id: 24,
    date: '1 febrero, 2023',
    title: 'Solimat se suma a la conmemoración del Día Mundial contra el Cáncer de Mama',
    image: noticiaCancerMama,
    excerpt:
      'Toledo, 18 de octubre de 2022.– Iluminando de rosa la fachada de su Hospital como símbolo de la lucha contra esta enfermedad. Cada año, el 19 de octubre, se celebra el Día Mundial contra el Cáncer de Mama como recordatorio del compromiso de toda la sociedad en la lucha contra la enfermedad.',
    url: 'https://azrwpcorpo-93d8cef299-eeebcrg6dgb3f4b9.a03.azurefd.net/noticias',
  },
];

export const getNoticiaById = (id: number): Noticia | undefined =>
  noticias.find((noticia) => noticia.id === id);

/**
 * Extractos tal y como aparecen en el listado (design-refs/Noticias.dc.html).
 * Son más largos que los de la ficha de detalle y van truncados con "…", por eso
 * se guardan aparte en lugar de sustituir a `excerpt`: ambas versiones son literales
 * del diseño y cada página usa la suya.
 */
const EXCERPTS_LISTADO: Record<number, string> = {
  1: 'Solimat, Mutua Colaboradora con la Seguridad Social nº72, en su compromiso con la salud y el bienestar de las personas, ha puesto a disposición de la Asociación Española Contra el Cáncer (AECC) las instalaciones de su Hospital San José, para la instalación de una mesa informativa que tiene como objetivo…',
  2: 'Solimat, mutua comprometida con la prevención, se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo. Muestra de ello es su apoyo a la campaña de cada año y su divulgación a través de todos sus canales de comunicación. Este Día Mundial, que se…',
  3: 'El Hospital Solimat refuerza su compromiso con la calidad y el bienestar de sus usuarios y se consolida como referente en el ámbito de la salud laboral en Castilla-La Mancha, gracias a la obtención de la certificación ISO 9001, uno de los más altos estándares internacionales en gestión de la…',
  4: 'Toledo, 25 de marzo de 2025.- Solimat, Mutua Colaboradora con la Seguridad Social Nº72, ha renovado la certificación efr alcanzando la categoría B Empresa Proactiva en conciliación. Se trata de una certificación promovida por Fundación Másfamilia y que, en este caso, ha sido auditada por AENOR, entidad líder en generación…',
  5: 'En el marco del Día Internacional de la Mujer, Solimat, Mutua Colaboradora con la Seguridad Social Nº72, pone en valor el equilibrio de género en su equipo, destacando que las mujeres representan el 58,33% de la plantilla. Este dato refleja el compromiso de la mutua por promover un entorno de…',
  6: 'La Quinta de Amando ha sido el lugar escogido para celebrar, hoy, la Junta General Ordinaria de la mutua, donde se han presentado los resultados económicos y los datos más relevantes del ejercicio 2023. Toledo, 3 de julio 2024.- Solimat, Mutua Colaboradora con la Seguridad Social nº72, gracias a su…',
  7: 'Organizadas por Nieves Moreno Abogados-CE Consulting, se han celebrado hoy en el Salón de Actos de la Diputación Provincial de Albacete. Albacete, 27 de junio de 2024.- Solimat, Mutua Colaboradora con la Seguridad Social nº72, ha participado en las II Jornadas Empresariales organizadas por Nieves Moreno Abogados-CE Consulting…',
  8: 'Toledo, 23 de junio de 2024.- El Hospital de Solimat celebra, este 24 de junio, su 30º Aniversario. A lo largo de estas tres décadas, este centro hospitalario ha evolucionado significativamente, siempre con el objetivo de proporcionar un servicio de calidad a sus pacientes. En este sentido, se han ido…',
  9: 'Toledo, 3 de junio de 2024.- Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, en su constante búsqueda por mejorar la calidad de vida de sus pacientes, ha incorporado al servicio de fisioterapia la CTU Mega 20, más conocida como bomba diamagnética. Se trata de un instrumento innovador para…',
  10: 'Se ha celebrado en el Hospital Laboral de la mutua, el Hospital San José. Toledo, 21 de mayo de 2024.- Solimat, Mutua Colaboradora con la Seguridad Social Nº72, dentro de su plan de formación e investigación, ha organizado el primer curso básico de osteotomía de rodilla dirigido a Especialistas en Cirugía…',
  11: 'Ha procedido a inscribirse en el Registro de huella de carbono, compensación y proyectos de absorción de CO2 del Ministerio de Transición Ecológico y el Reto Demográfico. Toledo, 2 de mayo de 2024.- Solimat, fiel a su compromiso social y ambiental, ha cuantificado, por primera vez, su huella de carbono…',
  12: 'El 16 de abril del 1933 nació esta mutua con el fin de velar por la salud de sus trabajadores protegidos. Hoy día, esa misma esencia continúa vigente en la entidad. Toledo, 15 de abril de 2024.- Mañana 16 de abril, Solimat, Mutua Colaboradora con la Seguridad Social nº72, cumple 91…',
  13: 'Así lo han reflejado las encuestas de satisfacción que se han llevado a cabo, a lo largo del año 2023, en todos sus centros asistenciales y en su hospital laboral. Toledo, 11 de marzo de 2024.- Con el fin de conocer la experiencia que tienen los usuarios en los centros…',
  14: 'Los alimentos han sido donados por los propios empleados de la mutua y por pacientes que acuden al Hospital San José. Toledo, 26 de diciembre de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social nº 72, fiel a su compromiso de colaborar con aquellas iniciativas que ayuden a diversas causas…',
  15: 'Toledo, 1 de octubre de 2023.- Solimat, fiel a su compromiso de colaborar con aquellas iniciativas que ayuden a diversas causas sociales, se ha unido a la lucha contra la ELA, colaborando con la Carrera Solidaria de la Fundación Eurocaja Rural, celebrada hoy en Toledo. Bajo el lema «Corremos contra…»',
  16: 'Toledo, 20 de diciembre de 2023.- Solimat, con el objetivo de promover la participación social de los familiares de todo el personal de la entidad y poder seleccionar las felicitaciones que están siendo la imagen de la Navidad de la mutua, ha llevado a cabo el XII Concurso de Felicitaciones…',
  17: 'Toledo, 14 de diciembre de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social nº 72, ha recibido esta mañana el XV Premio «Talavera en Igualdad Empresa». Con este premio, el Ayuntamiento de Talavera de la Reina y su Centro de la Mujer reconocen el compromiso de la mutua con la…',
  18: 'Iluminando la fachada del Hospital San José y dando difusión de este día a través de sus canales de comunicación. Toledo, 8 de marzo de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social nº 72, se suma a la conmemoración del Día Internacional de la Mujer iluminando la fachada del…',
  19: 'Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, ha participado en la Jornada -organizada por CECAM- «Gestión de la Seguridad Vial y Movilidad Sostenible en Empresas», celebrada hoy en Toledo. Toledo, 20 de junio 2023.- Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, ha contribuido, con su experiencia,…',
  20: 'El Laberinto del Rey ha sido el lugar escogido para celebrar, hoy, la Junta General Ordinaria de la mutua, donde se han presentado los resultados económicos y los datos más relevantes del ejercicio pasado, y, además, se ha resaltado los 90 años de historia de la entidad. Toledo, 6 de…',
  21: 'Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, ha participado en la Jornada de Fedeto «Cómo protegernos ante altas temperaturas». Toledo, 20 de julio de 2023.- Solimat, Mutua Colaboradora con la Seguridad Social Nº 72, ha participado en la Jornada «Cómo protegernos ante altas temperaturas», organizada por el área…',
  22: 'Hoy, 28 de abril, se celebra este Día Mundial bajo el lema: «Actuar juntos para construir una cultura de seguridad y salud positiva». Toledo, 28 de abril de 2022.– Solimat, mutua comprometida con la prevención, se suma a la conmemoración del Día Mundial de la Seguridad y Salud en el Trabajo.…',
  23: 'Solimat ha celebrado su Junta General Ordinaria donde ha presentado sus resultados económicos y se han expuesto los datos más relevantes del ejercicio pasado. Previo a su comienzo, se ha llevado a cabo un homenaje a su Presidente de Honor, José Luis García Paniagua. Toledo, 14 de julio de 2022.–…',
  24: 'Iluminando de rosa la fachada de su Hospital como símbolo de la lucha contra esta enfermedad. Toledo, 18 de octubre de 2022.– Cada año, el 19 de octubre, se celebra el Día Mundial contra el Cáncer de Mama como recordatorio del compromiso de toda la sociedad en la lucha contra…',
};

export const getExcerptListado = (noticia: Pick<NoticiaPublica, 'id' | 'excerpt'>): string => {
  if (typeof noticia.id === 'number') {
    return EXCERPTS_LISTADO[noticia.id] ?? noticia.excerpt;
  }

  return noticia.excerpt;
};
