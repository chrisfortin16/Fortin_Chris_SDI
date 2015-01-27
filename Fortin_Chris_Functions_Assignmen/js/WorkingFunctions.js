/*
 * Chris Fortin
 * SDI Campus
 * 1/24/15
 * Functions Assignment
*/

//alert("Testing to see if this works");

// potatos to make chips
// 3.5 potatos fills up one bag of chips
// a store needs a shipment of bags of chips. it is you job to tell the potato company how many potatos you need.



var potato = prompt("Please enter how many potatos you have."); // Prompting the user to put in a value for potato
while(potato === "" || isNaN(potato)){ // Validationg they put something in the prompt
    potato = prompt("You must put a number, you must put something in the box. \n Please enter a amount for potatos."); // Re prompting if they didnt
}
console.log("You entered "+potato+" for the amount of potatos you have."); // Printing out the amount they entered

var salt = prompt("Please enter the amount of salt you have in pounds."); // Prompting the user to put in a value for salt
while(salt === "" || isNaN(salt)){ // making sure the user put something in for the value
    console.log("You must enter a number, you must put something in the box. \n Please enter a amount for salt."); // Telling the to re enter a value
}
console.log("You entered "+salt+" for the amount of salt you have."); // Printing out what the user put in

function bagOfChips(bg, st) { // First function 
    var result1 = (potato / 3.5) * (salt / 2); // Calculations for the function
    return result1; // Returning the function
}
newValue = newValue.toFixed(2); //to.Fixing the number to only 2 places
console.log("You have "+newValue+" bags of chips."); // Printing out the new value after calculations

var overall = prompt("Please enter how many stores needs refills of chips"); // prompting the user for how many stores there are
while (overall === "" || isNaN(overall)){ // validating they put something
    overall = prompt("Please only enter numbers, and do not leave blank \n Please enter how many stores needs your bags of chips"); // re prompting the user
}

var store = function(p, s, o){ // store functioin 
    var total = p/3.5 * s/2 *o; // calculations of the function
    return total; // returning the function
};

// Function call after defined of anon function
var total = store(potato, salt, overall); // adding the numbers to the function calculation
total = total.toFixed(2); // to.Fixing the result to only 2 decimal places
console.log("Based on the numbers you entered for amount of potatos and salt "+potato+", "+salt+", and the amount of stores, "+overall+". You created "+total+" bags of chips"); // printing out the final results


/* For my example calculations I used 50 for potatos and 2 for salt and I got 14.29 bags of chips.
 * When I put in 60 for the amount of stores I got 857.14 bags of chips.
 */









