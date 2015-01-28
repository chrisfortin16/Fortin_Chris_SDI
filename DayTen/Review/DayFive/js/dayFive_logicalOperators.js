
 /*
Chris Fortin
SDI Campus
1/15/15
Logical Operators
 */

//alert("Testing to see if this works");

 /*
 true && true = true
 true && false = false
 false && true = false
 false && false = false

 true || true = true
 true || false = true
 false || true = true
 false || false = false

 !(true) = false
 !(false) = true

 // If the price of 205 is less then budget lets buy it.
 // And if our paycheck is over 500
  */

 var budget = 200;
 var dsPrice = 169;
 var payCheck = 600;


 if(dsPrice < budget && payCheck > 500){

  console.log("Buy the 3DS!");

 } else{
  console.log("Do not buy the 3DS because you are broke!");

 }


// Lets buy a smart tv if it is less then our budget OR we won the lottery

 var tvPrice = 540;
 var tvBudget = 500;
 var wonLottery = true;

 if(tvPrice < tvBudget || wonLottery){

  console.log("Lets go buy a TV! Whoop Whoop");

 } else{
  console.log("Stick with your small TV! Wa Wa Waaaa");
 }




