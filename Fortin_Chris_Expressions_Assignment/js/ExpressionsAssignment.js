
 /*
Chris Fortin
SDI Campus
1/13/15
NAMEHERE
 */

//alert("Testing to see if this works");

// asking the user for their name
 var userName = prompt("Please tell me just your first name"); // Asking the user for their name
 console.log("According to you, your name is "+userName+"."); // Printing out the name

 var testOne = prompt("Please type a random score out of 100.");
 var testTwo = prompt("Please type a different random score out of 100.");
 var testThree = prompt("Please type a different random score out of 100.");
 var testFour = prompt("Please type the last random score into the box out of 100");

 var classAverage = [(Number(testOne) + Number(testTwo) + Number(testThree) + Number(testFour)) / 4];
 console.log("The class average after adding up the scores was " + classAverage);

 prompt("After adding up the scores your class average was " + classAverage);






















