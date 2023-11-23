export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        boby: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
