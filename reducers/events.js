import {
  FILTER_EVENTS,
  EVENTS_ALL
} from '../constants/ActionTypes';

import data from '../data/events.json';
import { getUniqueYears } from '../utils';

const initialState = {
  years: getUniqueYears(data),
  data
};

const getFullYear = (item) => {
  return new Date(item.date).getFullYear();
};

const handlers = {
  [EVENTS_ALL]: (state) => {
    return { ...state };
  },
  [FILTER_EVENTS]: (state, action) => {
    const mapped = data.map(item => {
      if (getFullYear(item) === parseInt(action.value, 10)) {
        return Object.assign({}, item, {
          visible: true
        });
      }
      return item;
    });

    return Object.assign({}, ...state, { data: mapped });
  }
};

const eventsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};

export default eventsReducer;
