/* Chris Fortin
 * SDI Campus
 * 1/24/15
 * Procedures
 */

//alert("Yup this her works a good!");



// This is a basic or normal function
function calcArea(width, hight) {
    var area = width*height;
    return area;
}

// Function call
// Create a varibale to catch the return value!
 var results = calcArea(4,5);
 console.log(results);

// This is a procedure
//It does not return a value
// List of steps to do
function calcAreaP(width, height) {
    
    // Calculations
    var area = width * height;
    console.log(area);
    // It will not have a return
    
    
}

// Function call for a procedure
calcAreaP(6,7);

alert("Test"); // Procedure

var userInput = prompt("Ask a question"); // Prompting is a function