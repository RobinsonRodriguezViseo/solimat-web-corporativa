import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import styles from './AvisoLegalPage.module.css';

export default function AvisoLegalPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Aviso legal' }]}
        title="Aviso legal"
        image={null}
      />

      <Container as="section" className={styles.section}>
        <div className={styles.inner}>
          <article className={styles.content}>
            <p>
              El presente aviso e información legales (en adelante, el «AVISO LEGAL») regula el uso del
              servicio del portal de Internet www.solimat.com (en adelante también denominado «el Portal»)
              que SOLIMAT MATEP Seg. Social nº 72 pone a disposición de los Usuarios.
            </p>

            <p>
              La utilización del Portal atribuye la condición de Usuario del Portal (en adelante, el
              «Usuario») e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones
              incluidas en este Aviso Legal en la versión publicada por SOLIMAT MATEP Seg. Social nº 72 en el
              momento mismo en que el Usuario acceda al Portal.
            </p>

            <p>
              En consecuencia, el Usuario debe leer atentamente el presente Aviso Legal en cada una de las
              ocasiones en que se proponga utilizar el Portal, ya que aquél puede sufrir modificaciones.
            </p>

            <p>
              La utilización de ciertos servicios ofrecidos a los Usuarios a través del Portal se encuentra
              sometida a condiciones particulares propias, ya sea bases de concursos que sean publicados u
              otras condiciones que, según los casos, sustituyen, completan y/o modifican el presente Aviso
              Legal. Por lo tanto, con anterioridad a la utilización de dichos servicios, el Usuario también
              ha de leer atentamente las correspondientes Condiciones Particulares.
            </p>

            <p>
              Asimismo, la utilización del Portal se encuentra sometida igualmente a todos los avisos,
              reglamentos de uso e instrucciones, puestos en conocimiento del Usuario por SOLIMAT MATEP Seg.
              Social nº 72 que sustituyen, completan y/o modifican el presente Aviso Legal.
            </p>
          </article>
        </div>
      </Container>
    </>
  );
}
