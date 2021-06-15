"use strict";

$("#all-caps").hide()

$("span").hide()

$(".show-me").show()

// $(".pink").css("background-color", "pink")

$("h1", "h2").css("background-color", "orange")

$(".container> div:nth-child(1)").append("<img src='https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg' height='50px' width='600px' >")
$("#pink").css("background-color", "pink");
$("#orange").css("background-color", "orange");
$(window).load(function (){
    $("#orange").hide()
});
$(document).ready( function () {
    $("#pink").hide()
})

$