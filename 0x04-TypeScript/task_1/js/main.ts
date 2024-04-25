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