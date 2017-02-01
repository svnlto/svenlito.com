import {
 THEME_CONFIG
} from '../constants/ActionTypes';


const initialState = {
  theme: {
    primary: '',
    secondary: ''
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
