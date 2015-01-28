
 /*
Chris Fortin
SDI Campus
1/13/15
NAMEHERE
 */

//alert("Testing to see if this works");

// Casting one variable type to be another variable type

 var stringVar = prompt("Please enter a vale to start from any number will do.");
 while(stringVar === "" || isNaN(stringVar)){
  console.log("Please try again \n Please enter a vale to start from any number will do.");
 }
 var results = Number(7) + stringVar;
 console.log("Adding 7 to the string value you up in you should get "+results);

 // Number(variable or value to cast) - treats anything inside of the () as a number

 var castingResults = 7 + Number(stringVar);
 console.log(castingResults);

 // String() - anything inside the () is treated as a text string
 var areaCode = prompt("Enter the first 3 numbers to a phone number.");
 var firstPart = prompt("Enter the next 3 numbers to a phone number.");
 var secondPart = prompt("Please enter the last 4 numbers of a phone number.");

 var phoneNumber = String(areaCode) + String(firstPart) + String(secondPart);

 console.log(phoneNumber);

 var phoneNumber2 = "("+String(areaCode)+")" + String(firstPart) + "-" + String(secondPart);
 console.log(phoneNumber2);

 var phoneNumber3 = "("+areaCode+")" + firstPart + "-" + secondPart;
 console.log(phoneNumber2);

 // Parsing Integers
 // ParseInt() - It looks though a text string and returns an integer.
 // Only the first number in the string is returned
 // The text string has to start with a number
 // However, leading and trailing spaces are allowed
 // If it can't find the integer then it return a NaN
 // NaN is "Not a number"

 var a = parseInt("40 years old");
 console.log(a);

 var b = parseInt("I am 40 years old");
 console.log(b);

 var c = Number("40 years old");
 console.log(c);


 // Prompts only return strings

 var shoesHad = prompt("How many pairs of shoes did you own before?");

 var shoesBought = prompt("How many pairs of shoes did you buy?");

 // Add shoesHad plus shoesBought for total number of shoes

 var totalShoes = parseInt(shoesHad) + parseInt(shoesBought);
 console.log(totalShoes);




