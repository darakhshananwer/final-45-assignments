"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guests = ["Maha", "Munazza", "Nabeeha"];
let absent_Guest = "Maha";
let new_Guest = "Darakhshan";
guests[0] = new_Guest;
for (let i = 0; i < guests.length; i++) {
    console.log('Dear.' + guests[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\n');
}
console.log(`Miss.${absent_Guest} is not comming to the dinner`);
console.log('Good news!We find new table so we are inviting 3 more guest.');
guests.unshift('Hooria');
guests.splice(2, 0, 'Tooba');
guests.push('Afifa');
for (let i = 0; i < guests.length; i++) {
    console.log('Dear.' + guests[i] + ',\n\nIt is our pleasure to invite you in our dinner.\n\n');
}
