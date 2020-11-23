import { createStore } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import middleware from './middleware';
import reducers, { actions } from './reducers';

const store = createStore(reducers, middleware);
window.store = store;

export default store;

export { useSelector };

export function useActions(names = null) {
  const dispatch = useDispatch();
  if (names instanceof Array) return Object.fromEntries(names.map(name => [name, dispatch(actions[name])]));

  return Object.fromEntries(Object.entries(actions).map(([name, action]) => [name, dispatch(action)]));
}
