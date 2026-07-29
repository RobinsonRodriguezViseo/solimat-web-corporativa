# Handoff — Web Corporativa Solimat (rediseño React + TypeScript)

## Overview
Rediseño de la web corporativa pública de **Solimat** (Mutua Colaboradora con la Seguridad Social Nº 72), tomando el *look & feel* del proyecto **Portal Empresas** (paleta navy Solimat, tipografía Roboto, tarjetas suaves, cabecera blanca / footer navy).

El objetivo es una web **más moderna, intuitiva y con foco en el perfil Empresa**, respetando el contenido y las secciones del sitio actual.

---

## Sobre los archivos de diseño (LEER PRIMERO)
Los archivos en `design-refs/` son **referencias de diseño creadas en HTML** — prototipos que muestran el aspecto e interacción deseados. **NO son código de producción para copiar tal cual.**

Están escritos como *Design Components* (`.dc.html`): usan un pequeño runtime propio (`support.js`, no incluido — no lo necesitas). Ignora esa mecánica: **léelos como HTML + CSS de referencia visual**. Todo el estilo real vive en `design-refs/theme.css` (variables CSS: colores, tipografía, espaciados, sombras, radios) y en los estilos inline de cada página.

La tarea es **recrear estos diseños en un proyecto React + TypeScript nuevo**, con la arquitectura que se describe abajo.

## Fidelidad
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciados e interacciones son finales. Recrea la UI de forma fiel al pixel usando los tokens de `theme.css`. No inventes colores ni fuentes nuevas.

---

## Stack y arquitectura objetivo

- **React 19** (última versión) + **TypeScript** + **Vite**.
- **React Router** para el ruteo entre páginas.
- **Patrón de componentes** con dos niveles:
  - **Átomos / componentes compartidos** — reutilizables en toda la app (Button, Tag, Card, Breadcrumb, Header, Footer, TopBar de urgencias, NewsCard, SectionHeading, etc.).
  - **Componentes por página** — específicos de cada página, agrupados en su carpeta.
- **Custom hooks** cuando aporten (p. ej. `useHeroSlider`, `useScrollSpy` para el índice lateral de "Quiénes somos", `useMobileNav`).
- **Cada componente tiene su propio `.tsx` y su `.css`** (CSS Modules recomendado: `Componente.module.css`).
- Directorio `pages/` con **todas las páginas** de la solución.
- Directorio `components/` **dividido por página** (subcarpeta por página) + una subcarpeta `shared/` (o `atoms/`) para lo transversal.

### Estructura de carpetas (obligatoria)

```
src/
├── main.tsx
├── App.tsx                      # Router + layout raíz
├── styles/                      # theme.css (tokens) y reset.css — únicos globales
│   ├── theme.css
│   └── reset.css
├── hooks/
│   ├── useHeroSlider.ts
│   ├── useScrollSpy.ts
│   └── useMobileNav.ts
├── components/
│   ├── shared/                 # átomos y transversales (Header, Footer, Button, NewsCard...)
│   ├── home/, quienesSomos/, noticias/, noticia/, nuestrosDatos/,
│   │   podemosSerTuMutua/, trabajaConNosotros/   # componentes por página
├── pages/                       # una página por ruta
├── data/
│   └── noticias.ts             # 24 artículos transcritos de design-refs/Noticia.dc.html
├── images/                      # TODAS las imágenes (copiar de design-refs/assets)
└── pdfs/                        # TODOS los PDF referenciados por las páginas
```

**Convención de componente:** cada componente vive en su propia carpeta con:
- `Componente.tsx` — el componente.
- `Componente.module.css` — su CSS, importando las variables globales de `theme.css`.
- `index.ts` — re-exporta (`export { default } from './Componente'`).
- `Componente.test.tsx` — test básico de render (React Testing Library).

Solo `theme.css` y `reset.css` son globales. Todas las imágenes van en `src/images/` (nunca en `public/` ni dispersas por componente) y todos los PDF en `src/pdfs/`; importa cada asset donde se use (`import heroImg from '../../images/hero-worker.png'`) para que el bundler lo resuelva y haga hash de caché.

---

## Páginas de la solución

