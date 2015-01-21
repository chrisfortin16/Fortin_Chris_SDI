/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *While Loops
*/

//alert("Testing to see if this works!");

var counting = prompt("Please enter your age!");

while (isNaN(counting) || counting === "") {
  
counting = prompt("Please ONLY use numbers, Please enter your age.");

}

while(counting < 100){
    console.log("At "+counting+" years old, you are currently "+ (100 - counting) +" years away from 100.");
    
    counting++;
}