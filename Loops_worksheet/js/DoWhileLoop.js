/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *While Loops
*/

//alert("Testing to see if this works!");
/*
// Do While Loop
// The code will run at least once before checking the condition. 

var i = 0;
do{
    // This code will run before the condition is checked
    // It will also run as long as the condition is true
    console.log("The number is "+ i +".");
    
    i++
    
}while ( i<10 );

//Initilizing the variable
//Test

for(var i=0; i<5; i++){
  
  
    console.log("Blah");
}
*/
var a = prompt("Please enter a number between 1-100");
while (isNaN(a) || a === "") {
  
a = prompt("Please ONLY use numbers, Please enter your number.");
}
do{
    a--
}while( a === 0)

console.log("The variable is at " +a+ " and will take " +a+ " times to get back to 0.");
