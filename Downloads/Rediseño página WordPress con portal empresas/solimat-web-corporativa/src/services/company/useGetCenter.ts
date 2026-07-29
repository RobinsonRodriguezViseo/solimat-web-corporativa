import { useCallback, useState } from 'react';
import { UtilsService } from '../solimatEndpoint';
import type { Centro } from '../../types/centro';
import { readRedCentrosConfig } from '../config';
import { mapCentro } from '../mapCentro';
import { HTTP_NOT_FOUND, getHttpStatus } from '../errors';
import { extractResponseData, isEmptyPayload, parseCentro } from '../validation';

/**
 * `GET {RED_CENTROS_PATH}/api/v2/centro/{Id}` (guid).
 *
 * Distingue tres desenlaces para que la ficha pueda separar "no existe" de
 * "no hemos podido consultarlo":
 * - `Centro`      → encontrado.
 * - `null`        → el API responde 404 o sin contenido: centro inexistente.
 * - `undefined`   → fallo (red, configuración o contrato); `errorGetCenter` a `true`.
 */
const useGetCenter = () => {
  const [successGetCenter, setSuccessGetCenter] = useState(false);
  const [errorGetCenter, setErrorGetCenter] = useState(false);
  const [loadingGetCenter, setLoadingGetCenter] = useState(false);

  const getCenter = useCallback(async (centroId: string): Promise<Centro | null | undefined> => {
    setLoadingGetCenter(true);

    try {
      const { baseUrl, functionsKey } = readRedCentrosConfig();
      const apiUtils = new UtilsService(baseUrl, functionsKey);

      const response: unknown = await apiUtils.getCenter(centroId);
      const payload = extractResponseData(response);

      const centro = isEmptyPayload(payload) ? null : mapCentro(parseCentro(payload));

      setSuccessGetCenter(true);
      setErrorGetCenter(false);
      setLoadingGetCenter(false);

      return centro;
    } catch (err) {
      // Un 404 no es un fallo del servicio: es un centro que no existe.
      if (getHttpStatus(err) === HTTP_NOT_FOUND) {
        setSuccessGetCenter(true);
        setErrorGetCenter(false);
        setLoadingGetCenter(false);

        return null;
      }

      console.error(err);
      setLoadingGetCenter(false);
      setSuccessGetCenter(false);
      setErrorGetCenter(true);

      return undefined;
    }
  }, []);

  return {
    getCenter,
    successGetCenter,
    errorGetCenter,
    loadingGetCenter,
  };
};

export default useGetCenter;
