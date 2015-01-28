
 /*
Chris Fortin
SDI Campus
1/27/15
Pizza
 */

//alert("Testing to see if this works");

// Calculate how much pizza costs per slice

// Prompt the user for :
 //radius of pizza
 //cost of pizza
 // # of slice per pizza

 var pizzaRadius = prompt("What is the radius of your pizza?");
 while(pizzaRadius === "" || isNaN(pizzaRadius)){
  pizzaRadius = prompt("Please do not leave blank and only use numbers. /n What is the radius of your pizza? ");
 }

 // Do while validation

 do{
  // Prompt the user
  var pizzaCost = prompt("How much does your pizza cost in total?");
 } while(pizzaCost === "" || isNaN(pizzaCost));

var pizzaSlices = prompt("How many slices are in your pizza?");
 while(pizzaSlices === "" || isNaN(pizzaSlices)){
  pizzaSlices = prompt("Please do not leave blank and only use numbers \n How many slices are in your pizza?");
 }


 //function call that starts lord function
 var results = lordFunction(pizzaRadius, pizzaCost, pizzaSlices);

 // Lets create a function that will start all of the other functions
 console.log("Your pizza per sq inch costs "+results[0]+" that comes out to "+results[1]+" per slice.");



 function lordFunction(radius, cost, slices){

  // calculate the area
  var area = pizzaArea(radius);

  // calculate the cost per area
  var areaCost = pizzaSqInCost(cost,area);

  // calculate the price per slice
  var slicePrice = pricePerSlice(cost, slices);

  // return both the area cost and the slice per price
  return [areaCost, slicePrice];


 }









 // Create a function that calculates the area of the pizza
 // area of a circle is PI r^2

 function pizzaArea(r){
  //area PI * r * r
  var area = Math.PI * r * r;
  return area;
 }

 // Create a function that calculates the price per square inch of pizza!

 function pizzaSqInCost(price, area){
  // Price / by the area
  var costPerIn = price / area;
  costPerIn = costPerIn.toFixed(2);
  return costPerIn;

 }

// function that calculates the price per slice

 function pricePerSlice(price, slice){
  //Price/Slice
  var costPerSlice = price / slice;
  costPerSlice = costPerSlice.toFixed(2);
  return costPerSlice;
 }






















