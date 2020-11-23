import { applyMiddleware, compose } from 'redux';
import { actions } from './reducers';

function dispatchMiddleware({dispatch, getState}) {
  const store = {
    actions,
    dispatch: (type, payload = {}) => type instanceof Function ? dispatch(type) : dispatch({type, payload}),
    getState,
    get state() { return getState(); },
  };
  return next => action => {
    // console.log('action:', action);
    if (action instanceof Function) return action(store);
    if (action === undefined) return;
    return next(action);
  }
};

// enable developer tool if exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(dispatchMiddleware));

export default middleware;
