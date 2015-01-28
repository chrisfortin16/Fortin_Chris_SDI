/*
 *Chris Fortin
 *1/24/15
 *SDI Campus
 *Random Numbers
 */

//alert("Testing to see if this works well?");

// Create variables for min and max value

var min = parseInt(prompt("Please enter a min number."));
var max = parseInt(prompt("Please enter a max number."));

while(isNaN(min) || min === ""){
    //Re-prompt the user for correct info
    min = prompt("Please do not leave blank and only use numbers. \n Please enter a min number.");   
}

while(isNaN(max) || max === "" || Number(min) >= Number(max)){
    if (isNaN(max)) {
        max = prompt("Please only use numbers. \n Please enter a max number.");
    }else if (max === "") {
        max = prompt("Please do not leave blank. \n Please enter a max number.");
    }else{
        max = prompt("Max value must be greater then min value. \n Please enter a max number.");
    }
    
    
}


// Create function
function randomizer(mn, mx) {
    
    // Generate our random number
    var randomNum = Math.round(Math.random() * (mx-mn) +Number(mn));
    
    // Return that random number to our main code
    return randomNum;
}


// Function call BUT create a variable to catch the return value

var ranNum = randomizer(min, max);
console.log("Your random number between "+min+" and "+max+" is "+ranNum+".");



// 15 random numbers between our min and max

for (var i=0; i<15; i++) {
    
    console.log(randomizer(min,max));
    
    
}

















