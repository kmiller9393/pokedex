import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';

const rootReducer = combineReducers({
  pokedata: populateReducer
});

export default rootReducer;
