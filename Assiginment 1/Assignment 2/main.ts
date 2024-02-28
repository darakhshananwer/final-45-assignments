//storing a person name in a variable

let personName:string = "Darakhshan Anwer";

//printing a person name in lowercase

console.log("Lowercase:", personName.toLowerCase());

//printing a person name in Uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing a person name in titlecase

console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
