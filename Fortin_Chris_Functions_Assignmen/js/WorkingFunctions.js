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



var potato = prompt("Please enter how many potatos you have.");
while(potato === "" || isNaN(potato)){
    potato = prompt("You must put a number, you must put something in the box. \n Please enter a amount for potatos.");
}
console.log("You entered "+potato+" for the amount of potatos you have.");

var salt = prompt("Please enter the amount of salt you have in pounds.");
while(salt === "" || isNaN(salt)){
    console.log("You must enter a number, you must put something in the box. \n Please enter a amount for salt.");
}
console.log("You entered "+salt+" for the amount of salt you have.");

function bagOfChips(bg, st) {
    var result1 = (potato / 3.5) * (salt / 2);
    return result1;
}
var newValue = bagOfChips(potato, salt);
newValue = newValue.toFixed(2);
console.log("You have "+newValue+" bags of chips.");

var overall = prompt("Please enter how many stores needs refills of chips");
while (overall === "" || isNaN(overall)){
    overall = prompt("Please only enter numbers, and do not leave blank \n Please enter how many stores needs your bags of chips");
}

var store = function(p, s, o){
    var total = p/3.5 * s/2 *o;
    return total;
};

// Function call after defined of anon function
var total = store(potato, salt, overall);
total = total.toFixed(2);
console.log("Based on the numbers you entered for amount of potatos and salt "+potato+", "+salt+", and the amount of stores, "+overall+". You created "+total+" bags of chips");











