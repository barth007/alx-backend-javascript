export default function updateStudentGradeByCity(listStudent, city, newGrades) {
  const filtered = listStudent.filter((cities) => cities.location === city);
  const mappedArray = filtered.map((element) => {
    const matchedValue = newGrades.find(({ studentId }) => studentId === element.id);
    if (matchedValue) {
      return { ...element, grade: matchedValue.grade };
    }

    return { ...element, grade: 'N/A' };
  });
  return mappedArray;
}
