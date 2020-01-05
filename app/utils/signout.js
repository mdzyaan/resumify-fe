import { BASE_URL } from '../../src/config.js';
import axios from 'axios';

export default function(e, callback) {
  e.preventDefault();
  const TOKEN = localStorage.getItem('insent-publisher-login-token');
  let config = {
    headers: {
      Authorization: 'Bearer ' + TOKEN,
    },
  };
  let data = {};
  axios
    .post(BASE_URL + 'app/logout', data, config)
    .then(response => {
      callback(true, null);
    })
    .catch(error => callback(false, error));
}
