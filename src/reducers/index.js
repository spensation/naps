import { combineReducers } from 'redux';
import { napReducer } from './naps_reducer';

const rootReducer = combineReducers({
  naps: napReducer,
  nap: napReducer,
 
});

export default rootReducer;