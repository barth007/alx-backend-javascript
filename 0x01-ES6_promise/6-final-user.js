import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const results = await Promise.allSettled([
    uploadPhoto(fileName),
    signUpUser(firstName, lastName),
  ]);
  results.forEach((result) => ({
    status: result.status,
    value: result.status === 'fulfiled' ? result.value : result.reason,

  }));
}
