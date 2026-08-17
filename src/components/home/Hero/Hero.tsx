import Button from '../../shared/Button';
import Container from '../../shared/Container';
import { useHeroSlider } from '../../../hooks/useHeroSlider';
import heroSlidePortalPaciente from '../../../images/hero-slide-portal-paciente.jpg';
import heroSlideHospital from '../../../images/hero-slide-hospital.jpg';
import heroSlideValorDiferencial from '../../../images/hero-slide-valor-diferencial.jpg';
import heroSlideSenaIdentidad from '../../../images/hero-slide-sena-identidad.jpg';
import heroSlideTecnologia from '../../../images/hero-slide-tecnologia.jpg';
import styles from './Hero.module.css';

interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

const SLIDES: Slide[] = [
  {
    title: 'Mejoramos la experiencia del Portal del Paciente',
    subtitle: 'Utilizarlo te resultará más sencillo e intuitivo.',
    image: heroSlidePortalPaciente,
  },
  {
    title: 'Único hospital laboral en Castilla-La Mancha',
    subtitle: 'Abierto 24 horas los 365 días del año.',
    image: heroSlideHospital,
  },
  {
    title: 'Nuestro valor diferencial',
    subtitle: 'Grandes profesionales del sector sanitario y de gestión, comprometidos con el mejor servicio.',
    image: heroSlideValorDiferencial,
  },
  {
    title: 'Nuestra seña de identidad',
    subtitle:
      'La cercanía y el trato personalizado con empresarios, trabajadores, autónomos y asesores laborales.',
    image: heroSlideSenaIdentidad,
  },
  {
    title: 'Últimas tecnologías',
    subtitle: 'Dispositivos de última generación al servicio de la calidad asistencial.',
    image: heroSlideTecnologia,
  },
];

export default function Hero() {
  const { activeIndex, goTo, pause, resume } = useHeroSlider(SLIDES.length);
  const activeSlide = SLIDES[activeIndex] ?? SLIDES[0];

  if (!activeSlide) return null;

  return (
    <section
      id="top"
      className={styles.hero}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <img className={styles.image} src={activeSlide.image} alt="" />
      <div className={styles.tint} />
      <div className={styles.gradientHorizontal} />
      <div className={styles.gradientVertical} />

      <Container className={styles.content}>
        <div className={styles.textBlock}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowBar} aria-hidden="true" />
            Mutua Colaboradora con la Seguridad Social Nº 72
          </div>
          <h1 className={styles.title}>{activeSlide.title}</h1>
          <p className={styles.subtitle}>{activeSlide.subtitle}</p>

          <div className={styles.actions}>
            <Button href="/para-empresa" size="lg" className={styles.ctaPrimary}>
              Asóciate con nosotros
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            {/*
              En el prototipo esto era `#servicios` (scroll a los accesos rápidos),
              porque el diseño era una sola página. Ya existe página propia, y un
              botón rotulado "Asistencia Sanitaria" debe llevar ahí.
            */}
            <Button href="/asistencia-sanitaria" size="lg" className={styles.ctaSecondary}>
              Asistencia Sanitaria
            </Button>
          </div>
        </div>

        <div className={styles.dots}>
          {SLIDES.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === activeIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot}
              aria-label={`Ver titular: ${slide.title}`}
              aria-current={index === activeIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
