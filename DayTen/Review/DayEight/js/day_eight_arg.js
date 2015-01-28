/*
 *Chris Fortin
 *SDI Campus
 *1/22/15
 *Arguments and Parameters
 */

//alert("Testing to see if randy wants another beer");


// Arguments - Goes into the function call
// Parameters - Goes in the fanction definition


// Must have the same number of arguments and parameters. USUALLY


// Create a function to calculate the area of a rectangle

function calcArea(w,h) { // Parameters go here
    
    
    //var width = 10;
    //var height = 20;
    //var area = width * height;
    
    
    var area=w*h;
    
    console.log("The area is "+area);
    

}


// Call function
calcArea(10,20);
calcArea(5,4);


// Calculate Dog Years!
// Put in human years and get out dog years
function dogYears(humanA) {
    
    //Dog years = humam*7
    var dogAge = humanA*7
    console.log("Dog age is "+dogAge);
}

// Function call with argument
dogYears(21);

var userAge = prompt("How old are you?");
dogYears(Number(userAge));