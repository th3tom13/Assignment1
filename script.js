var mymap = L.map('mapid').setView([38.63584, -90.23680], 11);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(mymap);

var marker = L.marker([38.6126894, -90.3542655]).addTo(mymap);
var marker2 = L.marker([38.6137534,-90.3489894]).addTo(mymap);
var marker3 = L.marker([38.6112852,-90.20081]).addTo(mymap);
var marker4 = L.marker([38.6335563,-90.2372426]).addTo(mymap);
var marker5 = L.marker([38.650538,-90.3382135]).addTo(mymap);

marker.bindPopup("<b>Carl's Drive-In</b><br>Tom's favorite Burger.").openPopup();
marker2.bindPopup("<b>Kolache Factory</b><br>Tom's favorit breakfast.").openPopup();
marker3.bindPopup("<b>Pieces Board Game Bar And Restaurant </b><br>Tom's favorite sushi bowl.").openPopup();
marker4.bindPopup("<b>Midtown Sushi & Ramen</b><br>Tom's favorite Ramen.").openPopup();
marker5.bindPopup("<b>Sushi AI</b><br>Tom's favorite Sushi.").openPopup();