import { combineReducers } from 'redux';
import auth from './auth';
import messages from './messages';

const reducer = combineReducers({
  auth,
  messages
});

export default reducer;