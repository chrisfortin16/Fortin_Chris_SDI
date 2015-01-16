
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


