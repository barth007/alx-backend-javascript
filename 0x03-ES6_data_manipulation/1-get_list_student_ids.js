export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    const emptyArray = [];
    return emptyArray;
  }

  const newArray = arr.map((elment) => elment.id);
  return newArray;
}
