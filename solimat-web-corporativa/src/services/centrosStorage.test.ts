import { afterEach, describe, expect, it } from 'vitest';
import { makeCentro } from '../test/factories';
import { clearStoredSelection, readStoredSelection, saveStoredSelection } from './centrosStorage';

afterEach(() => {
  window.localStorage.clear();
});

describe('centrosStorage', () => {
  it('round-trips the selected province and its centros', () => {
    const centros = [makeCentro()];
    saveStoredSelection('45', 'Toledo', centros);

    expect(readStoredSelection()).toEqual({ code: '45', name: 'Toledo', centros });
  });

  it('uses the same keys as the Portal de Pacientes', () => {
    saveStoredSelection('13', 'Ciudad Real', []);

    expect(window.localStorage.getItem('selectedProvince')).toBe('13');
    expect(window.localStorage.getItem('selectedProvinceName')).toBe('Ciudad Real');
    expect(window.localStorage.getItem('selectedCenters')).toBe('[]');
  });

  it('returns null when there is no previous selection', () => {
    expect(readStoredSelection()).toBeNull();
  });

  it('returns null when only part of the selection is stored', () => {
    window.localStorage.setItem('selectedProvince', '45');

    expect(readStoredSelection()).toBeNull();
  });

  it('discards and clears a tampered payload instead of trusting it', () => {
    window.localStorage.setItem('selectedProvince', '45');
    window.localStorage.setItem('selectedProvinceName', 'Toledo');
    window.localStorage.setItem(
      'selectedCenters',
      JSON.stringify([{ id: '1', name: 'Falso', type: 'pirata' }]),
    );

    expect(readStoredSelection()).toBeNull();
    expect(window.localStorage.getItem('selectedCenters')).toBeNull();
  });

  it('discards a payload that is not valid JSON', () => {
    window.localStorage.setItem('selectedProvince', '45');
    window.localStorage.setItem('selectedProvinceName', 'Toledo');
    window.localStorage.setItem('selectedCenters', '{not json');

    expect(readStoredSelection()).toBeNull();
  });

  it('clears every key at once', () => {
    saveStoredSelection('45', 'Toledo', [makeCentro()]);
    clearStoredSelection();

    expect(readStoredSelection()).toBeNull();
    expect(window.localStorage.getItem('selectedProvince')).toBeNull();
  });
});
