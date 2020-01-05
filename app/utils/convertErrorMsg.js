export default error => {
  let errMsg = error && error.response && error.response.data && error.response.data.errorMsg;
  let message = error && error.response && error.response.data && error.response.data.message;

  if (message && message.length > 0) {
    return message;
  }
  if (errMsg === undefined || errMsg.length <= 0) {
    errMsg = 'Something went wrong. Please try again.';
  }

  return errMsg;
};
