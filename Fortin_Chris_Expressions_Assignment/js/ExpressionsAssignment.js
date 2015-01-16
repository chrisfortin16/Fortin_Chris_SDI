
 /*
Chris Fortin
SDI Campus
1/15/15
Expressions Assignment
 */

//alert("Testing to see if this works");

// Expressions
// Creating my own calculator
 alert("This calculator will tell you the height of your grass. please use reasonable numbers");

 var prompt2 = prompt("How many days since you last cut your grass?");
 var prompt3 = prompt("How many days a week do you water you grass?");
 var prompt4 = prompt("How often do you cut your grass a month?");

var arr = [prompt2, prompt3, prompt4];

var total = arr[1] * arr[2] - arr[0];
 console.log("Your grass height is "+ total +" inches. I don't care if you cut your grass or not! Make choices for yourself!");







