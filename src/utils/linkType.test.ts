import { describe, expect, it } from 'vitest';
import { isExternalHttpLink, isInternalRoute } from './linkType';

describe('linkType utils', () => {
  it('isInternalRoute recognizes app-relative paths', () => {
    expect(isInternalRoute('/noticias')).toBe(true);
    expect(isInternalRoute('https://portal.solimat.com/')).toBe(false);
    expect(isInternalRoute('#centros')).toBe(false);
    expect(isInternalRoute('tel:900111072')).toBe(false);
  });

  it('isExternalHttpLink recognizes http(s) URLs only', () => {
    expect(isExternalHttpLink('https://portal.solimat.com/')).toBe(true);
    expect(isExternalHttpLink('http://portal.solimat.com/')).toBe(true);
    expect(isExternalHttpLink('/noticias')).toBe(false);
    expect(isExternalHttpLink('tel:900111072')).toBe(false);
    expect(isExternalHttpLink('mailto:contigo@solimat.com')).toBe(false);
  });
});
