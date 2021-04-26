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
//
// var randomNumber = Math.floor(Math.random() * (100 - 50)) + 50;
// var cones = randomNumber;
// var purchasedCones = Math.floor(Math.random() * (5 - 1) + 1);
// var conesBought = purchasedCones;
//
// do {
//     console.log(`I have ${cones} cones left to sell`)
//     cones -= conesBought;
// } while (cones >=0)
// console.log(`Sold out!!!`)


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




// function countDown() {
//     for(let i = counter; i > 0; i--) {
//         console.log("second: " + i);
//     }
// }
// for(let i = 0; i <= 5; i++) {
//     console.log("first: " + i);
//     var counter = i;
//     if(i === 5) {
//         countDown();
//     }
// }


// TODO: Loop through a set of numbers (0-30), if the number you're currently at is even, add 2 to it. If it's an
//  odd number, print "odd"
// // HINT: remember the remainder operator (modulo)


// for (let taters = 0; taters <= 30; taters++){
//     if(taters % 2 === 0){
//         // console.log(`You have ${taters} taters!`);
//
//         taters + 2;
//     }else{
//         console.log("odd tater " + taters)
//     }
// }




// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  If it's neither print "I'm not playing"
//  Print "marco polo" if it's divisible by 3 and 5.

for (let fish = 1; fish <=40; fish++) {
    if (fish % 3 === 0){
        console.log(fish + " marco polo")
    }else if (fish % 5 ===0){
        console.log(fish + " polo marco")
    }else{
        console.log(fish + " I'm not playing!!!")
    }
}

