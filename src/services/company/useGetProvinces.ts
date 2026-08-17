import { useCallback, useState } from 'react';
import { CenterService } from '../solimatEndpoint';
import type { Provincia } from '../../types/centro';
import { readMaestrosConfig } from '../config';
import { mapProvincias } from '../mapCentro';
import { extractResponseData, parseProvincias } from '../validation';

/**
 * `GET {MAESTROS_PATH}/api/v2/provincias`.
 *
 * Misma firma que el hook homónimo del Portal de Pacientes. El paquete
 * `@solimat/solimat-web-endpoint` devuelve `Promise<any>`: su `data` se valida
 * contra el DTO y se mapea al dominio antes de salir de aquí, de modo que la UI
 * nunca ve datos sin tipar.
 */
const useGetProvinces = () => {
  const [successGetProvinces, setSuccessGetProvinces] = useState(false);
  const [errorGetProvinces, setErrorGetProvinces] = useState(false);
  const [loadingGetProvinces, setLoadingGetProvinces] = useState(false);

  const getProvinces = useCallback(async (): Promise<Provincia[] | undefined> => {
    setLoadingGetProvinces(true);

    try {
      const { baseUrl, functionsKey } = readMaestrosConfig();
      const apiCompany = new CenterService(baseUrl, functionsKey);

      const response: unknown = await apiCompany.getProvinces();
      const provincias = mapProvincias(parseProvincias(extractResponseData(response)));

      setSuccessGetProvinces(true);
      setErrorGetProvinces(false);
      setLoadingGetProvinces(false);

      return provincias;
    } catch (err) {
      console.error(err);
      setLoadingGetProvinces(false);
      setSuccessGetProvinces(false);
      setErrorGetProvinces(true);

      return undefined;
    }
  }, []);

  return {
    getProvinces,
    successGetProvinces,
    errorGetProvinces,
    loadingGetProvinces,
  };
};

export default useGetProvinces;
