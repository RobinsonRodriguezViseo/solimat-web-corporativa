import ContactForm from '../../components/podemosAyudarte/ContactForm';
import ContactSidebar from '../../components/podemosAyudarte/ContactSidebar';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import heroImage from '../../images/perfil-empresa.png';
import styles from './PodemosAyudartePage.module.css';

export default function PodemosAyudartePage() {
  return (
    <>
      <PageHero
        image={heroImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: '¿Podemos ayudarte?' }]}
        title="¿Podemos ayudarte?"
        subtitle="Si necesitas alguna otra información relativa a Solimat, por favor rellena este formulario y en breve atenderemos tu solicitud."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <ContactForm />
          <ContactSidebar />
        </div>
      </Container>
    </>
  );
}
