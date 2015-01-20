/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *For Loops
*/
//alert("Testin to see if this works");

// Basic for loop structure
/*
for(initaliation; Condition to test; Increment of change){
    code to run as long as the condition is ture
}
*/

for(var i=0; i<20; i+=4){
    // Code to run aslong as i<20
    console.log("The value of i = "+i);
    
}

for(var k=0; k<5; k++){
    
    console.log("The value of k is "+k);
    //Add a break point
    //If k is equal to 3 then stop the code
    
    
    if (k===3) {
        console.log("I am done");
        break;
    }
    
}