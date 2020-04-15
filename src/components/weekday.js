import React, { useState, useEffect } from 'react';
import { mathRound,fetchWeekIcons } from '../utils/index'
// import { mathRound, sunTime, degToCompass, fetchWeekIcons, getDay } from '../utils/index'

const Weekday = (props) => {

    //not working properly. Getting night time icons during the daytime
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')

    useEffect(() => {
        if (props.day) {
            let weather = fetchWeekIcons(props.day.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, []);
    console.log("weekday componenent",props.day)

    // <p>{getDay(day.dt)}</p>
    
    // <p>{mathRound(day.main.temp)}&deg;</p>
    // showData(day.dt)

    // console.log("weekday",getDay(day.dt))
    // console.log("full day is", getDay(day.dt))
    // console.log("date?", day.dt_txt)
    return (
        <div>
            <div className="forcast mb-2">
                {console.log("Day component",props.day.main.temp)}
                day
                <i className={`wi ${weatherIcon}`}></i>
                <p>{mathRound(props.day.main.temp)}&deg;</p>
            </div>
        </div>
    )
};

export default Weekday;