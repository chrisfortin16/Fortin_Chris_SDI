
 /*
Chris Fortin
SDI Campus
1/15/15
Ternary
 */

//alert("Testing to see if this works");
 // A ternary simplifies code for an if else statement

 // If you GPA is greater then 2.0 you can graduate!
 // (condition to test) ? true code: false code;

 // Normal way - If else statement

 var gpa = 2.0;

 if(gpa > 2.0){

  console.log("Congrats! You can graduate!");
 } else {
  console.log("Sorry! Your gpa is too low!");
 }

 // Ternary Way
 (gpa>2.0) ? console.log("Congrats! You can graduate"): console.log("Sorry! Your gpa is too low!");



 // Decide what book a kid will read

 var age = 16;
 var book;

 // If the child is under 10, they read green eggs and ham.
 // Other wise they can read the time machine
 // If the kid is greater then 15 then they read twilight

 book = (age<10) ? "Green Eggs & Ham" : "The Time Machine";

 var book2 = (age<10) ? "Green Eggs & Ham" : (age<15) ? "The Time Machine" : "Twilight";

 console.log("You should read "+book);
 console.log(book2);



