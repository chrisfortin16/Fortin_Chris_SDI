/*
 *Chris Fortin
 *Validation
 *1/22/15
 *SDI Campus
*/

//alert("Testing to see if this works");
// user leaves the prompt blank
// Retuns a empty text string
var movie = prompt("What is your favorite movie?");

while (movie === "") {
    movie=prompt("Don't leave it blank\n What is your favorite movie?");
}



// test to see if the user typed in a number or not
//isNaN() = Is not a number
// text string retrun ture
// numbers return false

var ticketPrice = prompt("How much is a movie ticket?");

while(isNan(ticketPrice)){
    // user did not type in the number
    // reprompted for the number
    ticketPrice = prompt("Please only use numbers! Please enter a price.");

}



/*
// Use both validations in the same while loops
var age = prompt("To get into r rated movies we must know your age\n How old are you?");

// vaidate that the prompt is not blank and is a number

while (isNaN(age) || age==="") {
    console.log("Inside of while loop");
    
    if (isNaN(age)) {
        age=prompt("Please only use numbers! \n Now how old are you?");
    }else{

    age=prompt("Oops! something went wrong! \n please type in only numbers. What is your age?");
}
*/




// vaidate something spicific

var movieGenra = prompt("Do you want to see and action movie or comedy?");

// validate that the user typed in one of the 2 genra

movieGenra = movieGenra.toLower();

while (movieGenra !="action" && movieGenra !="comedy") {
    
    movieGenra=prompt("Only type in comedy or action\n What genra do you want to watch?");
    
}

