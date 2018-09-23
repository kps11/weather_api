class Weather {
    constructor(city ,state){
        this.apikey = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }


    //Fetch data from Weather API

    async getWeather(){
        const weatherData = await fetch(`http://api.wunderground.com/api/${this.apikey}/conditions/q/${this.state}/${this.city}.json\n`)
        const responseWeatherData = await weatherData.json();
        return responseWeatherData.current_observation ;
    }

    //Change Weather location
    changeLocation(city,state){
        this.city =city;
        this.state =state;
    }
}

