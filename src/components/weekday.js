import React, { useState, useEffect } from 'react';
import { mathRound, fetchWeekIcons, sunTime, getDay } from '../utils/index'
// import { mathRound, sunTime, degToCompass, fetchWeekIcons, getDay } from '../utils/index'

const Weekday = ({ day }) => {

    //not working properly. Getting night time icons during the daytime
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')

    useEffect(() => {
        if (day) {
            let weather = fetchWeekIcons(day.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, []);
    console.log("weekday component",sunTime(day.dt))

    // <p>{getDay(day.dt)}</p>
    
    // <p>{mathRound(day.main.temp)}&deg;</p>
    // showData(day.dt)

    // console.log("weekday",getDay(day.dt))
    // console.log("full day is", getDay(day.dt))
    // console.log("date?", day.dt_txt)
    return (
            <div className="forcast mb-2">
                {/* {console.log("Day component",day.main.temp)} */}
                <p>{getDay(day.dt)}</p>
                <i className={`wi ${weatherIcon}`}></i>
                <p>{mathRound(day.main.temp)}&deg;</p>
            </div>
    )
};

export default Weekday;