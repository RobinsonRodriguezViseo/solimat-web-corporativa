import { Link } from 'react-router-dom';
// El isotipo (símbolo cuadrado, 82x76), no el logotipo apaisado: dentro del
// círculo de 66px el logotipo completo quedaba ilegible. Mismo asset que usa el
// Portal de Pacientes en sus tarjetas de centro.
import solimatIsotipo from '../../../images/solimat-isotipo.svg';
import type { Centro } from '../../../types/centro';
import { getTelHref } from '../../../utils/centro';
import CentroTypeIcon from '../../shared/CentroTypeIcon';
import styles from './CentroCard.module.css';

interface CentroCardProps {
  centro: Centro;
}

/**
 * Variante del icono de la tarjeta. "solimat" es puramente visual y manda sobre
 * el tipo: un centro Solimat luce el logo aunque además sea hospital.
 */
type CentroCardVariant = 'solimat' | Centro['type'];

/** Mismo criterio que el Portal de Pacientes: el nombre menciona "Solimat". */
const isSolimatCentro = (name: string): boolean => name.toLowerCase().includes('solimat');

export default function CentroCard({ centro }: CentroCardProps) {
  const isSolimat = isSolimatCentro(centro.name);
  // La cabecera oscura depende solo del tipo, no del nombre: un centro Solimat
  // que además sea hospital lleva logo y cabecera oscura a la vez.
  const isHospital = centro.type === 'hospital';
  const variant: CentroCardVariant = isSolimat ? 'solimat' : centro.type;

  const headClassName = isHospital ? `${styles.head} ${styles.headDark}` : styles.head;
  const pillClassName = isHospital ? `${styles.pill} ${styles.pillDark}` : styles.pill;

  return (
    <article className={styles.card} data-variant={variant} data-hospital={String(isHospital)}>
      <Link className={styles.link} to={`/red-de-centros/${centro.id}`}>
        <div className={headClassName}>
          <span className={pillClassName}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {centro.province}
          </span>
          <span className={styles.badge}>
            {isSolimat ? (
              <img className={styles.logo} src={solimatIsotipo} alt="" />
            ) : (
              <CentroTypeIcon type={centro.type} size={27} />
            )}
          </span>
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{centro.name}</h3>
          <div className={styles.address}>{centro.address}</div>
        </div>
      </Link>

      {centro.phone ? (
        <a className={styles.phone} href={getTelHref(centro.phone)}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
          </svg>
          {centro.phone}
        </a>
      ) : null}
    </article>
  );
}
