//INIT localStorage object
const storage = new Storage();
const weatherLocationdata = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocationdata.city,weatherLocationdata.state);
const ui = new UI();
// weather.changeLocation('Miami','FL');

//Get weather loan n DOM load
document.addEventListener('DOMContentLoaded',getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city,state);
    getWeather();

    //close  the modal
    $('#locModal').modal('hide');


})



function getWeather() {

    weather.getWeather().then(result => {ui.paint(result);}).catch(err => console.log(err));
}
