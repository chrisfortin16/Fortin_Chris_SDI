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

alert("Overloading a elevator"); //Starting off the code with the name 

var num1 = parseInt(prompt("Please enter the weight of the the first person!"));  //Asking the user to input the numbers
var num2 = parseInt(prompt("Please enter the second weight!"));
var num3 = parseInt(prompt("Please enter the thrid persons weight!"));
var num4 = parseInt(prompt("Please enther the last persons weight"));

if (isNaN(num1)) {
    console.log("You did not put anything for the weight of the first person! A person can't weigh 0 thats impossible!"); //Making sure the user put something in for the prompts
}else if (isNaN(num2)) {
    console.log("You did not put anything for the weight of the second person!");
}else if (isNaN(num3)) {
    console.log("You did not put anything for the weight of the third person!");
}else if (isNaN(num4)) {
    console.log("You did not put anything for the weight of the forth person!");
}else{
}

var arrayName = [num1, num2, num3, num4, num5, num6]; // Creating an array

var elevTotal = arrayName[0] + arrayName[1] + arrayName[2] + arrayName[3]; // Adding up the first part of the array

console.log("The total weight in the elevator is " + elevTotal + "."); // Printing out the total to the console log

var maxLoad = 1200 - (arrayName[0] + arrayName[1] + arrayName[2] + arrayName[3]); // Using my second assignment operatior

console.log("Based on the numbers you entered you still have " + maxLoad + " pounds left before the elevator fails"); // Printing out a sting to the console.log

console.log("Right before the ground floor, the elevator stops to get more people."); // Adding on to the story so I can get my 2 if statements in
var num5 = parseInt(prompt("Please enter the weight of the fifth person to get on.")); // Defining the 5th number
var num6 = parseInt(prompt("Please enther the weight of the last person, be concious of the fact this elevator is packed!")); // Defining the 6th number

var arrayName = [num1, num2, num3, num4, num5, num6]; // adding the new 2 variables into the array

var totalNew = arrayName[0] + arrayName[1] + arrayName[2] + arrayName[3] + arrayName[4] + arrayName[5]; // adding up the array

(totalNew < 1200) ? console.log("Congrats! Everyone fit on the elevator without disaster!"): // Makeing sure the weight limit is effective
console.log("Sorry! Everyone on the elevator weighed to much! everyone crached and died in a firey death!"); // Printing out what will happen if there are to many people on the elevator









