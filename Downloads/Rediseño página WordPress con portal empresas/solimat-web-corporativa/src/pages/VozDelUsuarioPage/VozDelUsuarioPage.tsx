import ChannelCard from '../../components/vozDelUsuario/ChannelCard';
import CommitmentsCard from '../../components/vozDelUsuario/CommitmentsCard';
import IntroCard from '../../components/vozDelUsuario/IntroCard';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import styles from './VozDelUsuarioPage.module.css';

export default function VozDelUsuarioPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Voz del Usuario' }]}
        title="Voz del Usuario"
        subtitle="Nuestro compromiso con las personas nos ha llevado a poner en el centro de nuestra gestión, atención y servicio a nuestros empleados y usuarios."
        image={null}
      />

      <Container as="section" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.intro}>
            <IntroCard />
          </div>

          <div className={styles.grid}>
            <ChannelCard
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              }
              text="Encuestas de satisfacción que encontrarás en nuestros centros."
            />
            <ChannelCard
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path d="M14 2v6h6M9 13h6M9 17h4" />
                </svg>
              }
              text="Formularios de Sugerencias, Agradecimientos y Reclamaciones disponibles en nuestros centros."
            />
            <ChannelCard
              wide
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              }
              text="La Oficina Virtual de Reclamaciones de la Dirección General de Ordenación de la Seguridad Social."
              href="https://www.ovrmatepss.es/virtual/"
            />
          </div>

          <CommitmentsCard />
        </div>
      </Container>
    </>
  );
}
