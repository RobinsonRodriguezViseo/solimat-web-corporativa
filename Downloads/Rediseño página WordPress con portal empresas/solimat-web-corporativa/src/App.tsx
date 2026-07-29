import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './components/shared/RootLayout';
import AsistenciaSanitariaPage from './pages/AsistenciaSanitariaPage';
import AvisoLegalPage from './pages/AvisoLegalPage';
import CanalEticoPage from './pages/CanalEticoPage';
import CentroPage from './pages/CentroPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewsCreatorPage from './pages/NewsCreatorPage';
import NoticiaPage from './pages/NoticiaPage';
import NoticiasPage from './pages/NoticiasPage';
import NuestroEquipoPage from './pages/NuestroEquipoPage';
import NuestrosDatosPage from './pages/NuestrosDatosPage';
import ParaAsesoriaLaboralPage from './pages/ParaAsesoriaLaboralPage';
import ParaAutonomoPage from './pages/ParaAutonomoPage';
import ParaEmpresaPage from './pages/ParaEmpresaPage';
import ParaTrabajadorPage from './pages/ParaTrabajadorPage';
import PerfilDelContratantePage from './pages/PerfilDelContratantePage';
import PodemosAyudartePage from './pages/PodemosAyudartePage';
import PodemosSerTuMutuaPage from './pages/PodemosSerTuMutuaPage';
import PoliticaDePrivacidadPage from './pages/PoliticaDePrivacidadPage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';
import PrestacionesEconomicasPage from './pages/PrestacionesEconomicasPage';
import PromocionDeLaPrevencionPage from './pages/PromocionDeLaPrevencionPage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import RecursosYHerramientasPage from './pages/RecursosYHerramientasPage';
import RedDeCentrosPage from './pages/RedDeCentrosPage';
import ReferenciasLegislativasPage from './pages/ReferenciasLegislativasPage';
import TrabajaConNosotrosPage from './pages/TrabajaConNosotrosPage';
import VozDelUsuarioPage from './pages/VozDelUsuarioPage';

/**
 * Árbol de rutas sin el router, para poder montarlo con `MemoryRouter` en los
 * tests. `App` es el que decide el router real de la aplicación.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />

        {/* Conócenos */}
        <Route path="quienes-somos" element={<QuienesSomosPage />} />
        <Route path="quienes-somos/nuestros-datos" element={<NuestrosDatosPage />} />
        <Route path="quienes-somos/podemos-ser-tu-mutua" element={<PodemosSerTuMutuaPage />} />
        <Route path="quienes-somos/podemos-ayudarte" element={<PodemosAyudartePage />} />
        <Route path="trabaja-con-nosotros" element={<TrabajaConNosotrosPage />} />
        <Route path="noticias" element={<NoticiasPage />} />
        <Route path="noticias/:id" element={<NoticiaPage />} />

        {/* Servicios */}
        <Route path="nuestro-equipo" element={<NuestroEquipoPage />} />
        <Route path="prestaciones-economicas" element={<PrestacionesEconomicasPage />} />
        <Route path="asistencia-sanitaria" element={<AsistenciaSanitariaPage />} />
        <Route path="promocion-de-la-prevencion" element={<PromocionDeLaPrevencionPage />} />

        {/* Trámites por perfil */}
        <Route path="para-empresa" element={<ParaEmpresaPage />} />
        <Route path="para-trabajador" element={<ParaTrabajadorPage />} />
        <Route path="para-autonomo" element={<ParaAutonomoPage />} />
        <Route path="para-asesoria-laboral" element={<ParaAsesoriaLaboralPage />} />

        {/* Recursos y centros */}
        <Route path="recursos-y-herramientas" element={<RecursosYHerramientasPage />} />
        <Route path="red-de-centros" element={<RedDeCentrosPage />} />
        <Route path="red-de-centros/:id" element={<CentroPage />} />

        {/* Transparencia y atención */}
        <Route path="canal-etico-y-de-informacion" element={<CanalEticoPage />} />
        <Route path="voz-del-usuario" element={<VozDelUsuarioPage />} />
        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />
        <Route path="perfil-del-contratante" element={<PerfilDelContratantePage />} />
        <Route path="referencias-legislativas" element={<ReferenciasLegislativasPage />} />

        {/* Información legal */}
        <Route path="aviso-legal" element={<AvisoLegalPage />} />
        <Route path="politica-de-privacidad" element={<PoliticaDePrivacidadPage />} />

        {/* Administración */}
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dashboard/crear-noticia" element={<NewsCreatorPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
