import { combineReducers } from 'redux';
import rates from './rates';
import history from './history';
import current from './current';

const rootReducer = combineReducers({
  rates,
  history,
  current,
});

export default rootReducer;
