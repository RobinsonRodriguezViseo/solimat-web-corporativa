import { useMemo } from 'react';
import NumberedCard from '../../components/quienesSomos/NumberedCard';
import PrincipleCard from '../../components/quienesSomos/PrincipleCard';
import SideIndex from '../../components/quienesSomos/SideIndex';
import StatCard from '../../components/quienesSomos/StatCard';
import ValuePoster from '../../components/quienesSomos/ValuePoster';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import {
  ACTIVIDADES_MUTUA,
  HISTORIA_PARAGRAPHS,
  MEDIOAMBIENTAL_INTRO,
  MEDIOAMBIENTAL_PRINCIPLES,
  MISION_TEXT,
  PACTO_MUNDIAL_LEFT,
  PACTO_MUNDIAL_RIGHT,
  PRINCIPIOS_PARAGRAPHS,
  RSC_PARAGRAPHS,
  RSC_PRINCIPLES,
  SECTIONS,
  SOLIMAT_HOY_PARAGRAPHS,
  STATS,
  VALORES_ITEMS,
  VISION_TEXT,
} from '../../data/quienesSomos';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import odsImage from '../../images/ods.jpg';
import politicaMedioambientalImage from '../../images/politica-medioambiental.jpg';
import rscBackground from '../../images/responsabilidad-social-corporativa.jpg';
import misionImage from '../../images/solimat-mision.jpg';
import valoresImage from '../../images/solimat-valores.jpg';
import visionImage from '../../images/solimat-vision.jpg';
import styles from './QuienesSomosPage.module.css';

export default function QuienesSomosPage() {
  const sectionIds = useMemo(() => SECTIONS.map((section) => section.id), []);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <PageHero
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Conócenos' }, { label: 'Quiénes somos' }]}
        title="Quiénes somos"
        subtitle="Una mutua nacida en Castilla-La Mancha en 1933, cercana y comprometida con la salud laboral de empresas, autónomos, trabajadores y asesorías."
      />

      <Container className={styles.body}>
        <div className={styles.layout}>
          <SideIndex items={[...SECTIONS]} activeId={activeId} />

          <div className={styles.content}>
            <section className={styles.section} id="las-mutuas">
              <div className={styles.eyebrow}>Qué es una mutua</div>
              <h2 className={styles.h2}>Las Mutuas</h2>
              <div className={styles.prose}>
                <p>
                  Las Mutuas son asociaciones de empresarios que, autorizadas por el Ministerio de Inclusión,
                  Migraciones y Seguridad Social, tienen por finalidad colaborar en la gestión de la Seguridad
                  Social, bajo la dirección y tutela del mismo, sin ánimo de lucro y asumiendo sus asociados
                  responsabilidad mancomunada.
                </p>
                <p>
                  De acuerdo con lo previsto en el artículo 80.2 del Texto Refundido de la Ley General de la
                  Seguridad Social, es su objeto el desarrollo de las siguientes actividades:
                </p>
              </div>
              <div className={styles.gridTwo}>
                {ACTIVIDADES_MUTUA.map((actividad, index) => (
                  <NumberedCard key={actividad} number={index + 1} text={actividad} />
                ))}
              </div>
            </section>

            <section className={styles.section} id="nuestra-historia">
              <div className={styles.eyebrow}>Desde 1933</div>
              <h2 className={styles.h2}>Nuestra historia</h2>
              <div className={styles.prose}>
                <p>
                  Solimat nació el <strong>16 de abril de 1933</strong> como consecuencia de la unión de varios
                  empresarios toledanos comprometidos con la seguridad de sus trabajadores.
                </p>
                {HISTORIA_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className={styles.section} id="solimat-hoy">
              <div className={styles.eyebrow}>Solimat hoy</div>
              <h2 className={styles.h2}>Una mutua referente en Castilla-La Mancha</h2>
              <div className={styles.prose}>
                {SOLIMAT_HOY_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={styles.gridThree}>
                {STATS.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            </section>

            <section className={styles.section} id="principios-valores">
              <div className={styles.eyebrow}>Nuestra identidad</div>
              <h2 className={styles.h2}>Principios y Valores</h2>
              <div className={styles.prose}>
                {PRINCIPIOS_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  <strong>Misión, Visión y Valores.</strong> Nuestra identidad viene marcada por tres elementos
                  fundamentales: nuestra misión, nuestra visión y los valores que nos caracterizan. Son, entre
                  otros, los elementos que caracterizan la personalidad de nuestra organización.
                </p>
              </div>
              <div className={styles.postersGrid}>
                <ValuePoster image={misionImage} title="Misión" text={MISION_TEXT} />
                <ValuePoster image={visionImage} title="Visión" text={VISION_TEXT} />
                <ValuePoster image={valoresImage} title="Valores" items={VALORES_ITEMS} />
              </div>
            </section>

            <section
              className={`${styles.section} ${styles.sectionSostenibilidad}`}
              id="sostenibilidad"
              style={{ backgroundImage: `url(${rscBackground})` }}
            >
              <div className={styles.eyebrow}>Compromiso</div>
              <h2 className={styles.h2}>Sostenibilidad y Responsabilidad Social Corporativa</h2>
              <h3 className={styles.h3}>Responsabilidad Social Corporativa</h3>
              <div className={styles.prose}>
                {RSC_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={styles.principlesGrid}>
                {RSC_PRINCIPLES.map((principle) => (
                  <PrincipleCard key={principle.title} title={principle.title} text={principle.text} />
                ))}
              </div>

              <div className={styles.block}>
                <h3 className={styles.h3}>Política Medioambiental</h3>
                <div className={`${styles.prose} ${styles.introBlock}`}>
                  <p>{MEDIOAMBIENTAL_INTRO}</p>
                </div>
                <div className={styles.gridTwo}>
                  {MEDIOAMBIENTAL_PRINCIPLES.map((principle, index) => (
                    <NumberedCard key={principle} number={index + 1} text={principle} />
                  ))}
                </div>
                <img
                  className={styles.fullImage}
                  src={politicaMedioambientalImage}
                  alt="Política Medioambiental"
                />
              </div>

              <div className={styles.block}>
                <h3 className={styles.h3}>
                  Pacto Mundial de Naciones Unidas y Objetivos de Desarrollo Sostenible (ODS)
                </h3>
                <div className={styles.pactoGrid}>
                  <div className={styles.prose}>
                    {PACTO_MUNDIAL_LEFT.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className={styles.prose}>
                    {PACTO_MUNDIAL_RIGHT.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <img className={styles.fullImage} src={odsImage} alt="Pacto Mundial y ODS" />
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
