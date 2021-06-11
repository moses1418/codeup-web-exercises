const mapboxToken = "pk.eyJ1IjoibW9zZXMxNCIsImEiOiJja3BwbmZ5c3AwMm1mMm5wZnMybzc2bnhuIn0.mrl-hvtqsqahg6M5m0DFng"
mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

let marker = setMarker([-98.4916, 29.4252]);
addMapEvent(marker);

let geoCoder = setGeocoder();
addGeocoderToMap(geoCoder);
addGeocoderEvent(geoCoder)




function setGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder)
}

function addGeocoderEvent(geocoder){
    geocoder.on('result', function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
    })
}

function setMarker(point) {

    let marker = new mapboxgl.Marker().setLngLat(point)
                                            .addTo(map)


}

function addMapEvent(marker){
    map.on("click", function (event) {
        marker.setLngLat(event.LngLat)
                            .addTo(map)
    })
}


let restaurantArr = [
    {
        address: "8915 Potranco Rd, San Antonio, TX 78251",
        popUp: "<p>Cane's sauce</p>"
    }]

function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
};

setPopup(restaurantArr)

function setPopup() {
    let popup = new mapboxgl.Popup()
        .setHTML(`<p>${textDetails}</p>`)
        .addTo(map)

    marker.setPopup(popup)
}











