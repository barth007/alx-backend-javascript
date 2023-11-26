export default function handleResponseFromAPI(promise) {
  promise.then((response) => {
    /* eslint-disable no-unused-vars */
    const inactiveResponse = response;
    /* eslint-enable no-unused-vars */
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch((error) => {
    /* eslint-disable no-unused-vars */
    const inactiveError = error;
    /* eslint-enable no-unused-vars */
    return new Error();
  });
}
