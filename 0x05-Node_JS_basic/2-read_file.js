const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  const result = [];
  fs.createReadStream(path)
    .pipe(csv())
    .on('data', (data) => result.push(data))
    .on('end', () => {
      const numberOfStudents = result.length;
      console.log(`Number of students: ${numberOfStudents}`);
      const { csFields, sweFields } = result.reduce((accumilator, currentValue) => {
        if (currentValue.field === 'CS') {
          accumilator.csFields.push(currentValue.firstname);
        } else {
          accumilator.sweFields.push(currentValue.firstname);
        }
        return accumilator;
      },
      { csFields: [], sweFields: [] });

      console.log(`Number of students in CS: ${csFields.length}. List: ${csFields}`);
      console.log(`Number of students in SWE: ${sweFields.length}. List: ${sweFields}`);
    });
}

module.exports = countStudents;
