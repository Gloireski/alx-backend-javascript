export interface Teacher {
    readonly firstName: string,
    readonly LastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index:string]: any ,
}

export interface printTeacherFunction {
    (firstName: string, lastName:string): string
}
export let printTeacher: printTeacherFunction;
printTeacher = function (firstName: string, lastName:string): string {
    return `${firstName[0]}. ${lastName}`;
}

export class StudentClass implements StudentClassInterface{
    _firstName: string;
    _lastName: string;
    constructor(firstName: string, lastName:string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    workOnHomework():string {
        return 'Currently working';
    }
    displayName(): string {
        return this._firstName;
    }
}
export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
export interface IStudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

