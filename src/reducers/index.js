import { combineReducers } from 'redux';
import { populateReducer } from './populateReducer';

const rootReducer = combineReducers({
  types: populateReducer
});

export default rootReducer;
