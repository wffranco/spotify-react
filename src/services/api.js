import store from '../redux/store';
import { client_id, client_secret } from '../keys';
// import { get_auth } from './auth';

export { client_id, client_secret };
export const basic_token = btoa(`${client_id}:${client_secret}`);

export const base_url = window.location.origin + window.location.pathname;

export const api_url = 'https://api.spotify.com';
export const auth_url = 'https://accounts.spotify.com/authorize';

function trim(path) {
  return path.replace(/^\/|\/$/g, '').replace(/\/\/+/g, '/');
}

export function api(resource, init = {}) {
  const { token } = store.getState();
  // console.log('api token:', token);

  if (typeof resource === 'string' && !/^\w+:\/\//.test(resource)) {
    resource = `${api_url}/${trim(resource)}`;
  }

  return fetch(resource, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
      ...init.headers,
    },
  }).then(response => {
    if (parseInt(response.status/100) === 2) return response.json();
    throw response;
  });
}
