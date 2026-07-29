/** Errores propios de la capa de servicios de la Red de Centros. */

/** Falta (o está vacía) una variable de entorno necesaria para llamar al API. */
export class ApiConfigError extends Error {
  constructor(variableName: string) {
    super(
      `Falta la variable de entorno "${variableName}". Copia .env.example a .env y rellena su valor.`,
    );
    this.name = 'ApiConfigError';
  }
}

/** La respuesta del API no cumple el contrato esperado. */
export class ApiValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiValidationError';
  }
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

/**
 * Extrae el código HTTP de un error de axios sin recurrir a `any`.
 * Devuelve `undefined` si el error no viene de una respuesta HTTP
 * (p. ej. un fallo de red o un error de validación nuestro).
 */
export const getHttpStatus = (error: unknown): number | undefined => {
  if (!isRecord(error)) return undefined;

  const response: unknown = error['response'];
  if (!isRecord(response)) return undefined;

  const status: unknown = response['status'];
  return typeof status === 'number' ? status : undefined;
};

export const HTTP_NOT_FOUND = 404;
