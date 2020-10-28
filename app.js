window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

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
            const {temp} = data.main;
            const {description} = data.weather[0]
            //Set DOM Elements from the API
            temperatureDegree.textContent = temp
            temperatureDescription.textContent = description
            locationTimezone.textContent = data.name
        })
        });

        

    } else{
        h1.textContent = "This is not working because, well Reasons. Mostly No Geo Location."
    }
});