//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out 
//a new set of invitations. You’ll have to think of someone else to invite./




let guests :string[] = ["Tooba","Munazza","Nabeeha"]; 

let absent_Guest :string ="Tooba";

let new_Guest :string ="Darakhshan";

guests[0] = new_Guest;

for(let i=0; i<guests.length; i++){
    console.log('Dear.' + guests[i]+ ',\n\nIt is our pleasure to invite you in our dinner.\n\n')
}
console.log(`Miss.${absent_Guest} is not comming to the dinner`);
