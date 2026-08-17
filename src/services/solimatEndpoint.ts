import * as companyModule from '@solimat/solimat-web-endpoint/lib/company';
import * as utilsModule from '@solimat/solimat-web-endpoint/lib/utils';

type UtilsNamespace = typeof utilsModule.default;
type CompanyNamespace = typeof companyModule.default;

/**
 * Punto único de contacto con `@solimat/solimat-web-endpoint`.
 *
 * El paquete es CommonJS y publica sus clases bajo `default`
 * (`export default { UtilsService }` / `export default { Center, … }`).
 * El número de envoltorios `default` que acaba viendo el código depende del
 * entorno: Node deja un nivel y el navegador dos, porque Vite envuelve el módulo
 * CJS con `{ ...m, default: m }` sobre un `m` que YA era `{ default: … }`.
 * Desenvolver un número fijo de veces falla en un entorno o en el otro
 * ("is not a constructor"), así que se busca la clase bajando por `default`
 * hasta encontrarla.
 *
 * Se importan las SUBRUTAS (`lib/company`, `lib/utils`) en vez de la raíz del
 * paquete: la raíz arrastra `lib/routes/history`, que toca `document` al
 * cargarse y rompería cualquier entorno sin DOM.
 */
export function resolveExport<T>(module: unknown, exportName: string): T {
  let current: unknown = module;

  // Cota defensiva: en la práctica son 1 o 2 niveles.
  for (let depth = 0; depth < 5; depth += 1) {
    if (typeof current === 'object' && current !== null && exportName in current) {
      return (current as Record<string, unknown>)[exportName] as T;
    }

    const next: unknown = (current as { default?: unknown } | null)?.default;
    if (next === undefined || next === current) break;
    current = next;
  }

  throw new Error(
    `No se pudo resolver "${exportName}" de @solimat/solimat-web-endpoint. ` +
      'Puede que el paquete haya cambiado la forma de sus exports.',
  );
}

/** Centros: `getCentersByProvince`, `getCenter`. */
export const UtilsService = resolveExport<UtilsNamespace['UtilsService']>(
  utilsModule,
  'UtilsService',
);

/** Maestros: `getProvinces`. */
export const CenterService = resolveExport<CompanyNamespace['Center']>(companyModule, 'Center');
