import { useMemo } from 'react';
import GradeCard from '../../components/prestacionesEconomicas/GradeCard';
import PrestacionCard from '../../components/prestacionesEconomicas/PrestacionCard';
import AccentCta from '../../components/servicios/AccentCta';
import PageIndex from '../../components/servicios/PageIndex';
import RichContent from '../../components/servicios/RichContent';
import Container from '../../components/shared/Container';
import PageHero from '../../components/shared/PageHero';
import {
  CESE_ACTIVIDAD_BLOCKS,
  CESE_ACTIVIDAD_NOTE,
  CONTINGENCIAS_COMUNES_HEADER,
  CONTINGENCIAS_COMUNES_TABS,
  CONTINGENCIAS_PROFESIONALES_HEADER,
  CONTINGENCIAS_PROFESIONALES_TABS,
  CTA_HREF,
  CTA_LABEL,
  CUIDADO_MENORES_HEADER,
  CUIDADO_MENORES_TABS,
  INCAPACIDAD_FOOTNOTE,
  INCAPACIDAD_GRADES,
  INCAPACIDAD_HEADER,
  MECANISMO_RED_HEADER,
  MECANISMO_RED_TABS,
  MUERTE_SUPERVIVENCIA_BLOCKS,
  MUERTE_SUPERVIVENCIA_HEADER,
  PRESTACIONES_COMPLEMENTARIAS_BLOCKS,
  PRESTACIONES_COMPLEMENTARIAS_HEADER,
  RIESGO_EMBARAZO_HEADER,
  RIESGO_EMBARAZO_TABS,
  SECTIONS,
} from '../../data/prestacionesEconomicas';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import heroImage from '../../images/perfil-asesoria.png';
import styles from './PrestacionesEconomicasPage.module.css';

export default function PrestacionesEconomicasPage() {
  const sectionIds = useMemo(() => SECTIONS.map((section) => section.id), []);
  const activeId = useScrollSpy(sectionIds);

  const cta = (
    <AccentCta className={styles.cta} href={CTA_HREF} icon="arrow">
      {CTA_LABEL}
    </AccentCta>
  );

  return (
    <>
      <PageHero
        image={heroImage}
        breadcrumb={[{ label: 'Inicio', to: '/' }, { label: 'Servicios' }, { label: 'Prestaciones económicas' }]}
        title="Prestaciones económicas"
        subtitle="Conoce las prestaciones que gestionamos y abonamos, sus requisitos, cuantías y formas de abono según tu situación."
      />

      <Container as="section" className={styles.body}>
        <div className={styles.layout}>
          <PageIndex items={SECTIONS} activeId={activeId} />

          <div className={styles.content}>
            <PrestacionCard
              id="contingencias-profesionales"
              title="Contingencias Profesionales"
              headerBlocks={CONTINGENCIAS_PROFESIONALES_HEADER}
              tabs={CONTINGENCIAS_PROFESIONALES_TABS}
            >
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="contingencias-comunes"
              title="Contingencias Comunes"
              headerBlocks={CONTINGENCIAS_COMUNES_HEADER}
              tabs={CONTINGENCIAS_COMUNES_TABS}
            >
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="riesgo-embarazo-lactancia"
              title="Riesgo durante el embarazo y la lactancia natural"
              headerBlocks={RIESGO_EMBARAZO_HEADER}
              tabs={RIESGO_EMBARAZO_TABS}
            >
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="cuidado-menores"
              title="Cuidado de menores afectados por cáncer u otra enfermedad grave"
              headerBlocks={CUIDADO_MENORES_HEADER}
              tabs={CUIDADO_MENORES_TABS}
            >
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="cese-actividad"
              title="Cese de actividad de los trabajadores autónomos"
              headerNote={CESE_ACTIVIDAD_NOTE}
            >
              <RichContent blocks={CESE_ACTIVIDAD_BLOCKS} />
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="mecanismo-red"
              title="Mecanismo RED"
              headerBlocks={MECANISMO_RED_HEADER}
              tabs={MECANISMO_RED_TABS}
            >
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="prestaciones-complementarias"
              title="Prestaciones complementarias"
              headerBlocks={PRESTACIONES_COMPLEMENTARIAS_HEADER}
            >
              <RichContent blocks={PRESTACIONES_COMPLEMENTARIAS_BLOCKS} />
              {cta}
            </PrestacionCard>

            <PrestacionCard
              id="incapacidad"
              title="Prestación económica por Incapacidad Permanente e invalidez"
              headerBlocks={INCAPACIDAD_HEADER}
            >
              <div className={styles.grades}>
                {INCAPACIDAD_GRADES.map((grade) => (
                  <GradeCard key={grade.title} {...grade} />
                ))}
              </div>
              <RichContent blocks={INCAPACIDAD_FOOTNOTE} />
            </PrestacionCard>

            <PrestacionCard
              id="muerte-supervivencia"
              title="Prestación económica por muerte y supervivencia"
              headerBlocks={MUERTE_SUPERVIVENCIA_HEADER}
            >
              <RichContent blocks={MUERTE_SUPERVIVENCIA_BLOCKS} />
            </PrestacionCard>
          </div>
        </div>
      </Container>
    </>
  );
}
