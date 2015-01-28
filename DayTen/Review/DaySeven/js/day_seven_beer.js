/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *Counting Beer
 */

//alert("Testing to see if this works!");


for(var i=99; i>0; i--){
 
    //Add a check for the last round of beers so we can get rid of that 1 bottle(S) of beer on the wall
    if (i===1) {
        console.log(i + " bottle of beer on the wall " + i + " bottle of beer. You take one down pass it around, no more bottles of beer on the wall. \nThe End");
    } else{
        console.log(i + " bottles of beer on the wall " + i + " bottles of beer. You take one down pass it around, " +(i-1)+ " bottles of beer on the wall.");   
    }
    
}























