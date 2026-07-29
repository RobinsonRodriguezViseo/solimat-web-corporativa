import { describe, expect, it } from 'vitest';
import { CenterService, UtilsService, resolveExport } from './solimatEndpoint';

/**
 * Este test NO mockea `@solimat/solimat-web-endpoint`: carga el paquete real a
 * través del pipeline de Vite, que es donde estaba el fallo original
 * ("Utils.UtilsService is not a constructor"). Los demás tests lo mockean, así
 * que ninguno cubría la interoperabilidad CJS→ESM.
 *
 * No sale a la red: solo se comprueba que las clases se resuelven y se pueden
 * instanciar; ningún método llega a invocarse.
 */
describe('solimatEndpoint (interoperabilidad real del paquete)', () => {
  it('resuelve UtilsService como constructor', () => {
    expect(typeof UtilsService).toBe('function');
    expect(() => new UtilsService('https://example.test', 'key')).not.toThrow();
  });

  it('resuelve CenterService como constructor', () => {
    expect(typeof CenterService).toBe('function');
    expect(() => new CenterService('https://example.test', 'key')).not.toThrow();
  });

  it('expone los métodos que consumen los hooks', () => {
    const utils = new UtilsService('https://example.test', 'key');
    const center = new CenterService('https://example.test', 'key');

    expect(typeof utils.getCentersByProvince).toBe('function');
    expect(typeof utils.getCenter).toBe('function');
    expect(typeof center.getProvinces).toBe('function');
  });

  /**
   * La 1.1.35 cambió esta cabecera a `ocp-apim-subscription-key` (pasa por Azure
   * API Management) en una versión de PARCHE. Como nuestras Function Apps se
   * llaman directamente, eso devolvía 401 en todos los centros. Por eso el
   * paquete está clavado a 1.1.30 sin `^` en package.json.
   * Si alguien lo sube y la cabecera cambia, este test lo caza.
   */
  it('autentica los centros con x-functions-key, no con una subscription key de APIM', () => {
    const utils = new UtilsService('https://example.test', 'la-clave') as unknown as {
      axios: { defaults: { headers: { common: Record<string, unknown> } } };
    };
    const headers = utils.axios.defaults.headers.common;

    expect(headers['x-functions-key']).toBe('la-clave');
    expect(headers['ocp-apim-subscription-key']).toBeUndefined();
  });

  /**
   * El fallo que costó encontrar: el número de envoltorios `default` cambia
   * según el entorno. Vitest (Node) deja UNO; el navegador deja DOS, porque Vite
   * envuelve el CJS con `{ ...m, default: m }` sobre un `m` que ya era
   * `{ default: … }`. Desenvolver una sola vez funcionaba en los tests y fallaba
   * en el navegador con "is not a constructor", así que aquí se cubren ambos.
   */
  describe('resolveExport', () => {
    class Fake {}

    it('encuentra la clase sin envoltorio', () => {
      expect(resolveExport({ Center: Fake }, 'Center')).toBe(Fake);
    });

    it('encuentra la clase con un envoltorio default (Node)', () => {
      expect(resolveExport({ default: { Center: Fake } }, 'Center')).toBe(Fake);
    });

    it('encuentra la clase con doble envoltorio default (navegador)', () => {
      expect(resolveExport({ default: { default: { Center: Fake } } }, 'Center')).toBe(Fake);
    });

    it('falla con un mensaje claro si el paquete cambia de forma', () => {
      expect(() => resolveExport({ otraCosa: Fake }, 'Center')).toThrow(/No se pudo resolver/);
    });
  });

  it('autentica los maestros con x-functions-key', () => {
    const center = new CenterService('https://example.test', 'la-clave') as unknown as {
      axios: { defaults: { headers: { common: Record<string, unknown> } } };
    };

    expect(center.axios.defaults.headers.common['x-functions-key']).toBe('la-clave');
  });
});
