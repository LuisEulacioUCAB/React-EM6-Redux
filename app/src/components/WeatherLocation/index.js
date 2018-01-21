import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

const WheaterLocation = () => (
    <div className="weatherLocationCont">
        <Location city = {'Buenos Aires'}/>
        <WeatherData/>
    </div>
);

export default WheaterLocation;