// Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green',
//  'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. 
// If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another 
// that fails. (The version that fails will have no output.)

// Create a variable called alien_color
let alein_color:string = "green";

// Write an if statement to test whether the alien’s color is green. 
// If it is, print a message that the player just earned 5 points.
if(alein_color ==="green"){
    console.log(" the player just earned 5 points !");
}
//(The version that fails will have no output.)
alein_color ="yellow";

if(alein_color==="green"){
    console.log("the player just earned 5 points !");
}