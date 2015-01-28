/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *Validationg Prompts
 */

//alert("Testing to see if this works");

var userInput = prompt("Please type in your kname");

// Validating a prompt with a conditional
if (userInput === "") {
    //User did not type anything in
    userInput = prompt("Please do not leave blank. Please type in your name.");
}


// insted use a while loop
// check the input as many times as it takes for them to get it right

var firstName = prompt("Please type in your first name");

while (firstName === "") {
    // The user typed in nother
    // Reprompt to retype name
    firstName = prompt("Please type in your first name and DO NOT LEAVE BLANK GOD DAMN YOU!");
}

// test to see if it is a number
// isNaN() - Tests whats inside of (). Is it not a number?

// Numbers return flase
// Everything else returns ture

console.log(isNaN("monkey")); // Returns true
console.log(isNaN(7)); // Returns false

// Lets ask the user their age
var age = prompt("Please enter your age:");

//Validate that the user typed in a number
while (isNaN(age) || age === "") {
    //what its saying is (Is age Not a Number?) ture
    // This code runs any time this code is not a number
    //IF it is not a number then reprompt the user

age = prompt("Only use numbers, Please enter your age.");

}

var choice = prompt("Please type in yes or no");

// Convert to lower case
choice = choice.toLowerCase(); // THE SHIIIIT

while (choice != "yes" && choice!="no") {
    
    choice = prompt("Please only type in yes or no");
    
}











