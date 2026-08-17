import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logoBlanco from '../../../images/logoBlanco.png';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';
import Container from '../Container';
import styles from './Footer.module.css';

interface FooterLinkItem {
  label: string;
  href: string;
}

const TE_PUEDE_INTERESAR: FooterLinkItem[] = [
  { label: 'Perfil del Contratante', href: '/perfil-del-contratante' },
  { label: 'Portal de Transparencia', href: 'http://transparencia.solimat.com/web/index.html' },
  { label: 'Reclamaciones y quejas', href: '#' },
  { label: 'Recursos y Herramientas', href: '/recursos-y-herramientas' },
  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
];

const ENLACES_DE_INTERES: FooterLinkItem[] = [
  { label: 'Referencias legislativas', href: '/referencias-legislativas' },
  { label: 'BOE', href: 'https://www.boe.es/' },
  { label: 'INSST', href: 'https://www.insst.es/' },
  { label: 'AMAT', href: 'https://www.amat.es/' },
  { label: 'Seguridad Social', href: 'https://www.seg-social.es/' },
];

const LEGAL_LINKS: FooterLinkItem[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '#' },
  { label: 'Administrador', href: '/login' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://es.linkedin.com/company/solimat-matepss-',
    path: 'M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.98h4v12H3zM9.5 8.98h3.8v1.64h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.65 4.78 6.1v6.22h-4v-5.51c0-1.32-.02-3-1.84-3-1.85 0-2.13 1.44-2.13 2.92v5.59h-4z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/user/Solimat72',
    path: 'M23 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.77-1.77C19.34 5.1 12 5.1 12 5.1s-7.34 0-8.83.43A2.5 2.5 0 001.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 001.77 1.77c1.49.43 8.83.43 8.83.43s7.34 0 8.83-.43a2.5 2.5 0 001.77-1.77C23 15.2 23 12 23 12zM9.75 15.5v-7l6 3.5z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100083202458773',
    path: 'M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z',
  },
];

function FooterLink({ label, href, className }: FooterLinkItem & { className?: string }): ReactNode {
  if (isInternalRoute(href)) {
    return (
      <Link className={className} to={href}>
        {label}
      </Link>
    );
  }

  if (isExternalHttpLink(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.grid}>
          <div>
            <img className={styles.brandLogo} src={logoBlanco} alt="Solimat" />
            <p className={styles.tagline}>Salud · Experiencia · Compromiso · Integridad · Confianza</p>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  className={styles.socialLink}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.heading}>Te puede interesar</div>
            <ul className={styles.linkList}>
              {TE_PUEDE_INTERESAR.map((item) => (
                <li key={item.label}>
                  <FooterLink {...item} className={styles.link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Enlaces de interés</div>
            <ul className={styles.linkList}>
              {ENLACES_DE_INTERES.map((item) => (
                <li key={item.label}>
                  <FooterLink {...item} className={styles.link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.heading}>Contacto</div>
            <div className={styles.contact}>
              <div className={styles.contactName}>Sede Central</div>
              <div>C/ Berna, 1 — 4ª planta</div>
              <div>45003 Toledo</div>
              <a className={styles.contactPhone} href="tel:925283186">
                925 28 31 86
              </a>
              <div className={styles.contactEmail}>contigo@solimat.com</div>
              <div>
                <a className={styles.contactMore} href="#">
                  Direcciones provinciales →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.bottom}>
        <Container className={styles.bottomBar}>
          <span>© {year} Solimat — Mutua Colaboradora con la Seguridad Social Nº 72</span>
          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map((item) => (
              // Vía FooterLink: los que ya tienen página propia (p. ej. /aviso-legal)
              // navegan con el router en vez de recargar toda la aplicación.
              <FooterLink key={item.label} {...item} className={styles.legalLink} />
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
