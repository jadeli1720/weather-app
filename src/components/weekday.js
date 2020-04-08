import React, { useState, useEffect } from 'react';
import { mathRound, sunTime, degToCompass, fetchWeekIcons, getDay } from '../utils/index'

const Weekday = ({day}) => {
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')

    useEffect(() => {
        if (day) {
            let weather = fetchWeekIcons(day.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, []);


    // <p>{getDay(day.dt)}</p>
    // <i className={`wi ${weatherIcon}`}></i>
    // <p>{mathRound(day.main.temp)}&deg;</p>
    // showData(day.dt)

    // console.log("weekday",getDay(day.dt))
    // console.log("full day is", getDay(day.dt))
    // console.log("date?", day.dt_txt)
    return (
        <div>
            <div className="forcast mb-2">
                {console.log(day)}
                day
            </div>
        </div>
    )
};

export default Weekday;