| Página | Ruta sugerida | Archivo de referencia |
|---|---|---|
| Home | `/` | `Home Solimat.dc.html` |
| Quiénes somos | `/quienes-somos` | `Quienes Somos.dc.html` |
| Nuestros datos | `/quienes-somos/nuestros-datos` | `Nuestros Datos.dc.html` |
| Podemos ser tu mutua | `/quienes-somos/podemos-ser-tu-mutua` | `Podemos Ser Tu Mutua.dc.html` |
| Trabaja con nosotros | `/trabaja-con-nosotros` | `Trabaja Con Nosotros.dc.html` |
| ¿Podemos ayudarte? | `/quienes-somos/podemos-ayudarte` | `Podemos Ayudarte.dc.html` |
| Noticias (listado) | `/noticias` | `Noticias.dc.html` |
| Noticia (detalle) | `/noticias/:id` | `Noticia.dc.html` |
| Nuestro equipo | `/nuestro-equipo` | `Nuestro Equipo.dc.html` |
| Prestaciones económicas | `/prestaciones-economicas` | `Prestaciones Economicas.dc.html` |
| Asistencia sanitaria | `/asistencia-sanitaria` | `Asistencia Sanitaria.dc.html` |
| Promoción de la prevención | `/promocion-de-la-prevencion` | `Promocion De La Prevencion.dc.html` |
| Para Empresa | `/para-empresa` | `Para Empresa.dc.html` |
| Para Trabajador | `/para-trabajador` | `Para Trabajador.dc.html` |
| Para Autónomo | `/para-autonomo` | `Para Autonomo.dc.html` |
| Para Asesoría Laboral | `/para-asesoria-laboral` | `Para Asesoria Laboral.dc.html` |
| Recursos y Herramientas | `/recursos-y-herramientas` | `Recursos Y Herramientas.dc.html` |
| Red de Centros | `/red-de-centros` | `Red De Centros.dc.html` |
| Centro (detalle) | `/red-de-centros/:id` | `Centro.dc.html` |
| Canal Ético y de Información | `/canal-etico-y-de-informacion` | `Canal Etico.dc.html` |
| Voz del Usuario | `/voz-del-usuario` | `Voz Del Usuario.dc.html` |
| Preguntas frecuentes | `/preguntas-frecuentes` | `Preguntas Frecuentes.dc.html` |
| Perfil del contratante | `/perfil-del-contratante` | `Perfil Del Contratante.dc.html` |
| Referencias legislativas | `/referencias-legislativas` | `Referencias Legislativas.dc.html` |

Todas comparten **TopBar + Header + Footer**. El menú principal tiene tres grupos con submenús: **Conócenos**, **Servicios**, **Trámites** (ver el Header en cualquier `.dc.html`).

---

## Layout y comportamiento por pantalla

### Layout global
- Ancho de contenido: `var(--layout-max)` = **1140px**, centrado (`.container`).
- **TopBar** (Urgencias 24h): franja fina, discreta, con teléfono nacional `900 111 072` y `+34 925 72 72 72` (fuera de España) + enlace "Centros de atención".
- **Header** blanco, sticky (`--header-h` = 72px), con logo, navegación con submenús desplegables y botones de portales (Portal del Paciente, Portal de Servicios).
- **Footer** navy (`--color-900`): logo blanco, lema, redes sociales, columnas de enlaces, datos de contacto, franja de copyright (`--color-950`).

### Home (`HomePage`)
- **Hero** navy a sangre con **slider automático** de 5 titulares (ver textos en `Home Solimat.dc.html`), eyebrow "Mutua Colaboradora…", dos CTA ("Asóciate con nosotros", "Asistencia sanitaria") y dots de navegación. → hook `useHeroSlider` (autoplay + control por dots).
- **Accesos rápidos** (tiles) a Portal de Servicios, Portal del Paciente, Red de Centros, Recursos y Herramientas.
- **Perfiles**: tarjeta **Empresa destacada** (grande, navy) + tarjetas Trabajador / Autónomo / Asesoría Laboral, cada una con sus enlaces y CTA "Más información".
- **De interés**: Promoción de la Prevención, Voz del Usuario, Canal Ético, Portal de Transparencia.
- **Actualidad / Noticias**: 3 tarjetas (`NewsCard`) con imagen, fecha y título; enlazan al detalle `/noticias/:id`. Botón "Más noticias" → `/noticias`.

