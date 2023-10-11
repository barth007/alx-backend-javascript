export default function getStudentIdsSum(listStudent) {
  const initial = 0;
  const reducedValue = listStudent.reduce((accumulator, item) => {
    let newValue = accumulator;
    newValue += item.id;
    return newValue;
  }, initial);
  return reducedValue;
}
