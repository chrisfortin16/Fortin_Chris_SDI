
 /*
Chris Fortin
SDI Campus
1/13/15
Expressions Assignment
 */

//alert("Testing to see if this works");

// asking the user for their name
 var userName = prompt("Please tell me just your first name"); // Asking the user for their name
 console.log("According to you, your name is "+userName+"."); // Printing out the name

 var testOne = prompt("Please type a random score out of 100."); // Asking the user to input the number
 var testTwo = prompt("Please type a different random score out of 100."); // Asking the user to input a different number
 var testThree = prompt("Please type a different random score out of 100."); // Asking the user to input a different number
 var testFour = prompt("Please type the last random score into the box out of 100"); // Asking the user to input a different number

 var classAverage = [(Number(testOne) + Number(testTwo) + Number(testThree) + Number(testFour)) / 4]; // Adding up the scores of all the tests
 console.log("The class average after adding up the scores was " + classAverage); // Printing out the scores for the user to see

 alert("After adding up the scores your class average was " + classAverage); // Alerting the user to the score

 alert("Good new everybody! The teacher decided to give 5 points of extra credit to all the scores!"); // Telling the user where the extra point came from

 var newClassAverage =[(Number(testOne) + 5, + Number(testTwo) + 5, + Number(testThree) + 5, + Number(testFour) + 5) / 4]; // Adding the extra credit points to the text scores
 console.log("You got an average of " + newClassAverage + " points in extra credit."); // Printing the class average

 var complete = Number(newClassAverage) + Number(classAverage); // Adding the extra credit to the class average

 console.log("The class got an average of " + complete + "."); // Printing the results to the console log
 alert("The class got a average of " + complete + "."); // Printing the results to the user via alert

// I typed Chris for the name, 99 for the first test, 98 for the second test, 97 for the third test, and 96 for the last test. I got a total of 97.5 and with 5 points extra credit to all tests, I got 122.75 as the class average.
















