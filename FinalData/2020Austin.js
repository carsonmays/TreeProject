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

for ( var i = 0; i < markers2020.length; ++i )
{
  var popup = markers2020[i].SPECIES +
              '<br/>' + markers2020[i].COM_NAME +
              '<br/><b>Height:</b> ' + markers2020[i].HEIGHT +
              '<br/><b>Park Name:</b> ' + markers2020[i].PARK_NAME +
              '<br/><b>Condition:</b> ' + markers2020[i].CONDITION;

  var m = L.marker( [markers2020[i].LATITUDE, markers2020[i].LONGITUDE], {icon: myIcon} )
                  .bindPopup( popup )
                  

  markerClusters.addLayer( m );
}

 map.addLayer( markerClusters );