import { mapStateToProps } from './PokeCard';

describe('mapStateToProps', () => {
  it('should return a types array', () => {
    const mockState = {
      types: [{ id: 1, name: 'normal', pokemon: [] }]
    };

    const expected = {
      types: [{ id: 1, name: 'normal', pokemon: [] }]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
