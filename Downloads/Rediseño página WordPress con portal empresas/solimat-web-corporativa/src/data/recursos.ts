import calendarioAndalucia from '../pdfs/CALENDARIO-LABORAL-2026-ANDALUCIA.pdf';
import calendarioAragon from '../pdfs/CALENDARIO-LABORAL-2026-ARAGON.pdf';
import calendarioAsturias from '../pdfs/CALENDARIO-LABORAL-2026-ASTURIAS.pdf';
import calendarioBaleares from '../pdfs/CALENDARIO-LABORAL-2026-BALEARES.pdf';
import calendarioCanarias from '../pdfs/CALENDARIO-LABORAL-2026-CANARIAS.pdf';
import calendarioCantabria from '../pdfs/CALENDARIO-LABORAL-2026-CANTABRIA.pdf';
import calendarioCastillaLaMancha from '../pdfs/CALENDARIO-LABORAL-2026-CASTILLA-L-M.pdf';
import calendarioCastillaYLeon from '../pdfs/CALENDARIO-LABORAL-2026-CASTILLA-Y-LEON.pdf';
import calendarioCataluna from '../pdfs/CALENDARIO-LABORAL-2026-CATALUNA.pdf';
import calendarioComunidadValenciana from '../pdfs/CALENDARIO-LABORAL-2026-C-VALENCIANA.pdf';
import calendarioExtremadura from '../pdfs/CALENDARIO-LABORAL-2026-EXTREMADURA.pdf';
import calendarioGalicia from '../pdfs/CALENDARIO-LABORAL-2026-GALICIA.pdf';
import calendarioLaRioja from '../pdfs/CALENDARIO-LABORAL-2026-LA-RIOJA.pdf';
import calendarioMadrid from '../pdfs/CALENDARIO-LABORAL-MADRID-2026.pdf';
import calendarioMelilla from '../pdfs/CALENDARIO-LABORAL-2026-MELILLA.pdf';
import calendarioMurcia from '../pdfs/CALENDARIO-LABORAL-2026-MURCIA.pdf';
import calendarioNacional from '../pdfs/CALENDARIO-LABORAL-2026.pdf';
import calendarioNavarra from '../pdfs/CALENDARIO-LABORAL-2026-NAVARRA.pdf';
import calendarioPaisVasco from '../pdfs/CALENDARIO-LABORAL-2026-PAIS-VASCO.pdf';

export interface CalendarioLaboral {
  /** Texto literal del enlace tal y como aparece en el diseño. */
  label: string;
  /** URL local resuelta por el bundler (nunca el WordPress antiguo). */
  pdf: string;
}

/** Índice lateral "En esta página" de Recursos y herramientas. */
export interface SeccionRecurso {
  id: string;
  label: string;
}

export const SECCIONES_RECURSOS: SeccionRecurso[] = [
  { id: 'sistema-delta', label: 'Sistema Delta' },
  { id: 'calendarios-laborales', label: 'Calendarios laborales' },
];

export const CALENDARIOS_LABORALES_2026: CalendarioLaboral[] = [
  { label: 'Calendario laboral Andalucía', pdf: calendarioAndalucia },
  { label: 'Calendario laboral Aragón', pdf: calendarioAragon },
  { label: 'Calendario laboral Asturias', pdf: calendarioAsturias },
  { label: 'Calendario laboral Baleares', pdf: calendarioBaleares },
  { label: 'Calendario laboral Canarias', pdf: calendarioCanarias },
  { label: 'Calendario laboral Cantabria', pdf: calendarioCantabria },
  { label: 'Calendario laboral Castilla-La Mancha', pdf: calendarioCastillaLaMancha },
  { label: 'Calendario laboral Castilla y León', pdf: calendarioCastillaYLeon },
  { label: 'Calendario laboral Cataluña', pdf: calendarioCataluna },
  { label: 'Calendario laboral general/nacional', pdf: calendarioNacional },
  { label: 'Calendario laboral Comunidad Valenciana', pdf: calendarioComunidadValenciana },
  { label: 'Calendario laboral Extremadura', pdf: calendarioExtremadura },
  { label: 'Calendario laboral Galicia', pdf: calendarioGalicia },
  { label: 'Calendario laboral La Rioja', pdf: calendarioLaRioja },
  { label: 'Calendario laboral Madrid', pdf: calendarioMadrid },
  { label: 'Calendario laboral Melilla', pdf: calendarioMelilla },
  { label: 'Calendario laboral Murcia', pdf: calendarioMurcia },
  { label: 'Calendario laboral Navarra', pdf: calendarioNavarra },
  { label: 'Calendario laboral País Vasco', pdf: calendarioPaisVasco },
];
