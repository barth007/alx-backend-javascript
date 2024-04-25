interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const Student_one: Student={
    firstName:  "Bartholomew",
    lastName: "Bassey",
    age: 30, 
    location: "lanto road Abuja"
}
const Student_two: Student={
    firstName:  "Gideon",
    lastName: "Emmaunel",
    age: 30, 
    location: "pasili ext Abuja"
}

let StudentList: Student[];
StudentList=[Student_one, Student_two];

const table = document.createElement("table");
const tbody = document.createElement("tbody");
const headrow = document.createElement("tr")
const Namehead = document.createElement("th");
const locationhead = document.createElement("th");

Namehead.textContent= "First Name";
locationhead.textContent ="Location";
headrow.appendChild(Namehead);
headrow.appendChild(locationhead);
tbody.appendChild(headrow);



const studentTable = StudentList.forEach((student)=>{
    const row =  document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
})
table.appendChild(tbody);
document.body.appendChild(table);