/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *Working with While Loops
 */

//alert("Testing to see if this works!");

// Basic while loo
// The while loop, loops though a blaock of code as long as the condition is trure
/*
 * var i = 0;
 * while(condition){
    code that runs when that condition is true.
    Incremental change to the conuting variable -
    OR infinite loop
 }
*/

var counter = 0; // Initalizing counter
while (counter < 20) {
    // Code that will run as long as counter is less then 20
    console.log(counter + " Somethings just never end!");
    
    //Change for the counter variable
    counter++;
}



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
















