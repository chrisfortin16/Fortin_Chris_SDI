/*
 *Chris Fortin
 *1/20/15
 *SDI Campus
 *Zombies
 */
//alert("Testing to see if this works");


// Zombie Attack
// There is a zombie at Full Sail
// It can bite 4 people a day and turn them into zombies
// The CDC wants to know how many zombies there will be in 8 days

var numZombies = 1; //How many zombies do we have?
var numBites = 4; //How many people the zombie bites per day
var days = 8; // Number of days.
var daysTakes = 0;
/*
for(var i =1; i<=days; i++){ //start at day one, add a day untill day 8
    //How many new zombies where made and when do they go bite people
    //They get bitten and the next day they can bite
    
    //New zombies made everyday
    var newZombies = numZombies * numBites;
    
    //Update the total number of zombies at the end of the day
    numZombies += newZombies;
    
    //Report at the end of the day
    console.log("there are "+numZombies+" zombies at the end of day #"+i+".");
    
}
*/


// How many days will it take to rach a million zombies? how long will it take for me to get to a million dollars?


while(numZombies <= 1000000){
    
    //NewZombies
    var newZombies = numZombies * numBites;
    
    //How many zombies do we have?
    numZombies += newZombies;
    
    //Add 1 to the total number of days it takes
    daysTakes++;
    
}
console.log("It will take "+ daysTakes +" days for 1 million zombies.");
























