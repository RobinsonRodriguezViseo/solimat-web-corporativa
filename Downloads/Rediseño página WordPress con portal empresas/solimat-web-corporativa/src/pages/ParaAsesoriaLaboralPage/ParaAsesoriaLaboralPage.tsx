import AdhiereAutonomosSection from '../../components/paraAsesoriaLaboral/AdhiereAutonomosSection';
import AsociaEmpresasSection from '../../components/paraAsesoriaLaboral/AsociaEmpresasSection';
import CollaboratorForm from '../../components/paraAsesoriaLaboral/CollaboratorForm';
import RecursosGestionSection from '../../components/paraAsesoriaLaboral/RecursosGestionSection';
import InfoCard from '../../components/paraEmpresa/InfoCard';
import PageIndex, { type PageIndexItem } from '../../components/paraEmpresa/PageIndex';
import PortalServiciosContent from '../../components/paraEmpresa/PortalServiciosContent';
import SectionTitle from '../../components/paraEmpresa/SectionTitle';
import SplitPanel from '../../components/paraEmpresa/SplitPanel';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import perfilAsesoriaImage from '../../images/perfil-asesoria.png';
import portalServiciosImage from '../../images/portal-de-servicios.jpg';
import styles from './ParaAsesoriaLaboralPage.module.css';

const INDEX_ITEMS: PageIndexItem[] = [
  { id: 'solicitud-alta', label: 'Solicitud de alta como colaborador' },
  { id: 'asocia-empresas', label: 'Asocia a empresas' },
  { id: 'certificado-empresas', label: 'Certificado de Asociación (empresas)' },
  { id: 'adhiere-autonomos', label: 'Adhiere a autónomos' },
  { id: 'certificado-autonomos', label: 'Certificado de Adhesión (autónomos)' },
  { id: 'portal-de-servicios', label: 'Portal de Servicios' },
  { id: 'recursos-gestion', label: 'Recursos de gestión' },
];

export default function ParaAsesoriaLaboralPage() {
  return (
    <>
      <PageHero
        image={perfilAsesoriaImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Trámites' }, { label: 'Para Asesoría Laboral' }]}
        title="Para Asesoría Laboral"
        subtitle="Únete a nuestra red de colaboradores y gestiona la asociación y adhesión de tus empresas y autónomos."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={INDEX_ITEMS} />

          <div className={styles.content}>
            <section id="solicitud-alta" className={styles.section}>
              <SectionTitle title="Forma parte de nuestra red de colaboradores" />
              <CollaboratorForm />
            </section>

            <AsociaEmpresasSection />

            <div className={styles.section}>
              <InfoCard id="certificado-empresas" title="Certificado de Asociación para empresas" titleLevel="h2">
                <p>
                  Si necesitas un certificado que indique que una empresa está asociada a Solimat, escríbenos a{' '}
                  <a href="mailto:web@solimat.com">web@solimat.com</a> con el NIF/CIF y la razón social de la
                  entidad empresa y te lo enviaremos a la mayor brevedad.
                </p>
              </InfoCard>
            </div>

            <AdhiereAutonomosSection />

            <div className={styles.section}>
              <InfoCard id="certificado-autonomos" title="Certificado de Adhesión para autónomos" titleLevel="h2">
                <p>
                  Si necesitas un certificado que indique que un autónomo está adherido a Solimat, escríbenos a{' '}
                  <a href="mailto:web@solimat.com">web@solimat.com</a> con todos los datos del trabajador por cuenta
                  propia y te lo enviaremos a la mayor brevedad.
                </p>
              </InfoCard>
            </div>

            <section id="portal-de-servicios" className={styles.section}>
              <SectionTitle title="Portal de Servicios" />
              <SplitPanel
                image={portalServiciosImage}
                imageAlt="Portal de Servicios"
                orientation="column"
                imagePosition="left"
                imageFit="contain"
              >
                <PortalServiciosContent />
              </SplitPanel>
            </section>

            <RecursosGestionSection />
          </div>
        </div>
      </Container>
    </>
  );
}
