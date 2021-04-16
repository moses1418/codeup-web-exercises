"use strict";

// For each of the following code blocks, read the code and predict what the result of evaluating it would be,
// then execute the statement(s) in the Chrome console.

//
//console.log(c);
// what is the value of a, b, and c?
// a = 3 b = 1 c = 3


var d = "hello";
var e = false;
d++;
e++;
//console.log(d++);
// NaN
//console.log(e++);
// !

var perplexed = 2; // perplexed is undefined (no value is assigned)
perplexed + 2;
//console.log(perplexed + 2);
// 4

//var price = 2.7;
//price.toFixed(2);
//console.log(price.toFixed(2));
// 2.70


isNaN(0)
//false
isNaN(1)
//false
isNaN("")
//false
isNaN("string")
//true
isNaN("0")
//flase
isNaN("1")
//flase
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false
// to illustrate why the isNaN() function is needed:
NaN == NaN

//console.log(isNaN(false));


!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true
//console.log(!!"0");


//----- 2
//
// var sample = "Hello Codeup"
//
// console.log(sample.length); // length is 12
//
// console.log(sample.toUpperCase()); // all upper case
//
// console.log(sample.toLowerCase()); // all lower case
//
// var samplestudents = sample + " students";
// console.log(samplestudents); // "Hello Codeup students"
//
// console.log(samplestudents.replace("students", "class")); // "Hello Codeup class"
//
// console.log(sample.indexOf("c"));  // -1
// console.log(sample.indexOf("C")); //6
// console.log(sample.substring(6 , 12)); // Codeup

//-------- 3

// var pricePerDay = 3;
//
// var littleMermaid;
// var brotherBear;
// var hercules;
//
// hercules = pricePerDay * 1;
// littleMermaid = pricePerDay * 3;
// brotherBear = pricePerDay * 5
// console.log(hercules + littleMermaid + brotherBear);

var hoursGoogle = 6;
var hoursAmazon = 4;
var hoursFacebook = 10;
var google = 400;
var amazon = 380;
var facebook = 350;
var total = 0;

if (google == 400){
    console.log(("I made " + (google * hoursGoogle)));
    var total = (google * hoursGoogle);
}
if (amazon == 380){
    console.log("I made " + (amazon * hoursAmazon));
    var total = total + (amazon * hoursAmazon);
}
if (facebook == 350){
    console.log("I made " + (facebook * hoursFacebook));
    var total = total + (facebook * hoursFacebook);
    console.log("I made " + total);
}

var classSize = 100
var classSchedule = "works with schedule"
if (classSize < 100 && classSchedule == "works with schedule"); {
    console.log("Congrats you are enrolled!")
}


var productsBought = 0;
var offerExpired = false;
var premiumMember = true;
if ((productsBought > 2 || premiumMember) && offerExpired === false){
    console.log("Congrats your product is offered");
    if ( premiumMember){
        console.log("Also thanks for being a premium member!");
    }
}

//------------ 4

var username = 'codeup';
var password = 'notastrongpassword';

if (password.length > 5){
    var longEnoughPassword = true;
    console.log("Good password length");
} else {
    console.log("Password not long nough");
} if (password.includes(username) === false);{
    console.log("Good password")
    var includesUsername = false;
} else {
    console.log("Password can be same as username");
} if (username.length < 20){
    var goodUsername = true;
    console.log("Nice Username")
} else {
    var goodUsername = false;
    console.log("Username can not be longer than 20 characters")
}
if (username){
    var username = username.trim();
}
if (password){
    var password = password.trim();
}

