"use strict";

//
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for
// that number (just multiply by the numbers 1 through 10)
//

// var randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
//
// function showMultiplicationTable(num) {
//     for (let x = 1; x <= 10; x++) {
//         var num = randomNumber;{
//             console.log(`${num} * ${x} = ${num * x}`)
//         }
//     }
// }
// showMultiplicationTable();


// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to
// the console whether each number is odd or even. For example:



// var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);

// for (let i = 1; i <= 10; i++){
//     var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
//     if (randomNumber % 2 === 0);{
//         console.log(randomNumber + ' is even');
//
//     }
// }

//-------------

for (let i = 1; i <=10; i++) {
    var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
    if (randomNumber % 2 === 0){
        console.log(randomNumber + " is even")
    }else{
        if (randomNumber % 2 === 1) {
        console.log(randomNumber + " is odd")
        }
    }
 }

//-----------


for(let i = 1; i<= 9; i++){
        console.log(i.toString().repeat(i));
    }

//
//
//
//
// ----------
//
for( let cars = 100; cars >= 5; cars -=5){
    console.log(`${cars} cars left`)
}






