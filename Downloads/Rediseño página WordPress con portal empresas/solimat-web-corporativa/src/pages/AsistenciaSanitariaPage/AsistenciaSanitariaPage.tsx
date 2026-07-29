import { useMemo } from 'react';
import HighlightCard from '../../components/asistenciaSanitaria/HighlightCard';
import HospitalContact from '../../components/asistenciaSanitaria/HospitalContact';
import PillarCard from '../../components/asistenciaSanitaria/PillarCard';
import UnitCard from '../../components/asistenciaSanitaria/UnitCard';
import AccentCta from '../../components/servicios/AccentCta';
import PageIndex from '../../components/servicios/PageIndex';
import Prose from '../../components/servicios/Prose';
import RichContent from '../../components/servicios/RichContent';
import SectionTitle from '../../components/servicios/SectionTitle';
import SplitPanel from '../../components/servicios/SplitPanel';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import {
  ASISTENCIA_24H_BLOCKS,
  ASISTENCIA_24H_LEAD,
  HIGHLIGHTS,
  HOSPITAL_CONTACT,
  HOSPITAL_LEAD,
  HOSPITAL_UNITS,
  INTRO_LEAD,
  PILLARS,
  RED_CENTROS_BLOCKS,
  RED_CENTROS_LEAD,
  RED_CENTROS_SERVICES,
  SECTIONS,
} from '../../data/asistenciaSanitaria';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import asistencia1 from '../../images/asistencia-sanitaria-1.jpg';
import asistencia2 from '../../images/asistencia-sanitaria-2.jpg';
import asistencia24h from '../../images/asistencia-sanitaria-24-horas.jpg';
import asistencia3 from '../../images/asistencia-sanitaria-3.jpg';
import hospitalSanJose from '../../images/hospital-san-jose.jpg';
import derechosDeberesPdf from '../../pdfs/derechos-deberes.pdf';
import styles from './AsistenciaSanitariaPage.module.css';

const GALLERY = [asistencia1, asistencia2, asistencia3];

export default function AsistenciaSanitariaPage() {
  const sectionIds = useMemo(() => SECTIONS.map((section) => section.id), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <PageHero
        image={asistencia1}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Servicios' }, { label: 'Asistencia Sanitaria' }]}
        title="Asistencia Sanitaria"
        subtitle="Atención cercana y personalizada, profesionales especializados y tecnología de última generación al servicio de tu recuperación."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={SECTIONS} activeId={activeId}>
            <div className={styles.urgencias}>
              <div className={styles.urgenciasLabel}>Urgencias 24h</div>
              <a className={styles.urgenciasPhone} href="tel:900111072">
                900 111 072
              </a>
              <p className={styles.urgenciasNote}>Línea gratuita, 365 días del año.</p>
            </div>
          </PageIndex>

          <div className={styles.content}>
            <div className={styles.intro}>
              <p className={styles.lead}>{INTRO_LEAD}</p>
              <div className={styles.introGrid}>
                {HIGHLIGHTS.map((highlight) => (
                  <HighlightCard key={highlight.title} title={highlight.title} items={highlight.items} />
                ))}
              </div>
            </div>

            <div className={styles.gallery}>
              {GALLERY.map((image) => (
                <img key={image} className={styles.galleryImage} src={image} alt="Asistencia Sanitaria" />
              ))}
            </div>

            <section className={styles.section} id="modelo-asistencial">
              <SectionTitle title="Nuestro Modelo Asistencial" withRule />
              <p className={styles.sectionLead}>Los pilares de nuestro Modelo Asistencial son:</p>
              <div className={styles.pillars}>
                {PILLARS.map((pillar) => (
                  <PillarCard key={pillar.text} icon={pillar.icon} text={pillar.text} />
                ))}
              </div>
              <AccentCta href={derechosDeberesPdf} icon="file" external>
                Aquí puedes conocer tus Derechos y Deberes como paciente
              </AccentCta>
            </section>

            <section className={styles.section} id="asistencia-24h">
              <SectionTitle title="Asistencia Sanitaria 24 horas" withRule />
              <SplitPanel image={asistencia24h} imageAlt="Asistencia Sanitaria 24 horas">
                <p className={styles.panelLead}>{ASISTENCIA_24H_LEAD}</p>
                <Prose>
                  <RichContent blocks={ASISTENCIA_24H_BLOCKS} />
                </Prose>
              </SplitPanel>
            </section>

            <section className={styles.section} id="hospital-san-jose">
              <SectionTitle title="Hospital San José" withRule />
              <p className={styles.hospitalLead}>{HOSPITAL_LEAD}</p>
              <div className={styles.hospitalGrid}>
                <img className={styles.hospitalImage} src={hospitalSanJose} alt="Hospital San José" />
                <HospitalContact {...HOSPITAL_CONTACT} />
              </div>
              <h3 className={styles.h3}>Unidades del Hospital</h3>
              <div className={styles.units}>
                {HOSPITAL_UNITS.map((unit) => (
                  <UnitCard key={unit.title} {...unit} />
                ))}
              </div>
            </section>

            <section className={`${styles.section} ${styles.sectionLast}`} id="red-de-centros">
              <SectionTitle title="Red de Centros" withRule />
              <p className={styles.redCentrosLead}>{RED_CENTROS_LEAD}</p>
              <Prose className={styles.redCentrosIntro}>
                <RichContent blocks={RED_CENTROS_BLOCKS} />
              </Prose>
              <div className={styles.units}>
                {RED_CENTROS_SERVICES.map((service) => (
                  <UnitCard key={service.title} {...service} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
