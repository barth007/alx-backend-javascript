interface Teacher{
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher={
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Barth',
    location: 'London',
    contract: 'true'
}
console.log(teacher3);

interface Directors extends Teacher{
    numberofReports: number,

}

const director1: Directors={
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberofReports: 17,
}
interface printTeacherFunction{
    (firtName: string, lastName: string): string
}

const printTeacher: printTeacherFunction =(firstName, lastName) =>{
    const name = `${firstName.charAt(0)}.${lastName}`;
    return name;
}

const printName = printTeacher("Barth", "John");
console.log(printName)


interface StudentClassConstructor{
    new(firstName:string, lastName: string): StudentClass,
}
interface StudentClassInterface {
    workOnHomework(): string,
    displayName(): string,

}

class StudentClass implements StudentClassInterface{
    private firstName: string;
    private  lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;

    }
    workOnHomework(): string {
        return "Currently working"
    }
    displayName(): string {
        return this.firstName;
    }
}

const instance: StudentClass = new StudentClass("Barth", "Bassey");
console.log(instance.displayName());