/*
 *Chris Fortin
 *1/22/15
 *SDI Campus
 *Functions
*/

//alert("Testing to see if this works");


// Circumfrence
// 2 * PI * r

/*
var a = 3.14;
var b = 2;
var c = prompt("Please enter the radious of a circle.");

while(c==="" && isNaN(c)){
    prompt("You did not a number in for the radios. \n Please enter a valid number for the radius.");
}

console.log("You entered "+c+" for the radius.");

function calcCircle(a,b,c) {
    console.log(a*b*c);
}

calcCircle(a*b*c);
*/

var first = 2; // Set a number for the first variable
var second = 3.14; // Set a second number for the second variable
var radius = prompt("Please enter a number for the radius of a circle"); // Asking the user to enter a number for the radius

while(radius === "" || isNaN(radius)){ // validating the user is typing in a number 
    var radius = prompt("You did not a number in for the radius. \n Please enter a valid number."); // Prompting the user if they didnt enter in a correct 
}


function CalcCircle(first, second, radius) { // Starting the function
   
    return circumfrence; // Retuning the function
}CalcCircle(); //calling the function
 var circumfrence = (first * second * radius); // Calculating the proplem

console.log("The circimfrence of the cirlce is "+circumfrence); // Printing out the result for the user to see





// Stung!
var kill = 8.666666667 // A set number for how many bee stings it takes to kill someone

var weight = prompt("What is the weight of the victim?"); // asking the user to input the weight of the victim 

while (weight === "" || isNaN(weight)) { // Making sure the user entered a valid number
    var weight = prompt("You did not enter a valid weight. \n Please enter a valid weight."); // Prompting them to re enter the number
}

function toKillAperson(kill, wight) { // Adding the pramiters to the function
    
    return toKillAperson; // Returning the function
    
}
var toKillAperson = (kill * weight); // Calculating the function with the numbers

console.log("I takes "+toKillAperson+" bee stinks to kill a someone who weighs "+weight+" pounds."); // Printing out the result for the user to see













