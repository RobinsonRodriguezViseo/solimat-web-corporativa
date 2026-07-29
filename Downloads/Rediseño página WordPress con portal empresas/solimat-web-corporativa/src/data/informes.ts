import gobiernoCorporativo2022 from '../pdfs/Informe-de-Gobierno-Corporativo-2022.pdf';
import gobiernoCorporativo2023 from '../pdfs/Informe-de-Gobierno-Corporativo-2023.pdf';
import gobiernoCorporativo2024 from '../pdfs/Informe-de-Gobierno-Corporativo-2024.pdf';
import sostenibilidad2022 from '../pdfs/Informe-de-Gestion-y-Memoria-de-Sostenibilidad-2022.pdf';
import sostenibilidad2023 from '../pdfs/Informe-de-Gestion-y-Memoria-de-Sostenibilidad-2023.pdf';
import sostenibilidad2024 from '../pdfs/Informe-de-Gestion-y-Memoria-de-Sostenibilidad-2024.pdf';

export interface Informe {
  title: string;
  /** URL local resuelta por el bundler (nunca el WordPress antiguo). */
  pdf: string;
}

export interface InformesPorAnio {
  year: string;
  informes: Informe[];
}

export const INFORMES_POR_ANIO: InformesPorAnio[] = [
  {
    year: '2024',
    informes: [
      { title: 'Informe de Gobierno Corporativo 2024', pdf: gobiernoCorporativo2024 },
      { title: 'Informe de Gestión y Memoria de Sostenibilidad 2024', pdf: sostenibilidad2024 },
    ],
  },
  {
    year: '2023',
    informes: [
      { title: 'Informe de Gobierno Corporativo 2023', pdf: gobiernoCorporativo2023 },
      { title: 'Informe de Gestión y Memoria de Sostenibilidad 2023', pdf: sostenibilidad2023 },
    ],
  },
  {
    year: '2022',
    informes: [
      { title: 'Informe de Gobierno Corporativo 2022', pdf: gobiernoCorporativo2022 },
      { title: 'Informe de Gestión y Memoria de Sostenibilidad 2022', pdf: sostenibilidad2022 },
    ],
  },
];

export const DESTACADOS_2024 = {
  gobiernoCorporativo: gobiernoCorporativo2024,
  memoriaSostenibilidad: sostenibilidad2024,
};
