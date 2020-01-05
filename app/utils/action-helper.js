const START = 'START';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

/**
 * @return an object with START,SUCCESS,ERROR
 */
export function defineApiActionTypes(base) {
  return {
    START: `${base}_${START}`,
    SUCCESS: `${base}_${SUCCESS}`,
    ERROR: `${base}_${ERROR}`,
  };
}

/**
 * @params {CONSTANT} type - action types
 * @params {object} payload -payload to send to api
 * @params {objet} metadata - metadata
 * @return {type, payload, metadata}
 */
export function defineAction({ type, payload = {}, metadata = {} }) {
  if (!type || type.length === 0 || type.trim().length === 0)
    throw new Error('Action should have a type');

  return {
    type,
    payload,
    metadata,
  };
}
