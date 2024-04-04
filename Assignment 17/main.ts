//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guests :string[] = ["Maha","Munazza","Nabeeha"]; 

let absent_Guest :string ="Maha";

let new_Guest :string ="Darakhshan";

guests[0] = new_Guest;

//for(let i=0; i<guests.length; i++){
  //  console.log('Dear.' + guests[i]+ ',\n\nIt is our pleasure to invite you in our dinner.\n\n')
//}
console.log(`Miss.${absent_Guest} is not comming to the dinner`);

console.log('Good news!We find new table so we are inviting 3 more guest.')

//array main teen guest add kiye hain.
guests.unshift('Hooria');
guests.splice(2 ,0 ,'Tooba');
guests.push('Afifa');

//yahan per main ny 6 guest ke array ko print kraya he.
for(let i=0; i<guests.length; i++){
    console.log('Dear.' + guests[i]+ ',\n\nIt is our pleasure to invite you in our dinner.\n\n')
}
//sorry message to guest not invited.
console.log('\nSorry we cannot arrange big table,Only two people will be invited')

//yahan per main ny guest remove kiya hy.
while (guests.length >2){
  let remove_Guest = guests.pop();  
  console.log(`sorry Mr .${remove_Guest},'you are not invited for dinner`);
}
//hamary bachy hove 2 guests.
for(let i=0; i<guests.length; i++){
  console.log('Dear.' + guests[i]+ ',\n\n, you are not still invited.\n\n')
}
//main ny saray guest arry sy remove kar diye.
guests.splice(0, 2);
console.log(guests);