import AccidenteTrabajoCard from '../../components/paraEmpresa/AccidenteTrabajoCard';
import AsociateSection from '../../components/paraEmpresa/AsociateSection';
import BotiquinesContent from '../../components/paraEmpresa/BotiquinesContent';
import DesplazamientoExtranjeroCard from '../../components/paraEmpresa/DesplazamientoExtranjeroCard';
import EnfermedadProfesionalCard from '../../components/paraEmpresa/EnfermedadProfesionalCard';
import InfoCard from '../../components/paraEmpresa/InfoCard';
import PageIndex, { type PageIndexItem } from '../../components/paraEmpresa/PageIndex';
import PortalServiciosContent from '../../components/paraEmpresa/PortalServiciosContent';
import RiesgoEmbarazoCard from '../../components/paraEmpresa/RiesgoEmbarazoCard';
import SectionTitle from '../../components/paraEmpresa/SectionTitle';
import SplitPanel from '../../components/paraEmpresa/SplitPanel';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import botiquinImage from '../../images/botiquin.jpg';
import perfilEmpresaImage from '../../images/perfil-empresa.png';
import portalServiciosImage from '../../images/portal-de-servicios.jpg';
import styles from './ParaEmpresaPage.module.css';

const INDEX_ITEMS: PageIndexItem[] = [
  { id: 'asociate', label: 'Asóciate' },
  { id: 'creando-tu-empresa', label: 'Creando tu empresa', level: 'sub' },
  { id: 'asociada-a-otra-mutua', label: 'Asociada a otra mutua', level: 'sub' },
  { id: 'asociada-a-inss', label: 'Asociada al INSS', level: 'sub' },
  { id: 'reanudando-la-actividad', label: 'Reanudando la actividad', level: 'sub' },
  { id: 'certificado-de-asociacion', label: 'Certificado de asociación' },
  { id: 'en-caso-de', label: 'En caso de…' },
  { id: 'accidente-de-trabajo', label: 'Accidente de trabajo', level: 'sub' },
  { id: 'enfermedad-profesional', label: 'Enfermedad profesional', level: 'sub' },
  { id: 'desplazamiento-al-extranjero', label: 'Desplazamiento al extranjero', level: 'sub' },
  { id: 'riesgo-embarazo', label: 'Riesgo embarazo/lactancia', level: 'sub' },
  { id: 'portal-de-servicios', label: 'Portal de Servicios' },
  { id: 'botiquines', label: 'Botiquines' },
];

export default function ParaEmpresaPage() {
  return (
    <>
      <PageHero
        image={perfilEmpresaImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Trámites' }, { label: 'Para Empresa' }]}
        title="Para Empresa"
        subtitle="Todos los trámites que tu empresa necesita: asociación, certificados, gestión de siniestros y recursos, en un solo lugar."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={INDEX_ITEMS} />

          <div className={styles.content}>
            <AsociateSection />

            <section id="certificado-de-asociacion" className={styles.section}>
              <SectionTitle title="Certificado de asociación" />
              <InfoCard>
                <p>
                  Si necesitas un certificado que indique que tu empresa está asociada a Solimat, escríbenos a{' '}
                  <a href="mailto:web@solimat.com">
                    <strong>web@solimat.com</strong>
                  </a>{' '}
                  con el NIF/CIF y la razón social de tu entidad y te lo enviamos a la mayor brevedad.
                </p>
              </InfoCard>
            </section>

            <section id="en-caso-de" className={styles.section}>
              <SectionTitle title="En caso de…" />
              <div className={styles.cards}>
                <AccidenteTrabajoCard />
                <EnfermedadProfesionalCard />
                <DesplazamientoExtranjeroCard />
                <RiesgoEmbarazoCard />
              </div>
            </section>

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

            <section id="botiquines" className={styles.sectionLast}>
              <SectionTitle title="Botiquines" />
              <SplitPanel image={botiquinImage} imageAlt="Botiquín" imageWidth="half">
                <BotiquinesContent provincialLabel="dirección provincial" />
              </SplitPanel>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
