//alert("Testing to see if this works");

var j = prompt("Please enter a value for J 1-100");
while (isNaN(j) || j === "") {
    //what its saying is (Is age Not a Number?) ture
    // This code runs any time this code is not a number
    //IF it is not a number then reprompt the user

j = prompt("Only use numbers, Please enter a value for J 1-100.");

}
for(j=0; j<101; j+=1 ){
    console.log("You could have entered "+j+" for the value of J");
}