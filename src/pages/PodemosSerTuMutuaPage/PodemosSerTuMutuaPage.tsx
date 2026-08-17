import type { ReactNode } from 'react';
import ContactCta from '../../components/podemosSerTuMutua/ContactCta';
import QuestionCard from '../../components/podemosSerTuMutua/QuestionCard';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import formaParteImage from '../../images/forma-parte-de-solimat.jpg';
import styles from './PodemosSerTuMutuaPage.module.css';

interface Question {
  question: string;
  icon: ReactNode;
}

const QUESTIONS: Question[] = [
  {
    question: '¿Tienes una empresa o vas a crearla?',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
      </svg>
    ),
  },
  {
    question: '¿Eres autónomo o estás pensando en montar tu propio negocio?',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    question: '¿Tienes una asesoría laboral?',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3v18M5 7l7-4 7 4M4 10l-2 5a3 3 0 006 0l-2-5M18 10l-2 5a3 3 0 006 0l-2-5" />
      </svg>
    ),
  },
];

export default function PodemosSerTuMutuaPage() {
  return (
    <>
      <PageHero
        image={formaParteImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: 'Podemos ser tu mutua' }]}
        title="Podemos ser tu mutua"
        subtitle="Súmate a una mutua cercana, con trato personalizado y respaldo asistencial en toda Castilla-La Mancha y a nivel nacional."
      />

      <Container as="section" className={styles.questionsSection}>
        <div className={styles.heading}>
          <div className={styles.eyebrow}>¿Te identificas?</div>
          <h2 className={styles.title}>Si estás en uno de estos casos, podemos ser tu mutua</h2>
        </div>
        <div className={styles.grid}>
          {QUESTIONS.map((item) => (
            <QuestionCard key={item.question} icon={item.icon} question={item.question} />
          ))}
        </div>
      </Container>

      <Container as="section" className={styles.ctaSection}>
        <ContactCta />
      </Container>
    </>
  );
}
