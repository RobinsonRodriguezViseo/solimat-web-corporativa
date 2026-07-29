import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Los globales van PRIMERO, a propósito: `App` arrastra todos los CSS Modules de
// los componentes, y el CSS inyectado más tarde gana a igualdad de especificidad.
// Con el orden inverso, `.btn` de theme.css pisaba el `background`/`color` de
// cualquier variante de botón (texto azul sobre fondo azul, ilegible).
import './styles/reset.css';
import './styles/theme.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
