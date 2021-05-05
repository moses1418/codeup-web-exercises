"use strict";


// Write a function called getSquare. It should take in one input and return the square (not square root) of that input
// as a number. If the input is not a number or numeric string, getSquare should return false.

function getSquare(x){
    var num = (x * x);

    if (isNaN(x)){
        return false;
    } else {
        return num;
    }
}

console.log(getSquare(4));

//----------

// Write a function called getReverse. It should take in one input and return the same string, in reverse. If the input
// is not a string (a number, boolean, etc) or is a numeric string ("45"), then return false.

function getReverse(str){
    // var str = (typeof x === "string" && isNaN(x));
    var newString = "";

    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(getReverse("hello"));

//-------------

// Write a function called multiplySquares(). It should take in two inputs, square each input, then return the product
// of mulitplying them together. If the input is not a number (5) or numeric string ("5"), the method should return false

function multiplySquares(x, y){
    var product = getSquare(x) * getSquare(y);

    if (isNaN(x) || isNaN(y)){
        return false;
    } else {
        return product;
    }
}

console.log(multiplySquares(4, 2));

//--------------

// Write a function called addTo. It should take in one input and return the result of adding 3 to that input. If the
// input is not a number or numeric string, addTo should return false

function addTo(x){
    var product = (x + 3);

    if (isNaN(x)){
        return false;
    } else {
        return product;
    }
}

console.log(addTo(0));

//---------------

// Write a function called subtractFrom. It should take in one input and return the result of subtracting 3 from that
// input. If the input is not a number or numeric string, subtractFrom should return false.

function subtractFrom(x){
    var product = (x - 3);

    if (isNaN(x)){
        return false;
    } else {
        return product;
    }
}

console.log(subtractFrom(3));

//----------------

// Write a function called getLowestNumber. It should take in three inputs and determine which input is the lowest
// number. If ANY of the inputs are not numbers or numeric strings, getLowestNumber should return false

function getLowestNumber(x, y, z){

}



