import { combineReducers } from 'redux';

import music from './music';
import search from './search';
import token from './token';
import user from './user';

const reducers = {
  music,
  search,
  token,
  user,
};

const actions = {};

export default combineReducers(filterReducers(reducers));

export { actions };

// format & filter reducers

function filterReducers(reducers) {
  const filtered = {};
  for (const name in reducers) {
    const reducer = getFunctionReducer(reducers[name]);
    if (reducer instanceof Function) {
      filtered[name] = reducer;
    }
  }
  return filtered;
}

function getFunctionReducer(reducer) {
  if (reducer instanceof Function) return reducer;
  if (reducer instanceof Object) {

    for (const name in reducer.actions) {
      actions[name] = reducer.actions[name];
    }
    return (state = reducer.init, { type, payload }) => {
      const _state = reducer.reducers[type];
      if (_state instanceof Function) return _state(payload, state);
      return _state !== undefined ? _state : state;
    };
  }
}
