export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      const user = { firstName, lastName };
      resolve(user);
    } else {
      reject(new Error());
    }
  });
}
