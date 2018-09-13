// // export const fakeAction = () => ({ type: 'FAKE'})

export const populatePage = types => ({
  type: 'POPULATE_PAGE',
  types
});

export const getPokeData = info => ({
  type: 'GET_POKEDATA',
  info
});
