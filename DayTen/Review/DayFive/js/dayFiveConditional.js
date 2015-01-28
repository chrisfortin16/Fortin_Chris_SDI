
 /*
Chris Fortin
SDI Campus
1/15/15
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
 } else{
   Code to run if the condition is false
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

 // Create a variable for a Shoe Lift?
 var shoeLift = 2;
 // Is the child tall enough with the shoe lift


 if(kidHeight + shoeLift > minHeight){

  console.log("You are tall enough to ride the ride");
 } else{
 // This code will run if the code is false
  // There are many things I wish to do in this life time, sometimes I wish to jump out of a perfectly fine plain at 35,000 feet then play Tom Perry's Free Falling in my headphones as I float gracefully back down to mother earth.
  console.log("You can Not ride this ride because you are not tall enough");
 }



 // What ride can the kid go on based on his height?

 // If the kid is 48 and up then Space Mountain
 // If the kid is 40 and up then Buzz Lightyear Ride
 // Anything shooter - Whinne Da Pooh

 var childHeight = 42;

 if(childHeight >= 48){

  console.log("You are tall enough to ride Space Mountain, Buzz Lightyear and Winnie Da Pooh");

 } else if(childHeight >= 40){

  console.log("You are too short to ride Space Mountain, but you can ride The Buzz Lightyear ride and Winne Da Pooh");

 } else{
  console.log("You can only ride Winne Da Pooh");
 }

/*

If, else if, else statement

if(condition1 to test){

  Code to run if condition1 is true

} else if(condition2 to test){

  Condition2 will only be tested if condition1 is false
  Code to run if condition2 is true

} else{

  Code to run if condition1 and condition2 are false

}

 */





















