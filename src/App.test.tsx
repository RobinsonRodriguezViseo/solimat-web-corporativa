import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { AppRoutes } from './App';

/**
 * La Red de Centros llama al API al montar. Se sustituye el paquete de
 * endpoints por promesas que no resuelven: aquí solo se comprueba el enrutado,
 * y así ninguna ruta sale a la red ni depende del contenido del API.
 */
vi.mock('@solimat/solimat-web-endpoint/lib/company', () => ({
  default: {
    Center: class {
      getProvinces = () => new Promise(() => {});
    },
  },
}));

vi.mock('@solimat/solimat-web-endpoint/lib/utils', () => ({
  default: {
    UtilsService: class {
      getCentersByProvince = () => new Promise(() => {});
      getCenter = () => new Promise(() => {});
    },
  },
}));

/** Varias páginas usan useScrollSpy; jsdom no implementa IntersectionObserver. */
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
  takeRecords = vi.fn();
}

/**
 * Cada ruta de la tabla del README con el <h1> que debe pintar.
 * Si alguien añade una página y olvida enrutarla, o cambia un path,
 * este test lo detecta.
 */
const ROUTES: Array<{ path: string; heading: RegExp }> = [
  { path: '/', heading: /Mejoramos la experiencia del Portal del Paciente/ },
  { path: '/quienes-somos', heading: /^Quiénes somos$/ },
  { path: '/quienes-somos/nuestros-datos', heading: /^Nuestros datos$/ },
  { path: '/quienes-somos/podemos-ser-tu-mutua', heading: /^Podemos ser tu mutua$/ },
  { path: '/quienes-somos/podemos-ayudarte', heading: /ayudarte/i },
  { path: '/trabaja-con-nosotros', heading: /^Trabaja con nosotros$/ },
  { path: '/noticias', heading: /^Noticias$/ },
  { path: '/noticias/1', heading: /Asociación Española Contra el Cáncer/ },
  { path: '/nuestro-equipo', heading: /equipo/i },
  { path: '/prestaciones-economicas', heading: /Prestaciones/i },
  { path: '/asistencia-sanitaria', heading: /Asistencia/i },
  { path: '/promocion-de-la-prevencion', heading: /[Pp]revención/ },
  { path: '/para-empresa', heading: /[Ee]mpresa/ },
  { path: '/para-trabajador', heading: /[Tt]rabajador/ },
  { path: '/para-autonomo', heading: /[Aa]utónomo/ },
  { path: '/para-asesoria-laboral', heading: /[Aa]sesoría/ },
  { path: '/recursos-y-herramientas', heading: /Recursos/i },
  { path: '/red-de-centros', heading: /[Cc]entros/ },
  // El :id pasó de numérico a guid al conectar la Red de Centros con el API.
  // Con la llamada mockeada sin resolver, la ficha se queda en "Cargando centro…";
  // lo que se comprueba aquí es el enrutado, no el contenido (eso lo cubre
  // CentroPage.test.tsx). La regexp acepta cualquiera de sus estados.
  { path: '/red-de-centros/3fa85f64-5717-4562-b3fc-2c963f66afa6', heading: /[Cc]entro/ },
  { path: '/canal-etico-y-de-informacion', heading: /Canal/i },
  { path: '/voz-del-usuario', heading: /Voz del Usuario/i },
  { path: '/preguntas-frecuentes', heading: /[Pp]reguntas/ },
  { path: '/perfil-del-contratante', heading: /[Cc]ontratante/ },
  { path: '/referencias-legislativas', heading: /[Ll]egislativas/ },
  { path: '/aviso-legal', heading: /[Aa]viso [Ll]egal/ },
  { path: '/politica-de-privacidad', heading: /[Pp]rivacidad/ },
];

describe('AppRoutes', () => {
  beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  it('enruta las 24 páginas de la tabla del README más las legales', () => {
    // 24 de la tabla del README + /aviso-legal + /politica-de-privacidad.
    expect(ROUTES).toHaveLength(26);
  });

  it.each(ROUTES)('$path monta su página dentro del layout', ({ path, heading }) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // El layout compartido siempre está presente. Se comprueban los landmarks
    // (no un texto suelto: "Urgencias 24h" aparece también dentro del contenido
    // de /asistencia-sanitaria, igual que en el diseño original).
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    // …y la página pinta su encabezado principal.
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });
});

describe('navegación desde los submenús del header', () => {
  beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  const CASES: Array<{ group: RegExp; item: string; heading: RegExp }> = [
    { group: /Conócenos/, item: 'Quiénes somos', heading: /^Quiénes somos$/ },
    { group: /Conócenos/, item: 'Nuestros datos', heading: /^Nuestros datos$/ },
    { group: /Servicios/, item: 'Asistencia Sanitaria', heading: /Asistencia/i },
    { group: /Trámites/, item: 'Para Empresa', heading: /[Ee]mpresa/ },
  ];

  it.each(CASES)('$item navega a su página', async ({ group, item, heading }) => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    );

    // Se acota al header: varias páginas repiten estos textos en su contenido.
    const header = within(screen.getByRole('banner'));
    await user.click(header.getByRole('button', { name: group }));
    await user.click(header.getByRole('link', { name: item }));

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });
});
