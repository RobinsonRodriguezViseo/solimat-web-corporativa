import type { CentroType } from '../../../types/centro';

interface CentroTypeIconProps {
  type: CentroType;
  /** Lado del icono en píxeles. */
  size?: number;
  /** Grosor del trazo; conviene subirlo en tamaños pequeños. */
  strokeWidth?: number;
}

/**
 * Icono del tipo de centro. Lo comparten la tarjeta del listado
 * (`redDeCentros/CentroCard`) y la ficha de detalle (`centro/CentroInfoCard`)
 * para que ambas vistas no se contradigan al representar el mismo centro.
 *
 * Es decorativo: el tipo se enuncia siempre en texto junto al icono.
 */
export default function CentroTypeIcon({
  type,
  size = 26,
  strokeWidth = 1.6,
}: CentroTypeIconProps) {
  if (type === 'hospital') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        aria-hidden="true"
      >
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M12 9v4M10 11h4" />
      </svg>
    );
  }

  if (type === 'colaborador') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}
