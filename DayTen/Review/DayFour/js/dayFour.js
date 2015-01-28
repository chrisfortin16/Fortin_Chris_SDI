/*
Chris Fortin
SDI Campus
1/13/15
Day Four In Class Assignments
 */

//alert("This is an Alert test test test");

// Lets create a basic array

var avengersNames = ["Hulk","Thor","Captain America","Iron Man"];

// Print it out to the console
console.log(avengersNames);

// Print out one specific item

console.log(avengersNames[1]);

// Switch a team member - Captain America for Spider Man
avengersNames[2] = "Spider Man";

console.log(avengersNames);

// Add a team member
avengersNames[4] = "Black Widow";

// Print off whole roster with a new member
console.log(avengersNames);

// Use a variable as an index number
var num = 2;
console.log(avengersNames[num]);

// Length Property
// Dot syntax - fancy for use a period
console.log(avengersNames.length);

// Last index number is the length - 1

// Recruit a new team member
avengersNames[avengersNames.length] = "Powerman"
console.log(avengersNames);
console.log(avengersNames.length);

// Pick oranges and track how many we have

var orangeBins = [12, 20, 14];

// How many bins of oranges did we pick in total?

var total = orangeBins[0] + orangeBins[1] + orangeBins[2] ;

console.log("You collected a total of " + total + " orange bins.");


// Advanced Arrays

var fruitBowl = ["Orange", "Tomato", "Strawberry"];

// Property - Length - How many items are in the array?

console.log("You have " + fruitBowl.length + " items in your fruit bowl.");


// Method of Arrays

// Push - inserts an item at the end of our array
// arrayName.push(item to push);

fruitBowl.push("Apple");

// See fruit bowl

console.log(fruitBowl);

fruitBowl.push("Grape");

console.log(fruitBowl);


// Pop - takes off the last item in an array AND returns it
// arrayName.pop()
// Create a variable to "catch" the return value
var caught = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught);
var caught2 = fruitBowl.pop();
console.log(fruitBowl);
console.log(caught2);


// Splice - for removing or adding items into a exising arrays together
// arrayName.splice(index #  to start from, # of items to remove, items to put in)

fruitBowl.splice(2,0,"Banana");
console.log(fruitBowl);

// Say we wanted to replace something

fruitBowl.splice(1,1,"Kiwi");
console.log(fruitBowl);

// To add more items
fruitBowl.splice(1,0,"Mango","Pineapple","Carrot");
console.log(fruitBowl);













