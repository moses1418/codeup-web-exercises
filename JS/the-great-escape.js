"use strict";




function getKindOfDog(){
    return prompt("What kind of dog is it?");
}


function getContactInfo(){
    return prompt( "How do I contact you when I find the dog?");
}


function getDogName(){
    return prompt("What is your dog's name?");
}



function playTheGreatEscape(){

    //Get all info
    var dogKind = getKindOfDog();
    var dogName = getDogName();
    var contactInfo = getContactInfo();

    //Start searching
    alert("Time to search for this dog!");
    //see a dog!
    alert("I see a dog")

    var kindOfDogSeen = getKindOfDog();

    // Check if dog matches
    var isTheLostDog = kindOfDogSeen === DogKind && confirm("Does dog respond tothe name: " + dogName);



    if (isTheLostDog){
        alert("Puts the leash on " + dogName);
        alert("Time to call the owner!");
        alert("calling: " contactInfo);
    }

}

playTheGreatEscape();
