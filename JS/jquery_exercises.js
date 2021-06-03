"use strict";

// $(window).load(function (){
//     alert("this is an alert for jquery");
//
// });
//
// $(".codeup").css('border', '1px solid #F00')
//
// $("li").css("font-size","20px")
//
// $("h1, p, li").css("background-color", "rgba(227, 255, 15,.5)")
//
// var contents = $('h1').html();
// alert(contents);


$("h1").click(function (){
    $(this).on("click", "h1")
        .css('background-color', '#ff0000')
},
    function (){
    $(this).off("click", "h1")
        .css("background-color", "#fff")
    });

$("p").dblclick(function (){
    $("p").css("font-size", "18px")
});


