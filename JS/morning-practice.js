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
    return Math.cbrt(x);
}

console.log(cubeRoot(10));

// Write a function called last(input) that returns the last character of a string

function last(input){
    return input.slice(-1);
}

console.log(last("chocolate"));