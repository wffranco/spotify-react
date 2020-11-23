import { client_id, basic_token, base_url, auth_url, api } from '../../services/api';

const storage = 'auth_token';

export const init = localStorage.getItem(storage) || null;

export const reducers = {
  'token/validating': null,
  'token/save'({ token_type, access_token, reload = false }) {
    const token = `${token_type} ${access_token}`;
    localStorage.setItem(storage, token);
    if (reload) window.location = `${window.location.origin}/${window.location.hash}`;
    return token;
  },
  'token/remove'() {
    localStorage.removeItem(storage);
    return null;
  },
}

export const actions = {
  validateCode: ({dispatch}) => async() => {
    // console.log('validate code');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (!code) return;

    // console.log('validating code');
    dispatch('token/validating');
    const response = await api('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basic_token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=${base_url}`,
    });
    // console.log('validation response:', response);
    const { access_token, token_type } = response;

    if (access_token && token_type) {
      // console.log('code valid');
      dispatch('token/save', {
        token_type,
        access_token,
        reload: true,
      });
    }

    return response;
  },
  login_url: () => `${auth_url}?client_id=${client_id}&response_type=code&redirect_uri=${base_url}`,
};

const token = { init, reducers, actions };
export default token;
