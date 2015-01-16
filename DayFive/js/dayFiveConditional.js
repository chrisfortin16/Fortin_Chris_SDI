
 /*
Chris Fortin
SDI Campus
1/13/15
Conditionals
 */

//alert("Testing to see if this works");

 // Basic conditional statement

 // Create a boolean variable to test
 var oldEnough = false;

 // If the child is old enough then print to the console you can ride

 /*

 if (condition to test){
 Code to run if condition is true
 }

  */

 if(oldEnough){
  // Code inside of {} will run if the test it ture
  // This code will be skipped if test if false
  console.log("You can ride the coaster");
 }
 else{
  console.log("You can Not ride the coaster");
 }


 // Relational Expression

 // If the kid is over 48" tall, then he can ride
 var kidHeight = 50;

 // Create a variable for minimum height
 var minHeight = 48;


 if(kidHeight > minHeight){
  
  console.log("You are tall enough to ride the ride");
 } else{
 // This code will run if the code is false
  // There are many things I wish to do in this life time, sometimes I wish to jump out of a perfectly fine plain at 35,000 feet then play Tom Perry's Free Falling in my headphones as I float back down to mother earth.
  console.log("You can Not ride this ride because you are not tall enough");
 }














