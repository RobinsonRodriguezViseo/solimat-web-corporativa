import { useMemo } from 'react';
import CanalEticoForm from '../../components/canalEtico/CanalEticoForm';
import ContentGroup from '../../components/canalEtico/ContentGroup';
import PageIndex from '../../components/canalEtico/PageIndex';
import SectionTitle from '../../components/canalEtico/SectionTitle';
import UsageNotice from '../../components/canalEtico/UsageNotice';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import { CANAL_ETICO_GROUPS, CANAL_ETICO_INDEX } from '../../data/canalEtico';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import styles from './CanalEticoPage.module.css';

export default function CanalEticoPage() {
  const sectionIds = useMemo(() => CANAL_ETICO_INDEX.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Canal Ético y de Información' }]}
        title="Canal Ético y de Información"
        subtitle="Bienvenido al Canal Ético y de Información de SOLIMAT. De acuerdo con nuestra Cultura de Cumplimiento, ponemos a su disposición este Canal, para que pueda comunicarnos conductas irregulares o contrarias a la normativa vigente y/o a nuestros principios y valores."
        image={null}
      />

      <Container as="section" className={styles.section}>
        <div className={styles.layout}>
          <aside className={styles.index}>
            <PageIndex items={CANAL_ETICO_INDEX} activeId={activeId} />
          </aside>

          <div className={styles.content}>
            <UsageNotice />

            {CANAL_ETICO_GROUPS.map((group) => (
              <ContentGroup key={group.id} group={group} />
            ))}

            <section className={styles.accessSection} id="accede-al-canal">
              <SectionTitle title="Accede al Canal" />
              <div className={styles.accessCard}>
                <p className={styles.accessIntro}>
                  A través de este formulario puedes enviar una comunicación identificándote o de forma anónima:
                </p>
                <CanalEticoForm />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
