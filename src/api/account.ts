import axios from 'axios';
export function deleteAccount(data) {
  return axios.post('/v1/user/login', data);
}
