import React, { useState, useEffect } from 'react';
// import { mathRound, sunTime, degToCompass, fetchIcons } from '../utils/index'
// import DateDisplay from './date'

const WeeklyForcast = ({weeklyData}) => {
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny');

    console.log('Weekly Component', weeklyData )
    useEffect(() => {
        // if (data) {
        //     let weather = fetchIcons(data.weather[0].id)
        //     return setWeatherIcon(weather)
        // }
    }, []);

    //TODO's:
    //need to map through the array of forcasts
    //possibly make another child component of this one to format single data. Move helper functions there.
    //implement one of the react sliders
     // overall will need to decide on layout when weather icon is on bigger screen sizes like tablets. Maybe limit it to those sizes and make it responsive down to phone screens. This may effect the sliders.
    return (
        <div className="card-container mt-3">
            This is the weekly forcast component
        </div>
    );
};

export default WeeklyForcast;