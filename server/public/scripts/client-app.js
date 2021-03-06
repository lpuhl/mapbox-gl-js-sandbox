// mapboxgl.accessToken = "pk.eyJ1IjoiZWxpemFiZXRoIiwiYSI6IkNmdnB1cmMifQ.NlNxa3kOsDxhWJVGxZsPGg";
//
// var map = new mapboxgl.Map({
//     container: "map", // container id
//     style: "mapbox://styles/mapbox/light-v9", //stylesheet location
//     center: [-93.25, 44.97], // starting position
//     zoom: 10 // starting zoom
// });
//
// var stations = require("./../../data/niceRideStations.geojson");
// console.log(stations);
//
// function buildLocationList(data) {
//   // Iterate through the list of stores
//   for (i = 0; i < data.features.length; i++) {
//     var currentFeature = data.features[i];
//     // Shorten data.feature.properties to just `prop` so we're not
//     // writing this long form over and over again.
//     var prop = currentFeature.properties;
//     // Select the listing container in the HTML and append a div
//     // with the class 'item' for each store
//     var listings = document.getElementById('listings');
//     var listing = listings.appendChild(document.createElement('div'));
//     listing.className = 'item';
//     listing.id = 'listing-' + i;
//
//     // Create a new link with the class 'title' for each store
//     // and fill it with the store address
//     var link = listing.appendChild(document.createElement('a'));
//     link.href = '#';
//     link.className = 'title';
//     link.dataPosition = i;
//     link.innerHTML = prop.Station;
//
//     // Create a new div with the class 'details' for each store
//     // and fill it with the city and phone number
//     var details = listing.appendChild(document.createElement('div'));
//     details.innerHTML = prop.Terminal;
//     // if (prop.phone) {
//     //   details.innerHTML += ' &middot; ' + prop.phoneFormatted;
//     // }
//   }
// }
//
// map.on("load", function() {
//   map.addSource("MNbikeways", {
//     type: "geojson",
//     data: "./../../data/bikeways.geojson"
//   });
//   map.addLayer({
//       id: "MNbikeways",
//       type: "line",
//       source: "MNbikeways",
//       "source-layer": "MNbikeways",
//       layout: {
//           // visibility: "visible",
//           "line-join": "round"
//       },
//       paint: {
//           "line-color": "rgba(61,153,80,0.55)",
//           "line-width": 3
//       }
//   });
//   map.addSource("NiceRide", {
//     type: "geojson",
//     data: "./../../data/niceRideStations.geojson"
//   });
//   map.addLayer({
//      id: 'locations',
//      type: 'symbol',
//      source: 'NiceRide',
//      layout: {
//        'icon-image': 'bicycle-15',
//        'icon-allow-overlap': true
//      }
//    });
//
//
//    buildLocationList("./../../data/niceRideStations.geojson");
//
//   // stores.features.forEach(function(marker) {
//   //   // Create a div element for the marker
//   //   var el = document.createElement('div');
//   //   // Add a class called 'marker' to each div
//   //   el.className = 'marker';
//   //   // By default the image for your custom marker will be anchored
//   //   // by its top left corner. Adjust the position accordingly
//   //   el.style.left = '-28px';
//   //   el.style.top = '-46px';
//   //   // Create the custom markers, set their position, and add to map
//   //   new mapboxgl.Marker(el)
//   //     .setLngLat(marker.geometry.coordinates)
//   //     .addTo(map);
//   // });
//
// })
