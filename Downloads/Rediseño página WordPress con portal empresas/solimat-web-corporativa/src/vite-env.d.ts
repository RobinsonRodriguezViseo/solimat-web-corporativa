/// <reference types="vite/client" />
// `tsconfig.app.json` acota `types` a `vite/client`, así que el namespace global
// `google` (@types/google.maps, que usa @react-google-maps/api) hay que pedirlo
// explícitamente para poder tipar `google.maps.Map` en los componentes de mapa.
/// <reference types="google.maps" />

/**
 * Variables de entorno de la Red de Centros. Tiparlas aquí evita que
 * `import.meta.env` llegue al código como `any` (prohibido por CLAUDE.md).
 * Recuerda: todo lo `VITE_*` viaja en el bundle público. Ver `.env.example`.
 */
interface ImportMetaEnv {
  readonly VITE_REACT_APP_MAESTROS_PATH?: string;
  readonly VITE_REACT_APP_MAESTROS_KEY?: string;
  readonly VITE_REACT_APP_RED_CENTROS_PATH?: string;
  readonly VITE_REACT_APP_RED_CENTROS_KEY?: string;
  readonly VITE_REACT_APP_GOOGLE_MAPS_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Vite resuelve los PDF como URL con hash de caché; `vite/client` no los declara.
declare module '*.pdf' {
  const src: string;
  export default src;
}
