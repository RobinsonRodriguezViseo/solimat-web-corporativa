import PageIndex, { type PageIndexItem } from '../../components/paraEmpresa/PageIndex';
import SectionTitle from '../../components/paraEmpresa/SectionTitle';
import PortalPacientePanel from '../../components/paraTrabajador/PortalPacientePanel';
import PortalPromoCard from '../../components/paraTrabajador/PortalPromoCard';
import PrestacionesList from '../../components/paraTrabajador/PrestacionesList';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import perfilTrabajadorImage from '../../images/perfil-trabajador.png';
import styles from './ParaTrabajadorPage.module.css';

const INDEX_ITEMS: PageIndexItem[] = [
  { id: 'contingencia-profesional', label: 'Contingencia Profesional' },
  { id: 'contingencia-comun', label: 'Contingencia Común' },
  { id: 'riesgo-embarazo', label: 'Riesgo embarazo y lactancia' },
  { id: 'cuidado-hijos', label: 'Cuidado de hijos menores' },
  { id: 'prestaciones-complementarias', label: 'Prestaciones complementarias' },
  { id: 'portal-del-paciente', label: 'Portal del Paciente' },
];

export default function ParaTrabajadorPage() {
  return (
    <>
      <PageHero
        image={perfilTrabajadorImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Trámites' }, { label: 'Para Trabajador' }]}
        title="Para Trabajador"
        subtitle="Conoce tus prestaciones y accede al Portal del Paciente para gestionar tu proceso de recuperación."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={INDEX_ITEMS}>
            <PortalPromoCard />
          </PageIndex>

          <div className={styles.content}>
            <PrestacionesList />

            <section id="portal-del-paciente" className={styles.portalSection}>
              <SectionTitle title="Portal del Paciente" />
              <PortalPacientePanel />
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
