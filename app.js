window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api = `http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}&appid={a539800931c1b68275dcba2ff586cf92}
           `
        });
    } else{
        h1.textContent = "This is not working because, well Reasons. Mostly No Geo Location."
    }
})