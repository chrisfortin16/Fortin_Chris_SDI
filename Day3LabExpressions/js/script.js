/*
 Chris Fortin
 1/10/2015
 SDI Section 00
 Instructional Assignment: Expressions
 */

//Slice of Pie part 1
var numberOfPizzas = 4; // Defining how many pizzas there are

var numberOfSlices = 8; // Defining how many slices there are

var numberOfPeople = 10; // Defining how many people there are at the party

var ate = (numberOfPizzas * numberOfSlices) / numberOfPeople; // Multiplying the number of pizzas and the number of slices, then dividing by the number of people at the party

console.log("Each  person  ate " + ate + " slices of pizza at the party"); // Calling the function to show up on the console


//Slice of Pie part 2
var sparky = (numberOfPizzas * numberOfSlices) % numberOfPeople; // Doing the math to find out how many slices of pizza sparky will get

console.log("Sparky got " + sparky + " slices of pizza to nibble on"); // Calling the function to show up on the console


//Average shopping bill
var bill1 = 23.64; // Defining the first bill

var bill2 = 53.66; // Defining the second bill

var bill3 = 34.32; // Defining the third bill

var bill4 = 42.55; // Defining the fourth bill

var bill5 = 34.77; // Defining the fifth bill

var total = (bill1 + bill2 + bill3 + bill4 + bill5); // Adding up the bills for the total

total = total.toFixed(2); // Adding a .toFixed to my total so that I don't have a long decimal

console.log("You have spent a total of " + total + " on groceries over 5 weeks"); // Calling the total of all the bills to the console


var average = (bill1 + bill2 + bill3 + bill4 + bill5) /5; // Adding up the bills to find the average

average = average.toFixed(2); // Adding a .toFixed to my average so that I don't have a long decimal

console.log("That is an average of " + average + " per week."); // Calling the average of the bills to the console


//Discounts

var originalPrice = 50; // Defining the original price

var discountPercentage = .5; // Defining the discounted price

var descriptionOfItem = "large tomatoes"; // Defining the name of of the product

var salesTaxPercentage = .3; // Defining the sales tax

var price = originalPrice + (salesTaxPercentage * originalPrice) - (originalPrice * discountPercentage); // Doing the math to find what the price is discounted and with the sales price
var price2 = originalPrice - (originalPrice * discountPercentage); // Doing the math to find the original price minus the discount price

console.log("Your " + descriptionOfItem + " was originally $" + originalPrice + ", but after a " + discountPercentage +
"% discount, it is now $" + price2 + " without tax, and " + price + " with tax."); // Calling this terrible math problem to the console





