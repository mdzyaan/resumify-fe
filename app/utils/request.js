import axios from 'axios';
import invariant from 'invariant';
import validate from './validate.js';

const prefix = 'path: utils/request.js';
const baseUrl = 'https://resumify-be.herokuapp.com/';
// const baseUrl = process.env.REACT_APP_BASE_URL;

const checkRequest = ({ method, url, config }) => {
  const constraints = {
    method: validate.contains(['get', 'post', 'put', 'patch', 'delete'], method),
    url: validate({ url }, { url: { url: true } }) === undefined ? true : false,
    config: validate.isObject(config),
  };

  invariant(
    constraints.method,
    `${prefix} - method should be oneOf ['get', 'post', 'put', 'patch', 'delete']`
  );
  invariant(constraints.url, `${prefix} - url is not a valid url`);

  if (config) {
    invariant(constraints.config, `${prefix} - config is not an object`);
  }
};

const buildFullUrl = endpoint => {
  const lastChar = baseUrl.substr(-1);
  const validBaseUrl = lastChar === '/' ? baseUrl : `${baseUrl}/`;
  return `${validBaseUrl}${endpoint}`;
};

/**
 * @dev - request handle Promise based HTTP client for the browser and node.js
 *
 * @param {string} method - oneOf ['get', 'post', 'put', 'patch', 'delete']
 * @param {string} endpoint - e.g 'app/register'
 * @param {object} config - an object
 * https://github.com/axios/axios#request-config
 */
export default function request({ method, endpoint, config }) {
  const url = buildFullUrl(endpoint);

  // checkRequest({ method, url, config });


  return axios.request({
    method,
    url,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    ...config,
  });
}
