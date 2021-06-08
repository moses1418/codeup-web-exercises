// //make sure the DOM is loaded first
// document.addEventListener("DOMContentLoaded", function() {
//     addListeners();
// });
// //parent method for adding all listeners
// function addListeners(){
//     //get the elements to add listener and change image
//     let cardContainers = Array.from(document.querySelectorAll(".col-md-3"));
//     addEvents(cardContainers, 'assets/jazz-music-rubber-duck.jpg', 'mouseover');
//     addEvents(cardContainers, 'assets/question.png', 'mouseout');
// }
// //add mouseover/mouseout events to all selected elements
// function addEvents(cardContainers, imgPath, listenerType){
//     cardContainers.forEach((cc) => {
//         let card = cc;
//         //create listener which will call function change the image
//         let listener = function (event) {
//             let cardImg = card.querySelector(".card .card-img-top");
//             changeImage(cardImg, imgPath);
//         };
//         cc.addEventListener(listenerType, listener);
//     });
// }
// //actual function to swap images
// function changeImage(card, imgPath){
//     card.setAttribute('src', imgPath);
// }


//------------------------

// $(document).ready(function (){
//     $("#submitBtn").click(function (){
//         $("#override-bootstrap").css("background-color", "red");
//     })
// })
//
// $(document).ready(function (){
//     $(".card-text").click(function (){
//         $(this).css("background-color", "red");
//     })
// })
//
// $("#resetBtn").click(function (){
//     location.reload();
// })
//
//
// $("#main-title").click(function (){
//     $(this).css("font-size", "40px")
// })




//--------------------------

// TODO: Add a data-attribute to each card container (.col-md-3)
//  -> Give that data-attribute a value of 1-4 (moving top to bottom in the html)
//  -> Now, when a user hovers over one of the .col-md-3 containers, you should replace the text inside #card-title with the data-attribute value
//  -> When the user hovers out, the data-attribute value should be replaced with the original text ("Card")










//--------------------









// TODO: When an li with the .list-group-item class is clicked, replace the text with the same text, but uppercased
//  -> ALSO, change the background of the li to a new color
//  -> When the li is clicked again, reset the li background color to its original color
//      -> Don't worry about changing the text back

// $(".list-group-item").click(function (){
//     $(this).css({
//         "text-transform": "uppercase",
//         "background-color": "#ff0000",
//     });
// });

// $(".list-group-item").on("click", function (){
//     $(this).css({
//         "text-transform": "uppercase",
//         "background-color": "#ff0000",
//     }).off('click', function (){
//         $(this).css({
//             "background-color": "#fff"
//         })
// })
// });



//--------------------


// TODO: When the user clicks #submitBtn, log to the console the values of #first, #last, and #handleField
//  -> If any of the fields are empty, alert the user to fill the empty control (be sure to tell them which control was empty)

$("#submitBtn").click(function (){

    if ($.trim($("#first").val()) == ""){
        $('#first').css("border-color", "red");
        alert("First Name Empty");

    }

    if ($.trim($("#last").val()) == ""){
        $('#last').css("border-color", "red");
        alert("Last Name Empty");

    }

    if ($.trim($("#handleField").val()) == ""){
        $('#handleField').css("border-color", "red");
        alert("Handle Empty");

    } else {
        console.log($("#first").val(), $("#last").val(), $("#handleField").val());
    }
});
