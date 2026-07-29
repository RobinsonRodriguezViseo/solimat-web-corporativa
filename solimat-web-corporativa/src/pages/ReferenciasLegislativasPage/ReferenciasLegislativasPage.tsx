import { useMemo } from 'react';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import YearGroup from '../../components/referenciasLegislativas/YearGroup';
import YearNav, { type YearNavItem } from '../../components/referenciasLegislativas/YearNav';
import { REFERENCIAS_LEGISLATIVAS } from '../../data/referenciasLegislativas';
import styles from './ReferenciasLegislativasPage.module.css';

export default function ReferenciasLegislativasPage() {
  const yearNavItems = useMemo<YearNavItem[]>(
    () => REFERENCIAS_LEGISLATIVAS.map((group) => ({ id: group.id, year: group.year })),
    [],
  );

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Referencias legislativas' }]}
        title="Referencias legislativas"
        subtitle="Ponemos a tu disposición la legislación que tiene relación con nuestra actividad."
        image={null}
      />

      <Container as="section" className={styles.navSection}>
        <YearNav items={yearNavItems} />
      </Container>

      <Container as="section" className={styles.listSection}>
        <div className={styles.inner}>
          {REFERENCIAS_LEGISLATIVAS.map((group) => (
            <YearGroup key={group.id} group={group} />
          ))}
        </div>
      </Container>
    </>
  );
}
