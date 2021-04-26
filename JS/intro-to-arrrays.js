(function (){
    "use strict";

    // TODO: Make a new array which holds elements based on your own characteristics
//  -> In a console.log, output a string which describes yourself based on those elements
//  -> KEEP IN MIND ZERO-INDEXING!

    // myCharacteristics("Moses", "gamer", "370z");
    //
    // console.log(`Hello, my name is ${myCharacteristics[0]}! I drive a ${myCharacteristics[2]} and I am a ${myCharacteristics[2]}`);





    // TODO: MINI-EXERCISE
//  -> Create an array with at least 5 elements, describing whatever you'd like!
//  -> Create a loop which will log each element to the console
//  -> Wrap that loop in a function which has an array parameter
//  -> Call the function and pass in your array as the argument
//  -> DID YOU KNOW: You can add different data types to an array??
//      -> Try adding strings, numbers, or booleans as elements





    // TODO: MINI-EXERCISE
     // -> var days = ["Monday", "Tuesday", "Wednesday"];
     // -> Create an array with the remaining days of the week
     // -> Call .forEach() on that NEW array
     // -> Inside the inline function you pass into .forEach():
     //     -> add the remainingDay of the week to the old array
     // -> When the loop completes, console.log() the completed day of the week array


     let days = ["Monday", "Tuesday", "Wednesday"];
     let remainingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

     remainingDays.forEach(function eachDay(day) {
         console.log(`Here are the remaining days ${day}.`);
         days.push(day);
     });
    console.log(days);





    // TODO - MINI EXERCISE
//  -> Let's reverse engineer our days of the week array
//  -> Make sure to console.log in order to see your code's behavior!
//  -> Write a function which takes in your complete days of the week array
//      -> It will eventually return your reverse-engineered array
//  -> Using a FOR LOOP (not .forEach())
//      -> pop() each item off the days array
//      -> use the returned value from pop() to unshift the element
//      -> on to the new array
//  -> HINT: You may find that the loop doesn't behave as expected
//      -> console.log EVERY possible thing which could change as your loop runs
//          -> consider how the methods you are using change state of the array
    console.log("-----------")
    console.log('This is the current array for days ' + days)
    function daysOfTheWeek(weekDays) {
        var newWeek = [];
        var arrayLength = weekDays.length;
        console.log(`test parameters ${weekDays}`)
        for (let i = 0; i < arrayLength; i++) {
            newWeek.unshift(weekDays.pop());
            console.log(weekDays)
        }
        console.log(newWeek)
    }
    daysOfTheWeek(days);



})()