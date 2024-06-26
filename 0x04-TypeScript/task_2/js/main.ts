interface DirectorInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
}

interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
}
 class Director implements DirectorInterface{
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
 }

 class Teacher implements TeacherInterface{
    workFromHome(): string {
        return"Cannot work from home"
    }
    getCoffeeBreak(): string {
        return"Cannot have a break"
    }
    workTeacherTasks(): string {
        return"Getting to work"
    }
 }

 interface createEmployeeInterface{
    (salary: number | string): Teacher | Director;
 }

 const createEmployee: createEmployeeInterface=(salary)=>{
    if ( typeof salary === 'number' && salary < 500){
        const teacher = new Teacher();
        return teacher;
    }else{
        const director = new Director()
        return director;
    }
 }