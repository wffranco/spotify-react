import queryString from '../../utils/queryString';
import { api } from '../../services/api';

const init = () => ({ query: {}, loading: false, tracks: null, error: null });

const merge = (first, ...more) => more.reduce((group, next) => Object.assign(group, next||{}), {...first});

const music = {
  init: init(),
  reducers: {
    'music/clear': () => init(),
    'music/error': (error = null, state) => state.error ? state : merge(state||{}, {error}),
    'music/replace': (data) => merge(init(), data),
    'music/save': (data, state) => merge(state||{}, data, {error: null}),
  },
  actions: {
    searchMusic: ({dispatch, getState}) => async({ query:q = '', page = 1, limit = 20, type = 'track' }) => {
      if (!q) return;
      const state = () => getState().music||{};
      const offset = (page - 1) * limit;
      const query = {q, offset, limit, type};
      const search = queryString(query);
      const searchMatch = () => search === queryString(state().query);
      if (searchMatch()) return;
      dispatch('music/save', {query, loading: true});
      return await api(`v1/search?${search}`).then((music) => {
        if (music && searchMatch()) {
          dispatch('music/save', {loading: false, ...music});
        }
      }).catch(error => {
        dispatch('music/error', {error});
      });
    },
    pagination: ({getState}) => () => {
      const {query = {}, tracks = {}} = getState().music||{};
      let {
        limit = 20,
        offset = 20,
        previous = null,
        next = null,
        total = 0,
      } = tracks||{};
      const current = parseInt(offset/limit) + 1;
      if (previous) previous = current - 1;
      if (next) next = current + 1;
      if (next > 100) next = null;
      let pages = Math.ceil(total/limit);
      if (pages > 100) pages = 100;
      return { query, current, limit, offset, previous, next, pages, total };
    },
  },
};

export default music;
