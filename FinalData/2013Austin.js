var map = L.map( 'map', {
    center: [30.27, -97.74],
    minZoom: 2,
    zoom: 12
  });
  
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
   }).addTo( map );
    

  var myIcon = L.icon({
    iconUrl: 'https://carsonmays.github.io/GEOG456/leaflet_tutorial/pngkin.com_tree-icon-png_945008.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
  });


  var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = markers[i].SPECIES +
              '<br/>' + markers[i].COM_NAME +
              '<br/><b>Height:</b> ' + markers[i].HEIGHT +
              '<br/><b>Park Name:</b> ' + markers[i].PARK_NAME +
              '<br/><b>Condition:</b> ' + markers[i].CONDITION;

  var m = L.marker( [markers[i].LATITUDE, markers[i].LONGITUDE], {icon: myIcon} )
                  .bindPopup( popup )
                  

  markerClusters.addLayer ( m );
}

 map.addLayer( markerClusters );

 
 