//alert("JavaScript works!");

/*
 * Chris Fortin
 * SDI 1501
 * Day 6
 */

// Is my steak done?

/*
 *120 and under is undercooked
 *120 - 124 - steak is rare
 *125 - 129 - steak is medium-rare
 *130 - 139 - steak is medium
 *140 - 149 - steak is medium-well
 *150 - 165 - steak is well done
 *>165 steak is burnt to a crisp
*/

//var steakTemp = 119;
//var steakDone;
//
//if (steakTemp < 120) {
//    var steakDone = "Your steak is undercooked.";
//}else if (steakTemp <= 124) {
//    var steakDone = "Your steak is rare.";
//}else if (steakTemp <= 129) {
//    var steakDone = "Your steak is medium rare.";
//}else if (steakTemp <= 139) {
//    var steakDone = "Your steak is medium.";
//}else if (steakTemp <= 149) {
//    var steakDone = "Your steak is medium well.";
//}else if (steakTemp <= 165) {
//    var steakDone = "Your steak is well done.";
//}else if (steakTemp > 165) {
//    var steakDone = "Your steak is brunt to a crisp.";
//}
//console.log("Your steak is " + steakDone + ".");
//
//
//
//
////  Get outside temperature
//
//var airTemp = parseInt(prompt("What's the air temperature outsie?", "65"));
//
////  Create the variable for the water temperature
//
//var waterTemp;
//
//if (airTemp >= 85) {
//    console.log("Let's go to the beach!");
//    waterTemp = parseInt(prompt("What's the temperature of the water?", "74"));
//
//    if (waterTemp >= 75) {
//        console.log("Let's go in the water!");
//    }else{
//        console.log("Let's build a sand castle!");
//    }
//
//    
//}else{
//    console.log("We're going to the movies!");
//}










// round(x)
// Normal rounding .5 and up

var num1 = 9.4444;
console.log(num1);
num1 = Math.round(num1);
console.log(num1);


// floor(x)
// Returns x, rounded down to the nearest integer / whole number
var num2 = 6.1;
console.log(num2);
num2 = Math.floor(num2);
console.log(num2);


// celi(x)
// Return x rounded uo to the next integer/whole number

var num3 = 4.6666;
console.log(num3);
num3 = Math.ceil(num3);
console.log(num3);


// random()
// Returns a number between 0 and 1
var num4 = Math.round(Math.random()*100);
console.log(num4);

// Random number between two numbers
// Math.random() * (max - min) + min
var num5 = Math.round(Math.random() * (80 - 50) + 50);
console.log(num5);

var arrOfItems = ["Chips Ahoy", "Oreos", "Nutter Butter", "Thin Mints"]


var randomCookie = Math.round(Math.random() * (arrOfItems.length - 1));
console.log("My current favorite cookie is " + arrOfItems[randomCookie] +".");


console.log(Math.PI);
console.log(Math.SQRT2);
















