(function (){
    "use strict";

    // var hasCar = true;
    // if(hasCar){
    //     console.log("Let's get in and go!");
    // }else{
    //     console.log("We need to call a uber!")
    // }


//     function getToDestination(age, isInsured, hasCar, canGetUber) {
//         var isLicensed = age >= 16;
//         var isLegalDriver = isInsured && isLicensed;
//
//         if (isLegalDriver && hasCar) {
//             console.log("Let's get in and go!");
//         }else if ((!isLegalDriver || !hasCar) && canGetUber){
//             console.log("We need to call an uber!");
//         }
//         else {
//             console.log("I think my friend can give us a ride!")}
//     }
//
//     getToDestination(23, false, true, false)
//
//
//
//
// // TODO: MINI EXERCISE -> IF / ELSE IF / ELSE
// //  -> Let's augment our getToDestination() function
// //  -> Create a function called canGetRideshare() which will *RETURN* a boolean
// //      -> It will determine if there are drivers nearby and the person has enough money for the ride
// //  -> Now, when you call getToDestination(), your canGetRideshare parameter will be an argument that is
// //  -> fulfilled by a call to canGetRideshare() (yes, I know, the whole parameter name vs argument name thing)
// //  -> Be sure to log to the user if they can or cannot get a rideshare
// // TODO: BONUS -> This exercise will probably get the mind wondering "How can I make this more?.."
// //  -> Consider this: What if mileage determined:
// //      -> If the rider has enough funds?
// //      -> If there is a driver close enough to service the rider
//
//
//         var driversNearby = true;
//         var money = 20;
//         function canGetUber(driversNearby, money){
//             var getUber;
//             if (driversNearby && money >= 10) {
//                 getUber = true;
//             console.log("I can get an uber!")
//         }else{
//             getUber = false;
//                 console.log("Guess we are walking!")}
//             return getUber;
//
//         }
//
//         console.log(canGetUber(true, 5))




    // TERNARY

    function showFatType(){
        var fatType= "butter";

        var isButter = fatType.toLowerCase() === "butter";

        return isButter
            ? "'Mo' butta, mo' betta!' \n\t -Paula Deen";
            : "'I can't Believe It's Not Butter!' \n\t-Fangirls of Favio";
    }

        console.log(showFatType());

    // SWITCH STATEMENTS

        var age = 26;
        var heartRange;
        switch


}
)()