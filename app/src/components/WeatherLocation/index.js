import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SNOW } from './../../constants/weathers';
import './style.css';

const location = "Venezuela";
const api_key = "9707390674ae11e6d4a033cfde7de07a";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data = {
    temperature: 20,
    weatherState: SNOW,
    humidity: 20,
    wind: '10 m/s',
};

class WheaterLocation extends Component{

    constructor() {
        super();
        this.state = {
            city: 'Venezuela',
            data: data
        };
    }

    getWeatherState = weather =>{
        return SNOW;
    }


    getData = (weather_data) =>{
        const { humidity, temp} = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data ={
            humidity,
            temperature: temp,
            wind:`${ speed} m/s`,
            weatherState,
        }

        return data;
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then(data =>{
            return data.json();
        }).then(weather_data =>{
            const data = this.getData(weather_data);
            this.setState({ data }); 
        });

        console.log("ACTUALIZADO");
    }
    
    render = () => {
        const { city,data} = this.state;
        return( 
        <div className="weatherLocationCont">
            <Location city = {city}/>
            <WeatherData data={data}/>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
    };
}
export default WheaterLocation;