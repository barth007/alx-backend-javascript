import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const result = await Promise.all([
      uploadPhoto(fileName),
      signUpUser(firstName, lastName),
    ]);
    console.log(result);
  } catch (_) {
    /* eslint-disable-line no-empty */
  }
}
