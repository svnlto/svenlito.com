import {
  FILTER_EVENTS,
  EVENTS_ALL,
  THEME_CONFIG
} from '../constants/ActionTypes';

export function filterBy(value) {
  return { type: FILTER_EVENTS, value };
}

export function showAll() {
  return { type: EVENTS_ALL };
}

export function setTheme(config) {
  return { type: THEME_CONFIG, config };
}
