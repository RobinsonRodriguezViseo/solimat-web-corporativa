import type { ReactNode } from 'react';
import Container from '../../shared/Container';
import QuickAccessTile from '../QuickAccessTile';
import styles from './QuickAccessGrid.module.css';

interface QuickAccessItem {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const ITEMS: QuickAccessItem[] = [
  {
    href: 'http://portal.solimat.com/',
    title: 'Portal de Servicios',
    description: 'Gestiona tus trámites como empresa, autónomo o asesoría.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14h5" />
      </svg>
    ),
  },
  {
    href: 'https://pacientes.solimat.com/',
    title: 'Portal del Paciente',
    description: 'Consulta tus citas, informes médicos y prestaciones.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M19 14c1.5-1.5 2-3.5 2-5a5 5 0 00-9-3 5 5 0 00-9 3c0 1.5.5 3.5 2 5l7 7z" />
      </svg>
    ),
  },
  {
    href: '/red-de-centros',
    title: 'Red de Centros',
    description: 'Encuentra tu centro asistencial más cercano.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    href: '/recursos-y-herramientas',
    title: 'Recursos y Herramientas',
    description: 'Documentos, formularios y guías de gestión.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M9 9h4M9 13h6M9 17h6" />
      </svg>
    ),
  },
];

export default function QuickAccessGrid() {
  return (
    <Container as="section" id="servicios" className={styles.section}>
      <div className={styles.grid}>
        {ITEMS.map((item) => (
          <QuickAccessTile key={item.title} {...item} />
        ))}
      </div>
    </Container>
  );
}
