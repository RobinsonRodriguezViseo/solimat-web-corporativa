import FeaturedReport from '../../components/nuestrosDatos/FeaturedReport';
import ReportsByYear from '../../components/nuestrosDatos/ReportsByYear';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import { DESTACADOS_2024, INFORMES_POR_ANIO } from '../../data/informes';
import portadaGobierno from '../../images/portada-gobierno-corporativo-2024.jpg';
import portadaMemoria from '../../images/portada-memoria-sostenibilidad-2024.jpg';
import styles from './NuestrosDatosPage.module.css';

export default function NuestrosDatosPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: 'Nuestros datos' }]}
        title="Nuestros datos"
        subtitle="Transparencia y rendición de cuentas: consulta y descarga nuestros informes de gobierno corporativo y memorias de sostenibilidad."
      />

      <Container as="section" className={styles.introSection}>
        <div className={styles.intro}>
          <div className={styles.eyebrow}>Informe de Gestión y Memoria de Sostenibilidad</div>
          <p className={styles.introText}>
            En Solimat, cada año, elaboramos nuestro Informe de Gestión y Memoria de Sostenibilidad. En él quedan
            reflejados todos los aspectos de la entidad en relación con su dimensión social y gestión, económica y
            medioambiental, así como los datos generales de la mutua, dando cumplimiento, así, a la Ley 2/2011, de 4
            de marzo, de Economía Sostenible, que obliga a las Mutuas Colaboradoras con la Seguridad Social a
            elaborar y presentar Memorias Anuales de Sostenibilidad.
          </p>
        </div>
      </Container>

      <Container as="section" className={styles.featuredSection}>
        <div className={styles.featuredHeader}>
          <h2 className={styles.h2}>Últimas publicaciones</h2>
          <span className={styles.yearBadge}>2024</span>
        </div>
        <div className={styles.featuredGrid}>
          <FeaturedReport
            cover={portadaGobierno}
            eyebrow="Ejercicio 2024"
            title="Informe de Gobierno Corporativo"
            pdf={DESTACADOS_2024.gobiernoCorporativo}
          />
          <FeaturedReport
            cover={portadaMemoria}
            eyebrow="Ejercicio 2024"
            title="Informe de Gestión y Memoria de Sostenibilidad"
            pdf={DESTACADOS_2024.memoriaSostenibilidad}
          />
        </div>
      </Container>

      <Container as="section" className={styles.historySection}>
        <h2 className={styles.historyHeading}>Todos los informes</h2>
        <ReportsByYear grupos={INFORMES_POR_ANIO} />
      </Container>
    </>
  );
}
