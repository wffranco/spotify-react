import { api } from '../../services/api';

let startedFirst = false;

const user = {
  init: false,
  reducers: {
    'user/login': ({user}) => user,
    'user/guest': null,
    'user/logout': null,
  },
  actions: {
    isAuth: ({state}) => () => state.user !== null,
    login: ({actions}) => () => {
      window.location = actions.login_url();
    },
    logout: ({dispatch}) => () => {
      dispatch('token/remove');
      dispatch('user/logout');
    },
    fetchUser: ({dispatch, state}) => {
      let loading = false;
      return async(force = false) => {
        // console.log('fetch user');
        if (startedFirst && !force) return;
        startedFirst = true;

        if (loading) return;
        if (!state.token) {
          dispatch('user/guest');
          return;
        }
        if (!state.token || (state.user && !force)) return;

        loading = true;
        return await api('v1/me').then(user => {
          // console.log('user:', user);
          dispatch('user/login', { user });
        }).catch(error => {
          dispatch('user/guest');
          if (error.error) {
            console.log('unauthorized user');
            dispatch('token/remove');
          } else {
            throw error;
          }
        }).catch(error => {
          console.log('error:', error);
        }).finally(() => {
          loading = false;
        });
      };
    },
  },
};

export default user;
