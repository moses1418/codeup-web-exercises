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


    //  let days = ["Monday", "Tuesday", "Wednesday"];
    //  let remainingDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];
    //
    //  remainingDays.forEach(function eachDay(day) {
    //      console.log(`Here are the remaining days ${day}.`);
    //      days.push(day);
    //  });
    // console.log(days);





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
//     console.log("-----------")
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







    // var aboutMe = new Object();
    // aboutMe["favCar"] = "GT-R";
    // aboutMe["kids"] = 2;
    // aboutMe["favCookie"] = "oreo";
    // aboutMe.footballTeam = "Texans";
    // aboutMe.baseballTeam = "Yankees";
    // aboutMe.soccerTeam = "Mexico";
    //
    // console.log(aboutMe);
    //
    //
    // var thisIsME = {
    //     City: "San Antonio",
    //     Age: 29,
    //     music: "country",
    // };
    // console.log(thisIsME);


    // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation
// TODO: write a function that returns the sport and numOfPlayers from your 'team' object
//
//     let yourFavSportsTeam = {};
//     yourFavSportsTeam.city = "New York";
//     yourFavSportsTeam.coach = "Aaron Boone";
//     yourFavSportsTeam.sport = "Baseball";
//     yourFavSportsTeam["numOfPlayers"] = 40;
//     yourFavSportsTeam["numOfChampsWon"] = 27;
//     yourFavSportsTeam["isBestTeam"] = "yes";
//     function team(obj){
//         return [obj.sport, obj.numOfPlayers];
//     }
//
//     // console.log(yourFavSportsTeam);
//     team(yourFavSportsTeam);


    var theSpurs = {
        city: "SA",
        coach: 'gregg',
        wins: 5,
        players: ["one", "two", "tim duncan", "manu", "david robinson"],
        playerInfo: [
            {
                name: "Tim",
                age: 40,
                mvp: 3
            },
            {
                name: "manu",
                age: 38,
                mvp: 6
            }
        ],
        otherNBATeams: {
            Jazz: {
                city: "Salt Lake City",
                mascot: "Jazz Bear",
                champsWon: 0
            },
            Mavs: {
                city: "Dallas",
                mascot: "MavsMan & Champ",
                champsWon: 1
            },
            Pistons: {
                city: "Detroit",
                mascot: "Hooper the Horse",
                champsWon: 3
            }
        }
    }
    // console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.




    /** Mini Exercises */
    /*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
          isOpen, ranking, yearOpened), as
          well as, information about at least 5 different animals (think nested objects). For each
          Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
           livingPlace). Each animal must also contain a method that returns the sound of that
            animal using the THIS keyword.
           hint: Each animal should have at least 5 properties (one of them being animalSound);
    */

        var zoo = {
            name: "jokersZoo";
            city: "gohtam";
            isOpen: "open";
            ranking: 1;
            yearOpened: 2020;
            animals: {
                hyena: {
                    furColor: "black/grey";
                    canFly: "no";
                    superFast: "yes";
                    Sound: "hehehehe";
                    animalSound: function(){
                        return (`this animals makes a ${this.sound}!`)
                    }

                },
                tiger: {
                    furColor: "orange/black";
                    canFly: "no";
                    superFast: "yes";
                    Sound: "rawr";
                },
                duck: {
                    furColor: "yellow";
                    canFly: "yes";
                    superFast: "no";
                    Sound: "quack, quack";
                }
            }
        }




})()