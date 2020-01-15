const regularMap = () => {
    const location = new google.maps.LatLng(50.062482, 19.937058);

    const mapOptions = {
        center: location,
        zoom: 14
    };

    const map = new google.maps.Map(document.getElementById('map-container'), mapOptions);

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Krakow'
    });
}

// Initialize
google.maps.event.addDomListener(window, 'load', regularMap);