import GestorFunctions from '../../components/nuestroEquipo/GestorFunctions';
import GroupHeading from '../../components/nuestroEquipo/GroupHeading';
import TeamCard from '../../components/nuestroEquipo/TeamCard';
import TeamIndex from '../../components/nuestroEquipo/TeamIndex';
import TeamIntro from '../../components/nuestroEquipo/TeamIntro';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import {
  GESTION_MEMBERS,
  GESTOR_FUNCTIONS,
  GESTOR_FUNCTIONS_FOOTNOTE,
  GESTOR_FUNCTIONS_TITLE,
  INDEX_GROUPS,
  INTRO_LEAD,
  INTRO_TEXT,
  SANITARIO_MEMBERS,
  SECTION_IDS,
} from '../../data/nuestroEquipo';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import equipoImage from '../../images/nuestro-equipo.jpg';
import styles from './NuestroEquipoPage.module.css';

export default function NuestroEquipoPage() {
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <>
      <PageHero
        image={equipoImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Servicios' }, { label: 'Nuestro equipo' }]}
        title="Nuestro equipo"
        subtitle="Más de 200 profesionales del ámbito sanitario y de la gestión al servicio de nuestras empresas mutualistas, trabajadores protegidos, autónomos y asesorías laborales."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <TeamIndex groups={INDEX_GROUPS} activeId={activeId} />

          <div className={styles.content}>
            <div className={styles.intro}>
              <TeamIntro lead={INTRO_LEAD} text={INTRO_TEXT} image={equipoImage} imageAlt="Equipo Solimat" />
            </div>

            <GroupHeading id="sanitario" title="Sanitario" />
            {SANITARIO_MEMBERS.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}

            <GroupHeading id="gestion" title="Gestión" />
            {GESTION_MEMBERS.map((member) => (
              <TeamCard
                key={member.id}
                {...member}
                footer={
                  member.id === 'gestores' ? (
                    <GestorFunctions
                      title={GESTOR_FUNCTIONS_TITLE}
                      functions={GESTOR_FUNCTIONS}
                      footnote={GESTOR_FUNCTIONS_FOOTNOTE}
                    />
                  ) : undefined
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
