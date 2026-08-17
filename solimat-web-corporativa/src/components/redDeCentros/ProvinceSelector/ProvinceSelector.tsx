import { useId } from 'react';
import type { Provincia } from '../../../types/centro';
import styles from './ProvinceSelector.module.css';

interface ProvinceSelectorProps {
  provinces: Provincia[];
  /** Código de provincia seleccionado ("45" = Toledo), igual que en el API. */
  value: string;
  onChange: (provinceCode: string) => void;
  disabled?: boolean;
}

export default function ProvinceSelector({
  provinces,
  value,
  onChange,
  disabled = false,
}: ProvinceSelectorProps) {
  const selectId = useId();

  return (
    <div className={styles.panel}>
      <div className={styles.intro}>
        <span className={styles.icon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <div>
          <h2 className={styles.title}>¿Dónde quieres ser atendido?</h2>
          <p className={styles.text}>
            Selecciona tu provincia para ver los centros Solimat más cercanos a tu ubicación.
          </p>
        </div>
      </div>

      <div>
        <label className={styles.label} htmlFor={selectId}>
          Provincia
        </label>
        <div className={`${styles.selectWrap} ${disabled ? styles.selectWrapDisabled : ''}`}>
          <select
            id={selectId}
            className={styles.select}
            value={value}
            disabled={disabled}
            onChange={(event) => onChange(event.target.value)}
          >
            {provinces.map((province) => (
              <option key={province.id} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
          <svg
            className={styles.chevron}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
