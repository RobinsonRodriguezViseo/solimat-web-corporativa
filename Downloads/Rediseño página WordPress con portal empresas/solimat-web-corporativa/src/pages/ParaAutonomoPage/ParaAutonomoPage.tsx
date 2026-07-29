import AdhiereteSection from '../../components/paraAutonomo/AdhiereteSection';
import CeseActividadList from '../../components/paraAutonomo/CeseActividadList';
import PrestacionesList from '../../components/paraAutonomo/PrestacionesList';
import BotiquinesContent from '../../components/paraEmpresa/BotiquinesContent';
import InfoCard from '../../components/paraEmpresa/InfoCard';
import PageIndex, { type PageIndexItem } from '../../components/paraEmpresa/PageIndex';
import SectionTitle from '../../components/paraEmpresa/SectionTitle';
import SplitPanel from '../../components/paraEmpresa/SplitPanel';
import PortalPacientePanel from '../../components/paraTrabajador/PortalPacientePanel';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import botiquinImage from '../../images/botiquin.jpg';
import perfilAutonomoImage from '../../images/perfil-autonomo.png';
import styles from './ParaAutonomoPage.module.css';

const INDEX_ITEMS: PageIndexItem[] = [
  { id: 'adhierete', label: 'Adhiérete' },
  { id: 'certificado-adhesion', label: 'Certificado de Adhesión' },
  { id: 'contingencia-profesional', label: 'Contingencia Profesional' },
  { id: 'contingencia-comun', label: 'Contingencia Común' },
  { id: 'riesgo-embarazo', label: 'Riesgo embarazo y lactancia' },
  { id: 'cuidado-hijos', label: 'Cuidado de hijos menores' },
  { id: 'prestaciones-complementarias', label: 'Prestaciones complementarias' },
  { id: 'cese-actividad', label: 'Cese de actividad' },
  { id: 'mecanismo-red', label: 'Mecanismo RED' },
  { id: 'portal-del-paciente', label: 'Portal del Paciente' },
  { id: 'botiquines', label: 'Botiquines' },
];

export default function ParaAutonomoPage() {
  return (
    <>
      <PageHero
        image={perfilAutonomoImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Trámites' }, { label: 'Para Autónomo' }]}
        title="Para Autónomo"
        subtitle="Adhiérete a Solimat, conoce tus prestaciones y gestiona todo desde el Portal del Paciente."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={INDEX_ITEMS} />

          <div className={styles.content}>
            <AdhiereteSection />

            <InfoCard id="certificado-adhesion" title="Certificado de Adhesión" titleLevel="h2">
              <p>
                Si necesitas un certificado que indique que estás adherido a Solimat, escríbenos a{' '}
                <a href="mailto:web@solimat.com">web@solimat.com</a> con tu nombre, apellidos y DNI y te lo
                enviaremos a la mayor brevedad.
              </p>
            </InfoCard>

            <div className={styles.stack}>
              <PrestacionesList />
              <CeseActividadList />
            </div>

            <section id="portal-del-paciente" className={styles.section}>
              <SectionTitle title="Portal del Paciente" />
              <PortalPacientePanel />
            </section>

            <section id="botiquines" className={styles.sectionLast}>
              <SectionTitle title="Botiquines" />
              <SplitPanel image={botiquinImage} imageAlt="Botiquín">
                <BotiquinesContent />
              </SplitPanel>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
