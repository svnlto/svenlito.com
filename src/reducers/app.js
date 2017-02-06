import {
 THEME_CONFIG
} from '../constants/ActionTypes';

import { colors } from '../vars';

const initialState = {
  theme: {
    primary: colors.black,
    secondary: colors.whiteDark10
  }
};


const handlers = {
  [THEME_CONFIG]: (state, action) => {
    return Object.assign({}, ...state, {
      theme: action.config
    });
  }
};

const appReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  if (!handler) return state;
  return { ...state, ...handler(state, action) };
};

export default appReducer;
