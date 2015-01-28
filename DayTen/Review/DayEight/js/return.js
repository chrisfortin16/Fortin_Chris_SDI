/*
 *Chris Foritn
 *1/22/15
 *SDI Campus
 *Returns
 */
//alert("Testing to see if this works like yo mama");


// Create a function that will calculate the area of a rectangle

function calcArea(w,h) {
    //Calc Area
    var area = w*h;
    //console.log(area);
    return area;
}

//Function call
 var returnedArea = calcArea(77,9);
 
 console.log(returnedArea);
 
 
 
 
 // Create a function to calc the area of a circle
 // area = pi r^2
 
 function circleArea(radius) {
    var area = Math.PI * radius * radius;
    
    // Return this area
    return area;

 }
 
 // function call it
var results = circleArea(6);
 
 console.log("The area of your circle is "+results);


// Had two circles with the same radious?
// what is the total area

var twoArea = results *2;

console.log("The area of two circles is "+twoArea.toFixed(2));


var results2 = circleArea(3);
console.log("The area of a circle with a radious of 3 is "+results2.toFixed(2));


// Prompt the user for radious calc area
var userRad = prompt("Please type in a radious");

// Validate prompt
while(isNaN(userRad) || userRad === ""){
    userRad = prompt("Please only use numbers. \n  Please type in a radious");    
}

//Parse the variable
userRad = parseInt(userRad);



// Create a variable to cath the resuts!
var userResults = circleArea(userRad);

console.log("The area of your circle with a radious of "+userRad+ " is "+userResults);



 
 