
 /*
Chris Fortin
SDI Campus
1/29/15
Final
 */

//alert("Testing to see if this works");


 var cost = prompt("Please enter the cost of an Item");
 while(cost === "" || isNaN(cost)){
  cost = prompt("Please do not leave blank and only use numbers \n Please enter the cost of an item");
 }
 console.log(cost);
 var discount = prompt("Please enter a discounted % for the item between 1 and 100");
 while(discount < 0 || discount >100){
  discount = prompt("Please only have the numbers be 1 - 100 \n Please enter a discounted % for the item");
 }
 while(discount === "" || isNaN(discount)){
  discount = prompt("Please do not leave blank and only use numbers between 1-100 \n Please enter a discounted % for the item between 1 - 100");
 }

 function calcTotal(cost, discount){
  discountPrice = (cost * (discount/100));
  calcDiscount = (cost - discountPrice);

  return calcDiscount;
 }
calcTotal(cost, discount);
 console.log("With the original price of the item being "+cost+" and the discounted being "+discount+ ", the result for the discounted price of the item is "+calcDiscount);




