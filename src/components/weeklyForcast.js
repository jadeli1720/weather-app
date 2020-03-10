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

    return (
        <div>
            This is the weekly forcast component
        </div>
    );
};

export default WeeklyForcast;