/*
 *Chris Fortin
 *1/22/15
 *SDI Campus
 *Looping Arrays
*/

//alert("What you gonna do with all that junk all that junk inside your trunk?");


// Basic structure of for loop over array
// For(var i = 0; i<array.length; i++){}
// Create an array of Scooby Doo Characters
var names = ["Scooby", "Shaggy", "Velma", "Fred"];

// Loop though the whole array and tell them they solved the case.

for (var i = 0; i<names.length; i++) {
    console.log(i);
    
    console.log(names[i]);
    console.log("You solved the case "+names[i]);
}


// Create an array of bills and add them up

var bills =[50,10,5,20,10];

// create a variable to hol the total
var totalBills = 0;
for(var j = 0; j < bills.length; j++){
    
    // Add each individual to the total
    // totalBills = totalBills + bills[j];
    
    // Only care about bills that are equal to or greater then $20
    
    if (bills[j]>=20) {
        totalBills += bills[j];
    }
    
    
    
    
}

console.log("The total of the bills is "+totalBills);



