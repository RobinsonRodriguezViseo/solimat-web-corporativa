import { useCallback, useState } from 'react';
import { UtilsService } from '../solimatEndpoint';
import type { Centro } from '../../types/centro';
import { sortCentersByPriority } from '../../utils/centerSorting';
import { readRedCentrosConfig } from '../config';
import { mapCentros } from '../mapCentro';
import { extractResponseData, parseCentros } from '../validation';

/**
 * `GET {RED_CENTROS_PATH}/api/v2/centros/provincia/{Codigo}`.
 *
 * `provincia` es el **Codigo** de provincia ("45" = Toledo), no el guid, igual
 * que en el Portal de Pacientes. La lista se ordena con `sortCentersByPriority`
 * sobre el DTO (usa `EsCentroPropio` / `TipoCentroId` / `Descripcion`) y solo
 * después se mapea al dominio, de forma que la página recibe el orden definitivo.
 */
const useGetCentersByProvince = () => {
  const [successGetCentersByProvince, setSuccessGetCentersByProvince] = useState(false);
  const [errorGetCentersByProvince, setErrorGetCentersByProvince] = useState(false);
  const [loadingGetCentersByProvince, setLoadingGetCentersByProvince] = useState(false);

  const getCentersByProvince = useCallback(
    async (provincia: string): Promise<Centro[] | undefined> => {
      setLoadingGetCentersByProvince(true);

      try {
        const { baseUrl, functionsKey } = readRedCentrosConfig();
        const apiUtils = new UtilsService(baseUrl, functionsKey);

        const response: unknown = await apiUtils.getCentersByProvince(provincia);
        const dtos = parseCentros(extractResponseData(response));
        const centros = mapCentros(sortCentersByPriority(dtos));

        setSuccessGetCentersByProvince(true);
        setErrorGetCentersByProvince(false);
        setLoadingGetCentersByProvince(false);

        return centros;
      } catch (err) {
        console.error(err);
        setLoadingGetCentersByProvince(false);
        setSuccessGetCentersByProvince(false);
        setErrorGetCentersByProvince(true);

        return undefined;
      }
    },
    [],
  );

  return {
    getCentersByProvince,
    successGetCentersByProvince,
    errorGetCentersByProvince,
    loadingGetCentersByProvince,
  };
};

export default useGetCentersByProvince;
