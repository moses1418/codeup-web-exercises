"use strict";



function trim(input){
    return input.replaceAll(' ', '');
}

console.log(trim("I had pizza for dinner!"));


function cube(n){
    return n * n * n;
}
console.log(cube(2));


function cubeRoot(x){
    return Math.cbrt(x).toFixed(0);
}

console.log(cubeRoot(10));

// Write a function called last(input) that returns the last character of a string

function last(input){
    return input.slice(-1);
}

console.log(last("chocolate"));

//Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//If either of the arguments are not a numeric string or number, return a string message indicating which argument is
// not a number/numeric string

function remainder(x, y){
    if (isNaN(x) || isNaN(y)){
        return "This is not a number"
    } else {
        return x % y;
    }
}

console.log(remainder(5, 4))

// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1; i<= 9; i++){
    console.log(i.toString().repeat(i));
}
