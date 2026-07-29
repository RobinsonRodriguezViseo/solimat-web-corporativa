import { Link } from 'react-router-dom';
import { useMobileNav } from '../../../hooks/useMobileNav';
import solimatLogo from '../../../images/solimat-logo.svg';
import Button from '../Button';
import Container from '../Container';
import NavDropdown, { type NavDropdownItem } from '../NavDropdown';
import styles from './Header.module.css';

interface NavGroup {
  label: string;
  items: NavDropdownItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Conócenos',
    items: [
      { label: 'Quiénes somos', href: '/quienes-somos' },
      { label: 'Nuestros datos', href: '/quienes-somos/nuestros-datos' },
      { label: 'Podemos ser tu mutua', href: '/quienes-somos/podemos-ser-tu-mutua' },
      { label: 'Trabaja con nosotros', href: '/para-empresa' },
      { label: 'Noticias', href: '/noticias' },
      { label: '¿Podemos ayudarte?', href: '/quienes-somos/podemos-ayudarte' },
    ],
  },
  {
    label: 'Servicios',
    items: [
      { label: 'Nuestro equipo', href: '/nuestro-equipo' },
      { label: 'Prestaciones Económicas', href: '/prestaciones-economicas' },
      { label: 'Asistencia Sanitaria', href: '/asistencia-sanitaria' },
      { label: 'Promoción de la Prevención', href: '/promocion-de-la-prevencion' },
      { label: 'Portal de Servicios', href: 'http://portal.solimat.com/' },
      { label: '¿Podemos ayudarte?', href: '/quienes-somos/podemos-ayudarte' },
    ],
  },
  {
    label: 'Trámites',
    items: [
      { label: 'Para Empresa', href: '/para-empresa' },
      { label: 'Para Trabajador', href: '/para-trabajador' },
      { label: 'Para Autónomo', href: '/para-autonomo' },
      { label: 'Para Asesoría Laboral', href: '/para-asesoria-laboral' },
    ],
  },
];

export default function Header() {
  const { isOpen, toggle, close } = useMobileNav();

  return (
    <header className="hdr">
      <Container className={`hdr__bar ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={close}>
          <img src={solimatLogo} alt="Solimat" />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={toggle}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav className={isOpen ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
          {NAV_GROUPS.map((group) => (
            <NavDropdown key={group.label} label={group.label} items={group.items} />
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="https://pacientes.solimat.com/" variant="ghost" size="sm">
            Portal del Paciente
          </Button>
          <Button href="http://portal.solimat.com/" size="sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M3 9h18" />
            </svg>
            Portal de Servicios
          </Button>
        </div>
      </Container>
    </header>
  );
}
