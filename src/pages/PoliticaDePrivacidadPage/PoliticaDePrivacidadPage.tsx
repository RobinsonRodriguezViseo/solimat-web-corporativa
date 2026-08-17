import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import styles from './PoliticaDePrivacidadPage.module.css';

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Política de privacidad' }]}
        title="Política de Privacidad"
        image={null}
      />

      <Container as="section" className={styles.section}>
        <div className={styles.inner}>
          <article className={styles.content}>
            <p>
              La Política de Privacidad forma parte de las Condiciones Generales que rigen la presente Web.
            </p>

            <h2>¿Quién es el responsable del tratamiento de tus datos?</h2>
            <p>
              <strong>SOLIMAT MUTUA COLABORADORA CON LA SEGURIDAD SOCIAL Nº 72.</strong>
            </p>
            <div className={styles.contactInfo}>
              <strong>Domicilio:</strong> CL. BERNA, 1 C.P. 45003 Toledo.
              <br />
              <strong>CIF:</strong> G45032844
              <br />
              <strong>Tfno:</strong> 925 28 31 86
              <br />
              <strong>Datos de contacto del Delegado de Protección de Datos:</strong>
              <br />
              <strong>Mail:</strong> lopd@solimat.com
            </div>
            <p>
              Puedes dirigirte de cualquier forma para comunicarte con nosotros. Nos reservamos el derecho a
              modificar o adaptar la presente Política de Privacidad en cualquier momento. Te recomendamos revisar
              la misma, y si te has registrado y accedes a tu cuenta o perfil, se te informará de las
              modificaciones.
            </p>

            <h3>Contactos de la web o del correo electrónico</h3>

            <h2>¿Qué datos recopilamos a través de la Web?</h2>
            <p>
              Podemos tratar tu IP, qué sistema operativo o navegador usas, e incluso la duración de tu visita, de
              forma anónima. Si nos facilitas datos en el formulario de contacto, te identificarás para poder
              contactar contigo, en caso de que sea necesario.
            </p>

            <ul className={styles.list}>
              <li>Contestar a tus consultas, solicitudes o peticiones.</li>
              <li>Gestionar el servicio solicitado, contestar tu solicitud, o tramitar tu petición.</li>
              <li>Información por medios electrónicos, que versen sobre tu solicitud.</li>
              <li>Información de eventos por medios electrónicos, siempre que exista autorización expresa.</li>
              <li>Realizar análisis y mejoras en la Web, sobre nuestros servicios.</li>
            </ul>

            <p>
              <strong>La aceptación y consentimiento del interesado:</strong> En aquellos casos donde para realizar
              una solicitud sea necesario cumplimentar un formulario y hacer un «click» en el botón de enviar, la
              realización del mismo implicará necesariamente que ha sido informado y ha otorgado expresamente su
              consentimiento al contenido de la cláusula anexada a dicho formulario o aceptación de la política de
              privacidad.
            </p>

            <p>
              Todos nuestros formularios cuentan con el símbolo * en los datos obligatorios. Si no facilitas esos
              campos, o no marcas el checkbox de aceptación de la política de privacidad, no se permitirá el envío de
              la información.
            </p>

            <h3>Contactos redes sociales</h3>

            <h2>¿Qué datos utilizamos de las redes sociales?</h2>
            <ul className={styles.list}>
              <li>Contestar a tus consultas, solicitudes o peticiones.</li>
              <li>Gestionar el servicio solicitado, contestar tu solicitud, o tramitar tu petición.</li>
              <li>Relacionarnos contigo y crear una comunidad de seguidores.</li>
            </ul>

            <p>
              La aceptación de una relación contractual en el entorno de la red social que corresponda, y conforme a
              sus políticas de Privacidad.
            </p>

            <h2>¿Durante cuánto tiempo vamos a mantener los datos personales?</h2>
            <p>
              Sólo podemos consultar o dar de baja tus datos de forma restringida al tener un perfil específico. Los
              trataremos tanto tiempo como tú nos dejes siguiéndonos, siendo amigos o dándole a "me gusta", "seguir"
              o botones similares. Cualquier rectificación de tus datos o restricción de información o de publicaciones
              debes realizarla a través de la configuración de tu perfil o usuario en la propia red social.
            </p>

            <h3>Demandantes de empleo</h3>

            <h2>¿Qué datos utilizamos de tu CV?</h2>
            <ul className={styles.list}>
              <li>Organización de procesos de selección para la contratación de empleados.</li>
              <li>Citarte para entrevistas de trabajo y evaluar tu candidatura.</li>
            </ul>

            <p>
              Asimismo, te comunicamos que transcurrido un año desde la recepción de tu currículum vitae, procederemos
              a su destrucción segura. La base legal es tu consentimiento inequívoco, al enviarnos tu CV.
            </p>

            <h3>Condiciones generales</h3>

            <h2>¿Incluimos datos personales de terceras personas?</h2>
            <p>
              No, como norma general sólo tratamos los datos que nos facilitan los titulares. Si nos aportas datos de
              terceros, deberás con carácter previo, informar y solicitar su consentimiento a dichas personas, o de lo
              contrario nos eximes de cualquier responsabilidad por el incumplimiento de este requisito.
            </p>

            <h2>¿Y datos de menores?</h2>
            <p>
              No tratamos datos de menores de 14 años. Por tanto, absténgase de facilitarlos si no tiene esa edad o, en
              su caso, de facilitar datos de terceros que no tengan la citada edad. SOLIMAT MUTUA COLABORADORA CON LA
              SEGURIDAD SOCIAL Nº 72 se exime de cualquier responsabilidad por el incumplimiento de esta previsión.
            </p>

            <h2>¿Realizaremos comunicaciones por medios electrónicos?</h2>
            <p>Sólo se realizarán para gestionar tu solicitud, si es uno de los medios de contacto que nos ha facilitado.</p>

            <h2>¿Qué medidas de seguridad aplicamos?</h2>
            <p>
              Puedes estar tranquilo: Hemos adoptado un nivel óptimo de protección de los Datos Personales que
              manejamos, y hemos instalado todos los medios y medidas técnicas a nuestra disposición según el estado de
              la tecnología para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los Datos
              Personales.
            </p>

            <h2>¿A qué destinatarios se comunicarán tus datos?</h2>
            <p>Tus datos no se cederán a terceros, salvo obligación legal.</p>

            <h2>¿Qué Derechos tienes?</h2>
            <ul className={styles.list}>
              <li>A saber si estamos tratando tus datos o no.</li>
              <li>A acceder a tus datos personales.</li>
              <li>A solicitar la rectificación de tus datos si son inexactos.</li>
              <li>
                A solicitar la supresión de tus datos si ya no son necesarios para los fines para los que fueron
                recogidos o si nos retiras el consentimiento otorgado.
              </li>
              <li>
                A solicitar la limitación del tratamiento de sus datos, en algunos supuestos, en cuyo caso sólo los
                conservaremos de acuerdo con la normativa vigente.
              </li>
              <li>
                A portar tus datos, que te serán facilitados en un formato estructurado, de uso común o lectura
                mecánica. Si lo prefieres, se los podemos enviar al nuevo responsable que nos designes. Sólo es válido
                en determinados supuestos.
              </li>
              <li>
                A presentar una reclamación ante la Agencia Española de Protección de Datos o autoridad de control
                competente, si crees que no te hemos atendido correctamente.
              </li>
              <li>
                A revocar el consentimiento para cualquier tratamiento para el que hayas consentido, en cualquier
                momento. Si modificas algún dato, te agradecemos que nos lo comuniques para mantenerlos actualizados.
              </li>
            </ul>

            <h2>¿Quieres un formulario para el ejercicio de Derechos?</h2>
            <ul className={styles.list}>
              <li>
                Tenemos formularios para el ejercicio de tus derechos, pídenoslos por email o si lo prefieres, puedes
                usar los elaborados por la Agencia Española de Protección de Datos o terceros.
              </li>
              <li>
                Si te representa alguien, debes adjuntarnos copia de su DNI, o que lo firme con su firma electrónica.
              </li>
              <li>
                Los formularios pueden ser presentados presencialmente, enviados por carta o por mail en la dirección
                del Responsable al inicio de este texto.
              </li>
            </ul>

            <h2>¿Cuánto tardamos en contestarte al Ejercicio de Derechos?</h2>
            <p>
              Depende del derecho, pero como máximo en un mes desde tu solicitud, y dos meses si el tema es muy
              complejo y te notificamos que necesitamos más tiempo.
            </p>

            <h2>¿Tratamos cookies?</h2>
            <p>
              Si usamos otro tipo de cookies que no sean las necesarias, podrás consultar la política de cookies en el
              enlace correspondiente desde el inicio de nuestra web.
            </p>

            <h2>¿Durante cuánto tiempo vamos a mantener tus datos personales?</h2>
            <ul className={styles.list}>
              <li>Los datos personales serán mantenidos mientras sigas vinculado con nosotros.</li>
              <li>
                Una vez te desvincules, los datos personales tratados en cada finalidad se mantendrán durante los plazos
                legalmente previstos, incluido el plazo en el que un juez o tribunal los pueda requerir atendiendo al
                plazo de prescripción de acciones judiciales.
              </li>
              <li>
                Los datos tratados se mantendrán en tanto no expiren los plazos legales aludidos anteriormente, si
                hubiera obligación legal de mantenimiento, o de no existir ese plazo legal, hasta que el interesado
                solicite su supresión o revoque el consentimiento otorgado.
              </li>
            </ul>
          </article>
        </div>
      </Container>
    </>
  );
}
