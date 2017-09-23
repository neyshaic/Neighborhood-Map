/**
Code constructed to customize the google maps page.
I have used the Gooogle API help page for help in creting this code.
Modifications have been made.
Original code : https://developers.google.com/maps/documentation/javascript/styling
**/

var styles = [
  {
    //color of land in general (tan in color)
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          //Following colors would make map more dark (night mode)
          /*{
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },*/
          //colors of the greenlands(forest)
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          //Following colors would make map more dark (night mode)
          /*
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },*/
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#ffc56b'}]
          },
          //Following colors would make map more dark (night mode)
          /*
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },*/
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#8c724a'}]
          },
          //Following colors would make map more dark (night mode)
          /*
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },*/
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d6b093'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#6c95d1'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#304c75'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#304c75'}]
          }
        ];
