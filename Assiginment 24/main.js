"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one 
// False result for each of the following:
// • Tests 1 for equality and inequality with strings
console.log("Equality test for string: ", "Apple" === "Apple");
// • Tests 2 for equality and inequality with strings
console.log("Inecuality test for string", "Apple" != "Orange");
// • Tests using the lower case function
console.log("Test for lower function:", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality 
console.log("equality test for number: ", 26 === 26);
// • Numerical tests involving inequality
console.log("Inquality test for number: ", 35 != 26);
//Greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("less than test: ", 5 < 10);
// greater than or equal to,
console.log("greater than and equal to test:", 10 >= 10);
//less than or equal to
console.log("less than or equal to test: ", 5 <= 10);
// • Tests using "and" operators
console.log("And operator test: ", 5 === 5 && 5 < 7);
// • Tests using "or" operators
console.log("And operator test: ", 5 === 5 || false);
// • Test whether an item is in a array
const fruits = ["banana", "mango", "grapes"];
console.log("test mango in the array: ", fruits.includes("mango"));
// • Test whether an item is not in a array
console.log("test Apple is not in array: ", !fruits.includes("Apple"));
