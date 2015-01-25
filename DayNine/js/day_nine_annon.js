/*
 *Chris Fortin
 *SDI Campus
 *1/14/15
 *Annonymas
*/

//alert("Testing to see if this works");

// Annonymous Functions
// Widley used in JS and jQuery
// Important in Objecty Oriented Program
// Can be used interchagably with normal fuction, if done right

// Very quick and easy
// save on memory

/*
 * Basic structire of anon function
 * var functionName = function(parameters){
    Code to run goes here.
 }}
 */

// Function call BEFORE the normal function is defined
var results2 = triArea(6,7);
console.log("Before the function result2 is "+results2);


/*
 * THIS WILL NOT WORK
 * function call needs to come after the anon function 
 // Function call before the anon function is define
var results4 = triAreaAnon(7,8);
console.log("Before the anon function the restults4 function is "+results4);
*/ 


// Create a normal function for area of a triangle
function triArea(b,h){
    // Area = 1/2 * base * height
    var area = .5 * b * h;
    return area;
 
}

// Function call
var results1 = triArea(5,6);
console.log(results1);


// Create an anonymous function that calc the area of a triangle
var triAreaAnon = function(b,h){
    var area = .5 * b * h;
    return area;
};

// Function call after defined of anon function
var results3 = triAreaAnon(4,5);

console.log("Results of anonymous function after define is "+results3);