### Quiénes somos (`QuienesSomosPage`)
- Hero con breadcrumb.
- **Índice lateral fijo** que resalta la sección activa al hacer scroll → hook `useScrollSpy`.
- Secciones: Las Mutuas (6 actividades numeradas), Nuestra historia, **Solimat hoy** (banda de estadísticas: ~150.000 trabajadores, 12.000 empresas, etc.), **Principios y Valores** (Misión/Visión/Valores como pósters con imagen, alineados a la misma altura), **Sostenibilidad y RSC** (sección con fondo degradado + imagen tenue; Cercanía, Accesibilidad, Transparencia, Fiabilidad; Política Medioambiental; Pacto Mundial/ODS).

### Nuestros datos (`NuestrosDatosPage`)
- Hero + intro (referencia a la Ley 2/2011).
- **Portadas destacadas 2024** (Gobierno Corporativo, Memoria de Sostenibilidad) con botón de descarga.
- **Todos los informes** agrupados por año (2024 / 2023 / 2022), cada uno enlazando a su PDF.

### Podemos ser tu mutua (`PodemosSerTuMutuaPage`)
- Hero, 3 preguntas como tarjetas, bloque CTA con email `web@solimat.com` y teléfono `925 28 37 80`.

### Trabaja con nosotros (`TrabajaConNosotrosPage`)
- Hero, intro con imagen, valores buscados, CTA para enviar CV a `web@solimat.com`.

### Noticias — listado (`NoticiasPage`)
- Hero, **artículo destacado** y rejilla de noticias (título, fecha, extracto, imagen). Cada tarjeta enlaza a `/noticias/:id`.

### Noticia — detalle (`NoticiaPage`)
- Flecha **"← Volver a Noticias"** + breadcrumb (misma línea, flecha a la derecha).
- Imagen destacada al mismo ancho que el título (`max-width: 860px`).
- Cuerpo del artículo (párrafos, subtítulos, cita destacada), bloque "Sobre Solimat".
- **"Comparte"** (LinkedIn, Facebook, X) y **"Otras noticias"** (3 tarjetas con su imagen real).
- Lee el `id` de la ruta; los datos salen de `data/noticias.ts`.

---

## Interacciones y estado
- **Hero slider**: autoplay (~5s), pausa en hover opcional, dots clicables. Estado: índice activo. → `useHeroSlider`.
- **Índice lateral (Quiénes somos)**: resalta la sección visible con IntersectionObserver. → `useScrollSpy`.
- **Nav móvil**: hamburguesa que abre/cierra el menú; submenús desplegables. → `useMobileNav`.
- **Hovers**: tarjetas suben 3px + sombra `--sh-3`; flechas de "Leer más" se desplazan; botones oscurecen a `--c-accent-dark`.
- **Foco de teclado**: `:focus-visible` con `--sh-focus`. No dejar el ring azul por defecto.
- **Responsive**: breakpoints en `theme.css` (1080px colapsa nav a hamburguesa; 720px apila grids a 1 columna).

## Datos (noticias)
En `Noticia.dc.html` hay un array `articles` con ~24 noticias (`id`, `image`, `date`, `title`, `excerpt` y, en las completas, `blocks[]` con párrafos `P()`, subtítulos `H()` y citas `Q()`). **Extrae ese array a `src/data/noticias.ts`** tipado:

```ts
export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'quote'; text: string; author?: string };

export interface Noticia {
  id: number;
  image: string;      // ruta en /assets
  date: string;       // "12 mayo, 2025"
  title: string;
  excerpt: string;
  blocks?: Block[];   // cuerpo completo cuando existe
  url?: string;       // url original (opcional)
}
```

Las 3 noticias de la home mapean a `id` 1 (AECC), 2 (Día Mundial de la Seguridad y Salud) y 3 (ISO 9001).

---

## Design tokens (resumen — fuente de verdad: `design-refs/theme.css`)

