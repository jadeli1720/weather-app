import React, { useState, useEffect } from 'react';
import { mathRound, fetchWeekIcons, sunTime, getDay } from '../utils/index';

const Weekday = ({ day }) => {

    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')

    useEffect(() => {
        if (day) {
            let weather = fetchWeekIcons(day.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, []);

    console.log("weekday component",sunTime(day.dt))

//May need to change css styling
    return (
            <div className="forcast mb-2">
                {/* {console.log("Day component",day.main.temp)} */}
                <p className="text-center">{getDay(day.dt)}</p>
                <div className="icons text-center ">
                    <i className={`wi ${weatherIcon}`}></i>
                </div>
                
                <p className="text-center">{mathRound(day.main.temp)}&deg;</p>
            </div>
    )
};

export default Weekday;