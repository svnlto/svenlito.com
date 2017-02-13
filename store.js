import { createStore } from 'redux';

let store = null;

const initStore = (reducers, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducers, initialState);
  } else {
    if (!store) {
      store = createStore(reducers, initialState);
    }
    return store;
  }
};

export default initStore;