**Paleta navy Solimat** (base `#284682`):
`--color-50 #EEF1F8` · `100 #D6DEEC` · `200 #AFBED9` · `300 #7E94BD` · `400 #4F6CA3` · `500 #284682` · `600 #213B6F` · `700 #1B305B` · `800 #142546` · `900 #0E1B33` · `950 #070F1E`

**Acentos semánticos**: `--c-accent` = `--color-500`; hover `--c-accent-dark` = `--color-700`; énfasis `--c-accent-deep` = `--color-900`; fondos tintados `--c-accent-soft/softer`.
**Apoyo**: ámbar `#F79809`, rojo `#D1005D`, verde `#2EAD63`.

**Neutros**: fondo app `#f6f8fb`, superficie `#ffffff`, líneas `#e3e7ee` / `#eef1f6`, texto `#2a3142`, texto fuerte `#11192b`, texto muted `#5e6878`, soft `#8a93a3`.

**Tipografía**: **Roboto** (300/400/500/700). Escala `--fs-xs 12` … `--fs-3xl 36`.
**Espaciado**: `--s-1 4px` … `--s-9 60px`.
**Radios**: `--r-sm 4` · `md 8` · `lg 12` · `xl 16` · `pill 999`.
**Sombras**: `--sh-1/2/3` y `--sh-focus`.
**Transiciones**: `--t-fast .15s`, `--t .2s`.

---

## Assets
En `design-refs/images/` y `design-refs/pdfs/` (cópialos a `src/images/` y `src/pdfs/` respectivamente — **no** a `public/`):
- **Logos**: `solimat-logo.svg`, `logoSolimat-color.png`, `logoBlanco.png` (footer).
- **Imágenes**: `Hospital_San_Jose_de_Solimat.jpg`, `hero-worker.png`, `perfil-*.png`, ilustraciones `illus-*.svg`, fotos de centros y noticias.
- **Noticias**: `noticia-*.png` (una por noticia; el nombre coincide con la entrada en el array).
- **PDFs**: informes de `Nuestros Datos` e infografías referenciadas desde `Preguntas Frecuentes` — todas en `design-refs/pdfs/`, deben quedar en `src/pdfs/` y enlazarse en local (nunca al WordPress antiguo).
- Algunas imágenes del hero/slider aún referencian URLs remotas del WordPress actual (`azrwpcorpo-…azurefd.net/wp-content/…`). Descárgalas a `src/images/` y sustituye la URL por el import local.
- Importa cada asset donde se usa: `import heroImg from '../../images/hero-worker.png'` — no rutas de string sueltas.

## Archivos incluidos
- `design-refs/*.dc.html` — las páginas de referencia (ver tabla de páginas arriba).
- `design-refs/theme.css` — **tokens y estilos** (fuente de verdad del diseño).
- `design-refs/image-slot.js` — componente de placeholder de imagen (solo referencia; en React usa `<img>` normal).
- `design-refs/images/` — todas las imágenes.
- `design-refs/pdfs/` — todos los PDF.

---

## PROMPT sugerido para Claude Code

> Crea un proyecto **React 19 + TypeScript + Vite** con **React Router** que recree fielmente los diseños HTML de `design-refs/` (web corporativa de Solimat). Sigue **exactamente** la estructura de carpetas del README: `src/images/` para todas las imágenes y `src/pdfs/` para todos los PDF (nunca en `public/`), `pages/` con una página por ruta, `components/` dividido en `shared/` (átomos/transversales) y una subcarpeta por página. **Cada componente en su propia carpeta** con `Componente.tsx` + `Componente.module.css` + `index.ts` + `Componente.test.tsx`. Usa custom hooks donde aporte (`useHeroSlider`, `useScrollSpy`, `useMobileNav`). Copia `theme.css` a `src/styles/` como variables globales y **usa esos tokens en todos los componentes** (no inventes colores ni fuentes). Extrae las noticias de `Noticia.dc.html` a `src/data/noticias.ts` tipado. Todos los enlaces a PDF deben apuntar a los archivos importados de `src/pdfs/`, nunca al WordPress antiguo. Empieza por el layout compartido (TopBar + Header + Footer) y la Home; luego el resto de páginas de la tabla. Mantén todo el contenido y los textos tal cual.
