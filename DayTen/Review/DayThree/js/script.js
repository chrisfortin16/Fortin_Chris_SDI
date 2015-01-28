/*
Chris Fortin 1/10/2015 Day Three coding
 */

// Single Line Comment

// This is an alert
// alert("Testing to see if this connected");

// Console.log - allows programmers to see information

console.log("This is the console");

// Declare a variable
// We use the key word of var
var whatever1;   // This is going to be the declaration of a variable

whatever1 = 42;   // Define or definition of the variable
console.log(whatever1);

// Declare and define a variable
var a =  prompt("Please enter a value for a");
while(a === "" || isNaN(a)){
    console.log("You must put something in, you can only use numbers. \n Please enter the value for a.");
}
console.log(a);

// Simple math
a = Number(a)+3;
console.log("The value of a plus 3 is "+a);

var b = prompt("What is the value for b?");
while(b === "" || isNaN(b)){
    console.log("Please enter a valid Number only \n Please enter a value for b");
}
b = Number(a)+3;
console.log("The value for b is "+b);
console.log("The value for a is "+a);

// Find our age
var yearOfBirth = prompt("Please enter your date of birth");
while(yearOfBirth === "" || isNaN(yearOfBirth)){
    console.log("Only using numbers, Please enter a valid number for your year of birth");
}
if(yearOfBirth > 2015){
    console.log("There is no way in hell you could be born yet!");
}else {

// Age is calculated by current year minus year born
    var currentYear = 2015;

    var age = currentYear - yearOfBirth - 1;
    console.log("The current age you should be is "+age);
}
// Math
// +, -, *, /
// Find area of triangle
// 1/2 * base * height
var base = 7.9;
var height = 74.3;

var areaTriangle = 1/2 * base * height;
console.log("With the base being "+base+" and the height being "+height+", the total area of the triangle is "+areaTriangle);

// Modulo - %
// Gives the remainder

var remainder = 32%10;
console.log("Using the % sign for 32%10 it gives me this "+remainder);

// Find if even or odd
// Modulo by 2 %2
// 1 if it is odd
// 0 if even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

// Assignments Operators
/*
= Assignment
++ Adds 1 to the variable
-- Subtract 1 from the variable
+=number Addition assignment
-=number Subtraction assignment
/=number Dividtion assignment
*=number Multiplication assignment
 */

var counter = 1 ;
counter++; // Counter = counter + 1;
console.log(counter);

counter--; // Counter = counter - 1;
console.log(counter);

counter +=3; // Counter = counter +3;
console.log(counter);

counter -=2; // Counter = counter -2;
console.log(counter);

counter /=2; // Counter = counter/2;
console.log(counter);

counter *=4; // counter = counter *4;
console.log(counter);


// String - is any text variable
// "is used at the beginning and end of the string"
// Used to distinguish between variable name and random text
// Single quotes ' double quotes " are both used, BUT they must match

var kermit = "Light green";
var frogName = "kermit";

console.log("The name of the frog is "+frogName);

// Double quote or single quote?
// Use an escaping character \ (backslash) in front of the apostrophe

var phrase = 'I don\'t know!';
console.log(phrase);

// Multi-lines by using \n - new line character
var phrase2 = "I don't know! \nYou never know!";
console.log(phrase2);

// Boolean
// Kind of light switch - either on or off
// True or false - NOT "true" or "false"

var yes = true;

var nope = false;

// This is not a boolean
var wrong = "true";

// Order of Operations
// PEMDAS

// Find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

// Average - add then divide how many there are
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

// Do not over use parenthesis

// Concatenation - combining text strings
// Use the plus sign for text and not just numbers

var firstName = "Kermit";
var lastName = "The Frog";
// Concatenate the first and last name into a full name
var fullName = firstName +" "+ lastName ;
console.log(fullName);

console.log(fullName + " is not my favorite muppet!");

var d = "6";
var e = "7";

var combine = d+e;
console.log(combine);

// Constant values are always UPPERCASE
var PI =3.14;

// Round to a decimal place
// toFixed(#) that # is how many decimal places we want

var num = 5.9486720934876209;
num = num.toFixed(2);
console.log(num);






