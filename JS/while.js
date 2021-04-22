"use strict";


// var x = 2;
//
// while (x <= 65536) {
//     console.log(`your number is ` + x);
//     x *= 2;
// }


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random
// number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop
// your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her
// clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the
// random numbers for this exercise.

var randomNumber = Math.floor(Math.random() * (100 - 50)) + 50;
var cones = randomNumber;
var purchasedCones = Math.floor(Math.random() * (5 - 1) + 1);
var conesBought = purchasedCones;

do {
    console.log(`I have ${cones} cones left to sell`)
    cones -= conesBought;
} while (cones >=0)
console.log(`Sold out!!!`)


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
// // HINT: think of a countdown, remember if statements can be used inside of your statements


// var parkingSpots = 20;
// do {
//     console.log(`There are ${parkingSpots} parking spots left`)
//     parkingSpots -= 2;
// } while (parkingSpots > 0);
// console.log(`The parking lot is full.`)


