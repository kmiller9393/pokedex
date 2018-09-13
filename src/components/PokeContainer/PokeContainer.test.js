import { mapDispatchToProps, mapStateToProps } from './PokeContainer';
import { populatePage } from '../../actions';

describe('PokeContainer', () => {
  describe('mapDispatchToProps', () => {
    it('calls dispatch with a populatePage action when componentDidMount is called', () => {
      const mockDispatch = jest.fn();
      const typesData = [{ id: '1', name: 'normal', pokemon: [] }];
      const actionToDispatch = populatePage(typesData);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.populatePageData(typesData);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

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
});
