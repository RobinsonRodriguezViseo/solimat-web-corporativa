import { useMemo } from 'react';
import DownloadGrid from '../../components/promocionDeLaPrevencion/DownloadGrid';
import FeatureCard from '../../components/promocionDeLaPrevencion/FeatureCard';
import OrgGroup from '../../components/promocionDeLaPrevencion/OrgGroup';
import AccentCta from '../../components/servicios/AccentCta';
import PageIndex from '../../components/servicios/PageIndex';
import Prose from '../../components/servicios/Prose';
import RichContent from '../../components/servicios/RichContent';
import SectionTitle from '../../components/servicios/SectionTitle';
import SplitPanel from '../../components/servicios/SplitPanel';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import {
  BUENAS_PRACTICAS_BLOCKS,
  CANAL_CONSULTAS_TEXT,
  INTRO_BLOCKS,
  ORGANISMOS_AUTONOMICOS,
  ORGANISMOS_ESTATALES,
  ORGANISMOS_ESTATALES_LINKS,
  ORGANISMOS_INTERNACIONALES,
  PLAN_GENERAL_BLOCKS,
  PLAN_SINIESTRALIDAD_BLOCKS,
  PREVENCION_10_BLOCKS,
  PREVENCION_10_FEATURES,
  PUBLICACIONES,
  PUBLICACIONES_FOOTNOTE,
  SECTIONS,
} from '../../data/promocionDeLaPrevencion';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import canalConsultasImage from '../../images/canal-consultas.jpg';
import buenasPracticasImage from '../../images/divulgacion-buenas-practicas.jpg';
import planSiniestralidadImage from '../../images/plan-de-reduccion-de-la-siniestralidad.jpg';
import planGeneralImage from '../../images/plan-general-de-actividades-preventivas.jpg';
import prevencion10Image from '../../images/prevencion-10.jpg';
import styles from './PromocionDeLaPrevencionPage.module.css';

export default function PromocionDeLaPrevencionPage() {
  const sectionIds = useMemo(() => SECTIONS.map((section) => section.id), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <PageHero
        image={planGeneralImage}
        breadcrumb={[
          { label: 'Inicio', to: '/' },
          { label: 'Servicios' },
          { label: 'Promoción de la Prevención' },
        ]}
        title="Promoción de la Prevención"
        subtitle="Planes, programas y recursos para reducir los accidentes de trabajo y las enfermedades profesionales en tu empresa."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={SECTIONS} activeId={activeId} />

          <div className={styles.content}>
            <Prose className={styles.intro}>
              <RichContent blocks={INTRO_BLOCKS} />
            </Prose>

            <section className={styles.section} id="plan-general">
              <SectionTitle title="Plan General de Actividades Preventivas" size="md" />
              <SplitPanel
                image={planGeneralImage}
                imageAlt="Plan General de Actividades Preventivas"
                imageMinHeight={340}
              >
                <Prose>
                  <RichContent blocks={PLAN_GENERAL_BLOCKS} />
                </Prose>
              </SplitPanel>
            </section>

            <section className={styles.section} id="plan-siniestralidad">
              <SectionTitle title="Plan de Reducción de la Siniestralidad" size="md" />
              <SplitPanel
                image={planSiniestralidadImage}
                imageAlt="Plan de Reducción de la Siniestralidad"
                imagePosition="left"
                imageMinHeight={340}
              >
                <Prose>
                  <RichContent blocks={PLAN_SINIESTRALIDAD_BLOCKS} />
                </Prose>
              </SplitPanel>
            </section>

            <section className={styles.section} id="buenas-practicas">
              <SectionTitle title="Divulgación de Buenas Prácticas" size="md" />
              <SplitPanel
                image={buenasPracticasImage}
                imageAlt="Divulgación de Buenas Prácticas"
                imageMinHeight={300}
              >
                <Prose>
                  <RichContent blocks={BUENAS_PRACTICAS_BLOCKS} />
                </Prose>
                <AccentCta className={styles.campusCta} href="https://campus.solimat.com/index.php" icon="arrow">
                  Accede a nuestro Campus
                </AccentCta>
              </SplitPanel>
            </section>

            <section className={styles.section} id="prevencion-10">
              <SectionTitle title="Prevención 10" size="md" />
              <div className={styles.card}>
                <SplitPanel image={prevencion10Image} imageAlt="Prevención 10" imageMinHeight={220} bare>
                  <Prose>
                    <RichContent blocks={PREVENCION_10_BLOCKS} />
                  </Prose>
                </SplitPanel>
                <div className={styles.cardFooter}>
                  <div className={styles.featuresTitle}>Está constituido por 4 funcionalidades principales:</div>
                  <div className={styles.features}>
                    {PREVENCION_10_FEATURES.map((feature) => (
                      <FeatureCard key={feature.title} {...feature} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.section} id="publicaciones">
              <SectionTitle title="Códigos de Buenas Prácticas" size="md" />
              <p className={styles.sectionLead}>
                A continuación, ponemos a tu disposición diferentes publicaciones realizadas por Solimat:
              </p>
              {PUBLICACIONES.map((group) => (
                <DownloadGrid key={group.id} id={group.id} title={group.title} items={group.items} />
              ))}
              <Prose>
                <RichContent blocks={PUBLICACIONES_FOOTNOTE} />
              </Prose>
            </section>

            <section className={styles.section} id="canal-consultas">
              <SectionTitle title="Canal de Consultas y Solicitudes" size="md" />
              <SplitPanel
                image={canalConsultasImage}
                imageAlt="Canal de Consultas y Solicitudes"
                imageMinHeight={260}
                contentClassName={styles.canalContent}
              >
                <p className={styles.canalText}>{CANAL_CONSULTAS_TEXT}</p>
                <AccentCta className={styles.canalCta} href="mailto:web@solimat.com" icon="mail" size="lg">
                  web@solimat.com
                </AccentCta>
              </SplitPanel>
            </section>

            <section className={`${styles.section} ${styles.sectionLast}`} id="enlaces-interes">
              <SectionTitle title="Enlaces de Interés" size="md" />
              <OrgGroup title="Organismos autonómicos" organismos={ORGANISMOS_AUTONOMICOS} />
              <OrgGroup title="Organismos estatales" organismos={ORGANISMOS_ESTATALES}>
                <DownloadGrid items={ORGANISMOS_ESTATALES_LINKS} />
              </OrgGroup>
              <OrgGroup title="Organismos internacionales" organismos={ORGANISMOS_INTERNACIONALES} />
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
