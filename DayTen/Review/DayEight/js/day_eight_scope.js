/*
 *Chris Fortin
 *1/22/15
 *SDI Campus
 *Day Eight Scope
 */

//alert("Testing to see if this stinks");


// variable scope
// variables inside and outside of a function

// Try not to se the same variable names
// However, in larege files this is going to be impossible

// Variables created inside of functions can only be seen inside thoughes functions

// We are going to create a variable for width in our MAIN code "Out side the function"

var width = 5; // Scoped outside of the function - main code

// create a finction that calculates the primeter of a rectangle
function calcperi() {
    var width = 10; //Scoped to the function calcPeri
    console.log("Inside of the function the value of width is "+width);
    
    var height = 20;
    var perimeter = width*2 + height*2;
    console.log("Inside of function the primeter is "+perimeter);
}

console.log("Before call "+width);


calcperi();

console.log("After call "+width);
























