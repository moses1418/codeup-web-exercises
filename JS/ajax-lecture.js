(function () {
    "use strict";
})();
// TODO: create a JSON object about your favorite hobby. make sure to include at least one of every data type that can
//  be accepted as values
// JSON OBJECT
// {
//     "name":"gaming",
//     "yearsActive": 16,
//     "isSkilled": true,
//     "yearRetired": null,
//     "favoriteGames": ["valorant", "league of legends", "apex"],
//     "favoritePlatform": {
//         name: "steam",
//         bestPlatform: true,
//     }
// }
//AJAX
// JQUERY REQUEST
// $.ajax()
// status property tells you if the request was successful its a number,
// 200 is minimum for successful request
// 300 is redirected successful
// 400 is failed request ( err 404 )
// 500 is server error
//GET request - getting information
// console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));
// $.ajax("https://jsonplaceholder.typicode.com/comments", {
//     //ready to send data POST;
//     type: "POST",
//     // data is anything you are passing to the server;
//     data: {
//         title: "test",
//         article: "test2",
//     }
// })
//URL - location to go look for something
//POST -adding/sending information
//DELETE - specify information in request to be DELETED
//PUT - specify information in request to be EDITED
// TODO: using https://jsonplaceholder.typicode.com/ make an ajax request to the comments endpoint and console it.
// TODO: make a POST request to the '/posts' endpoint, make sure to include any data required for that post to be made successfully

// $.ajax("https://jsonplaceholder.typicode.com/")

console.log($.ajax("https://jsonplaceholder.typicode.com/comments"));

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    type: "POST",
    data: {
        first_name: "George",
        last_name:  "Weathers",
        city:       "Denver",
        state:      "CO"
    }
})

$.post("https://jsonplaceholder.typicode.com/posts", {
    first_name: "George",
    last_name:  "Weathers",
    city:       "Denver",
    state:      "CO"
})

$.each(json, function(i, data){
    $("table.table").append("<tr><td>" + data.member_id + "</td><td>" + data.comment + "</td></tr>");
})