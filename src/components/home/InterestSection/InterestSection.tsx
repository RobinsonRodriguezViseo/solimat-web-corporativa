import type { ReactNode } from 'react';
import Container from '../../shared/Container';
import InterestCard from '../InterestCard';
import styles from './InterestSection.module.css';

interface InterestItem {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const ITEMS: InterestItem[] = [
  {
    href: '/promocion-de-la-prevencion',
    title: 'Promoción de la Prevención',
    description:
      'Promovemos seguridad y salud para empresas y autónomos, actuando para controlar y reducir accidentes laborales y enfermedades profesionales.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: '/voz-del-usuario',
    title: 'Voz del Usuario',
    description:
      'Nuestro compromiso con las personas nos ha llevado a poner en el centro de nuestra gestión, atención y servicio a nuestros empleados y usuarios.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
        <path d="M19 10v1a7 7 0 01-14 0v-1M12 18v4" />
      </svg>
    ),
  },
  {
    href: '/canal-etico-y-de-informacion',
    title: 'Canal Ético y de Información',
    description:
      'De acuerdo con nuestra Cultura de Cumplimiento, ponemos a tu disposición este Canal para comunicarnos conductas irregulares o contrarias a la normativa vigente y a nuestros principios y valores.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4a2 2 0 012-2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M14 2v6h6M8 13h8M8 17h6" />
      </svg>
    ),
  },
  {
    href: 'http://transparencia.solimat.com/web/index.html',
    title: 'Portal de Transparencia',
    description:
      'Con el fin de fomentar la transparencia y garantizar el acceso a la información pública, ponemos a tu disposición este Portal donde se presentan los contenidos e informaciones de un modo claro y sencillo.',
    icon: (
      <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 3H6a2 2 0 00-2 2v12a2 2 0 002 2h9a2 2 0 002-2v-3M13 3h6v6M10 14L20 4" />
      </svg>
    ),
  },
];

export default function InterestSection() {
  return (
    <Container as="section" className={styles.section}>
      <h2 className={styles.heading}>De interés</h2>
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <InterestCard key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
}
