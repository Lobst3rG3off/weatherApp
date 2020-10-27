window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description')

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position => {
           long = position.coords.longitude;
           lat = position.coords.latitude;

           const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a539800931c1b68275dcba2ff586cf92`;

           fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            const {temp, feels_like, temp_max, temp_min} = data.main;
        })
        });

        

    } else{
        h1.textContent = "This is not working because, well Reasons. Mostly No Geo Location."
    }
});