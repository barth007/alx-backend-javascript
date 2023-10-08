export default function getStudentsByLocation(listStudent, city) {
  const arr = listStudent.filter((value) => value.location === city);
  return arr;
}
