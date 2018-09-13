import { populateReducer } from './populateReducer';

describe('populateReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = populateReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return state with an array of types', () => {
    const expected = [
      { id: 1, name: 'normal', pokemon: [] },
      { id: 2, name: 'flying', pokemon: [] }
    ];

    const result = populateReducer(expected, {});

    expect(result).toEqual(expected);
  });
});
