import { combineReducers } from 'redux';

import events from './events';
import app from './app';

export default combineReducers({
  app,
  events
});
