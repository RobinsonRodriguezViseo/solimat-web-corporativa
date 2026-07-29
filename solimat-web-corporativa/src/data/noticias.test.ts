import { describe, expect, it } from 'vitest';
import { getNoticiaById, noticias } from './noticias';

describe('noticias data', () => {
  it('contains 24 articles with unique sequential ids', () => {
    expect(noticias).toHaveLength(24);
    expect(noticias.map((noticia) => noticia.id)).toEqual(
      Array.from({ length: 24 }, (_, index) => index + 1),
    );
  });

  it('gives the 3 featured home articles (AECC, Seguridad y Salud, ISO 9001)', () => {
    expect(getNoticiaById(1)?.title).toMatch(/Asociación Española Contra el Cáncer/);
    expect(getNoticiaById(2)?.title).toMatch(/Día Mundial de la Seguridad y Salud/);
    expect(getNoticiaById(3)?.title).toMatch(/ISO 9001/);
  });

  it('returns undefined for an unknown id', () => {
    expect(getNoticiaById(999)).toBeUndefined();
  });
});
