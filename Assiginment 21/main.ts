//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

//Datatype of person object
interface person{
name : string,
age : number,
nationality :string,
student:boolean
}
//person object
let person :person={
name : 'Darakhshan',
age : 26,
nationality: 'Pakistan',
student : true
}
//print person object
console.log(person);

//Datatype of car object
interface car{
    maker : string,
    color : string,
    automatic : boolean,
}
//car object
let car={
    maker:'toyota',
    color : 'black',
    automatic : true,
}
//print car object
console.log(car);
