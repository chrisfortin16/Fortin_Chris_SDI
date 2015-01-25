/*
 *Chris Fortin
 *1/24/15
 *SDI Campus
 *Multible
 */

//alert("Test");

// Prompt the user for width and height
// Calculate the area and perimeter of a rectangle

// First we want to set up the area of a rectangle 
function areaRect(w,h) {
    //Area of a rectangle is widht * height
    var area = w*h;
    return area;
}

// Set up the perimeter function
function periRect(w,h) {
    // Perimeter of a rectangle is 2*w + 2*h
    var perimeter = 2*Number(w) + 2*Number(h);
    // Return the perimeter
    return perimeter;
}

// Prompt the user for width and height
var width = prompt("Please enter a width for a rectangle");

while(width === "" || isNaN(width)){
    // Re-prompt
    width = prompt("Please do not leave blank and only use numbers \n Please enter a Width for a rectangle.");
}

var height = prompt("Please enter a height for a rectangle");

while(height === "" || isNaN(height)){
    height = prompt("Please do not leave blank and only use numbers \n Please enter a Height for a rectangle");
}

// Function call both functions call them both one at a time.

var resultsArea = areaRect(width, height);
var resultsPeri = periRect(width, height);

console.log("With the numbers you put in, "+width+ " and "+height+", your area is "+resultsArea+" and the perimeter is "+resultsPeri+".");

// Make a new combined function to calculate the perimeter and the area

function combineRect(w,h) {
    // Calculate the area first
    var area = w*h;
    
    // Calculate the perimeter second
    var peri = 2*w + 2*h;
    
    // Create array
    //var results1 = [area, peri]; This way works too
    
    // Return both values
    return[area, peri];

}



var combinedResults = combineRect(width, height);
console.log(combinedResults[0]);

console.log(combinedResults[1]);

console.log(combinedResults);











