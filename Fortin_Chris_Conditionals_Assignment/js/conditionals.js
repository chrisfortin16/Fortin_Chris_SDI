/*
 *Chris Fortin
 *1/17/15
 *Conditionals Assignment
*/

//alert("Testing to see if this works!");


/*. An	example	of 2 different arithmetic operators (addition and subtraction,	
addition and multiplication, subtraction and division, etc.).
b. 2 conditional statements Ð A	least one must contain an else if statement
c. At least 1 ternary conditional statement must be used
d. At least 1 Logical Operator &&, || or !
e. Must	contain	at least 3 user prompts that are used in calculations
f. All prompts must be validated
*/

alert("Overloading a elevator");

var num1 = parseInt(prompt("Please enter the weight of the the first person!"));
var num2 = parseInt(prompt("Please enter the second weight!"));
var num3 = parseInt(prompt("Please enter the thrid persons weight!"));
var num4 = parseInt(prompt("Please enther the last persons weight"));

if (isNaN(num1)) {
    console.log("You did not put anything for the weight of the first person! A person can't weigh 0 thats impossible!");
}else if (isNaN(num2)) {
    console.log("You did not put anything for the weight of the second person!");
}else if (isNaN(num3)) {
    console.log("You did not put anything for the weight of the third person!");
}else if (isNaN(num4)) {
    console.log("You did not put anything for the weight of the forth person!");
}else{
}

var arrayName = [num1, num2, num3, num4, num5, num6];

var elevTotal = arrayName[0] + arrayName[1] + arrayName[2] + arrayName[3];

console.log("The total weight in the elevator is " + elevTotal + ".");

var maxLoad = 1200 - (arrayName[0] + arrayName[1] + arrayName[2] + arrayName[3]);

console.log("Based on the numbers you entered you still have " + maxLoad + " pounds left before the elevator fails");

console.log("Right before the ground floor, the elevator stops to get more people.");
var num5 = parseInt(prompt("Please enter the weight of the fifth person to get on."));
var num6 = parseInt(prompt("Please enther the weight of the last person, be concious of the fact this elevator is packed!"));

var arrayName = [num1, num2, num3, num4, num5, num6];

var totalNew = arrayName[0] + arrayName[1] + arrayName[2] + arrayName[3] + arrayName[4] + arrayName[5];

(totalNew < 1200) ? console.log("Congrats! Everyone fit on the elevator without disaster!"):
console.log("Sorry! Everyone on the elevator weighed to much! everyone crached and died in a firey death!");









