

// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather",
//     type: "GET",
//     data: {
//         APPID: OPEN_WEATHERMAP_TOKEN,
//         lat: 32.7537,
//         lon: -97.1081,
//         units: "imperial"
//     },
//
//     success: function (data){
//         console.log(data);
//     }
//
// });

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast",
    type: "GET",
    data: {
        APPID: OPEN_WEATHERMAP_TOKEN,
        lat: 32.7537,
        lon: -97.1081,
        units: "imperial"
    },

    success: function (data) {
        console.log(data);
    }
});