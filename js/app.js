/*
The heart of the program, all functions pertaining to the actual map
receiving information from the web is found here.
Help was received by the Google Maps API's Guides
Link : https://developers.google.com/maps/documentation/javascript/tutorial
Amazing resource, modification have been made to any and all code that pertains to the website above.
*/


//Global Variables
var map, clientID, clientSecret;
function AppViewModel() {
    var self = this;

    this.searchOption = ko.observable("");
    this.drop = [];
    this.populateInfoWindow = function(box, infowindow) {
        if (infowindow.box != box) {
            infowindow.setContent('');
            infowindow.box = box;



            // Foursquare API Client Information
            clientID = "KXCHKGY0F2UCNFXGBWRBVIZOOTLYLGKJGMWW1QJQYFCKDMFM";
            clientSecret =
                "YZUBF3M5ESNEK2CKXGRVSKEV4ON1WO32SG2L0VK4MWGSFRVH";
            // URL for Foursquare API
            var apiUrl = 'https://api.foursquare.com/v2/venues/search?ll=' +
                box.lat + ',' + box.lng + '&client_id=' + clientID +
                '&client_secret=' + clientSecret + '&query=' + box.title +
                '&v=20170708' + '&m=foursquare';
            // Foursquare API Information Gathering
            $.getJSON(apiUrl).done(function(box) {
                var response = box.response.venues[0];
                self.street = response.location.formattedAddress[0];
                self.city = response.location.formattedAddress[1];
                self.zip = response.location.formattedAddress[2];
                self.country = response.location.formattedAddress[3];
                self.category = response.categories[0].shortName;
                self.htmlContentFoursquare =
                    '<h5 class="info">(' + self.category +')</h5>' + '<div>' + '<h6 class="loc_address"> Address: </h6>' +//display Adress
                    '<p class="address">' + self.street + '</p>' +//dispplay street
                    '<p class="address">' + self.city + '</p>' +//city
                    '<p class="address">' + self.zip + '</p>' +//zip code
                    '</div>' ;
                infowindow.setContent(self.htmlContent + self.htmlContentFoursquare);
           })
            // ALERT
           .fail(function() {
                alert("There was an issue loading the Foursquare API. Please refresh your page to try again.");
            });


            this.htmlContent = '<div>' + '<h4 class="loc_name">' + box.title + '</h4>';
            infowindow.open(map, box);
            infowindow.addListener('closeclick', function() {
                infowindow.box = null;
            });
        }
    };
// classic bounce animation once object is clicked on
    this.populateAndBounceMarker = function() {
        self.populateInfoWindow(this, self.largeInfoWindow);
        this.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout((function() {
            this.setAnimation(null);
        }).bind(this), 1400);
    };
    // As map is being loaded up, Center the map arould Orlando
    this.initMap = function() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(28.538335, -81.379236),
            zoom: 7,
            styles: styles
        };
        // Construct map based on the zoom and teh center of the above code
        map = new google.maps.Map(mapCanvas, mapOptions);
        // Information Box that will be displayed after clicking the marker
        this.largeInfoWindow = new google.maps.InfoWindow();
        for (var i = 0; i < data.length; i++) {
            this.boxTitle = data[i].title;
            this.dropLat = data[i].lat;
            this.dropLong = data[i].lng;
            // Drop teh Markers
            this.box = new google.maps.Marker({
                map: map,
                position: {
                    lat: this.dropLat,
                    lng: this.dropLong
                },
                title: this.boxTitle,
                lat: this.dropLat,
                lng: this.dropLong,
                id: i,
                animation: google.maps.Animation.DROP
            });
            this.box.setMap(map);
            this.drop.push(this.box);
            this.box.addListener('click', self.populateAndBounceMarker);
        }
    };

    this.initMap();
// Filter through the Data of the multiple locations.(drop.js)
    this.dataFilter = ko.computed(function() {
        var result = [];
        for (var i = 0; i < this.drop.length; i++) {
            var boxLocation = this.drop[i];
            if (boxLocation.title.toLowerCase().includes(this.searchOption()
                    .toLowerCase())) {
                result.push(boxLocation);
                this.drop[i].setVisible(true);
            } else {
                this.drop[i].setVisible(false);
            }
        }
        return result;
    }, this);
}
//Google Error, if error results nce loading up teh map.
googleError = function googleError() {
    alert('Oops. Google Maps did not load. Please refresh the page and try again!');
};

function startApp() {
    ko.applyBindings(new AppViewModel());
}
