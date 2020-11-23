export const init = '';

export const reducers = {
  'search/save': (search) => search||'',
  'search/clear': '',
};

export const actions = {
  setSearch: ({dispatch, getState}) => {
    return (search) => {
      if (getState().search === search) return;
      dispatch('search/save', search);
    };
  },
};

const search = { init, reducers, actions };
export default search;
