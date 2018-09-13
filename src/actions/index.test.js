import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of POPULATE_PAGE', () => {
    const types = [{ id: '1', name: 'normal', pokemon: [] }];

    const expectedAction = {
      type: 'POPULATE_PAGE',
      types
    };

    const result = actions.populatePage(types);

    expect(result).toEqual(expectedAction);
  });
});
