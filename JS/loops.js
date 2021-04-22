"use strict";

// // TODO: MINI EXERCISES
// // TODO: print all even numbers between 0 and 25;
// // TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// // correct password is given.
// hint: start by defining the correct password and don't forget to link your html file

// var x = 0;
//
// while (x < 25) {
//     if ( x % 2 === 0)
//     console.log('here is your even # ' + x);
//     x++;
// }





var password = "tiger";
var input = prompt("What is teh password?")

while( password != input){

    alert("that is the wrong password")
    input = prompt("try again")
}
alert("welcome to the show")
