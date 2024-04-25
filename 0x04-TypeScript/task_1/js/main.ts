class Teacher{
    private  _firstName: string;
    private  _lastName: string;
    private  _fullTimeEmployee: boolean;
    private  _yearsOfExperience?: number;
    private  _location: string;
    [key: string]: any;

    constructor( firstName: string, lastName: string, fullTimeEmployee: boolean,  location: string, yearsOfExperience?: number,){
        this. _firstName = firstName;
        this._lastName = lastName;
        this._fullTimeEmployee =fullTimeEmployee;
        
        this._location = location;
        if(this._yearsOfExperience !== undefined){
            this._yearsOfExperience = yearsOfExperience;
        }

    }
    
    get firstName() : string {
        return this._firstName;
    }
    
    get lastName() : string {
        return this._lastName;
    }
    get fullTimeEmployee(): boolean{
        return this._fullTimeEmployee;
    }
    get yearsOfExperience(): number | undefined{
        return this._yearsOfExperience;
    }
    
   get location() : string {
        return this._location;
    }
    
    
    
};

