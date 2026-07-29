import { ApiConfigError } from './errors';

/**
 * Credenciales de una Azure Function App: URL base + `x-functions-key`.
 * El paquete `@solimat/solimat-web-endpoint` las recibe por constructor.
 */
export interface ApiConfig {
  baseUrl: string;
  functionsKey: string;
}

const requireEnv = (variableName: string, value: string | undefined): string => {
  const trimmed = value?.trim() ?? '';
  if (trimmed === '') throw new ApiConfigError(variableName);
  return trimmed;
};

/** Function App de maestros: provincias. */
export const readMaestrosConfig = (): ApiConfig => ({
  baseUrl: requireEnv('VITE_REACT_APP_MAESTROS_PATH', import.meta.env.VITE_REACT_APP_MAESTROS_PATH),
  functionsKey: requireEnv('VITE_REACT_APP_MAESTROS_KEY', import.meta.env.VITE_REACT_APP_MAESTROS_KEY),
});

/** Function App de red de centros: centros por provincia y detalle de centro. */
export const readRedCentrosConfig = (): ApiConfig => ({
  baseUrl: requireEnv(
    'VITE_REACT_APP_RED_CENTROS_PATH',
    import.meta.env.VITE_REACT_APP_RED_CENTROS_PATH,
  ),
  functionsKey: requireEnv(
    'VITE_REACT_APP_RED_CENTROS_KEY',
    import.meta.env.VITE_REACT_APP_RED_CENTROS_KEY,
  ),
});
