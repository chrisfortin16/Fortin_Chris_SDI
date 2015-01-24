/*
Chris Fortin
Random Work
Testing Java Script Conditionals and adding CSS
1/19/15
 */



//alert("Testing to see if this works! Woooo");



function tionName(UserPrompt) {
    
var valid;
   var input = prompt("What is your name?");
    input = input.toLowerCase();
    if (input != "chris"){
        prompt("You did not get it, Please try again.");
    }else{
        console.log("You put "+input+" Good Job!");
    }
}

tionName();
