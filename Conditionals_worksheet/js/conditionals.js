
 /*
Chris Fortin
SDI Campus
1/15/15
Conditionals Worksheet
 */

//alert("Testing to see if this works");

 /*
  Label the section of code appropriately
  Write the givens as variables
  The result should be calculated using variables, not literal values when possible.
  Create code that will make decisions based on the value of the givens
  Print the result of the decision-making to the console.
  Use only code and techniques learned in this class.
  */

 // Expressions with Conditionals
 // Last Chance for Gas!

 var capacity = 20; // capacity of the gas tank for the car
 var efficiency = 15; // how far your car will go on one gallon
 var gauge =  .50; // How much gas you have in your tank

 var gasTankTotal = capacity * gauge;

if(efficiency * capacity * gauge > 200){
 console.log("Yes, you can make it without stopping for gas!");
} else{
 console.log("You only have "+ gasTankTotal +" gallons of gas in your tank, better get gas now while you can!");
}

 // Multiple Results
 // Grade Letter Calculator

 var grade = 95;
 var letter = "";

if(grade >= 95){
 letter = "A+";
}else if(grade >= 90){
  letter = "A";
}else if(grade >= 85){
  letter = "B+";
}else if(grade >= 80){
  letter = "B";
}else if(grade >= 76){
  letter = "C+";
}else if(grade >= 73){
  letter = "C";
}else if(grade >= 70){
  letter = "D";
}else if (grade <= 69){
  letter = "F";
 }

console.log("You have a " + grade + "%, which means you have earned a(n) " + letter + " in the class!");


// Multiple Conditions
// Tire Pressure





