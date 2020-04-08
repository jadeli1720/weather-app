import React, { useState, useEffect } from 'react';
import { mathRound, sunTime, degToCompass, fetchWeekIcons, getDay } from '../utils/index'

const Weekday = ({daily}) => {
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')


    
    const showData = (dt) => {
        let time = sunTime(daily.dt)
        let temp = daily.main.temp
        // console.log("Time", time)

        if(time === "3:00 pm"){
            return temp
            // console.log(temp)
        }
    }

    useEffect(() => {
        if (daily) {
            let weather = fetchWeekIcons(daily.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, []);


    // <p>{getDay(daily.dt)}</p>
    // <i className={`wi ${weatherIcon}`}></i>
    // <p>{mathRound(daily.main.temp)}&deg;</p>
    // showData(daily.dt)

    // console.log("weekday",getDay(daily.dt))
    // console.log("full day is", getDay(daily.dt))
    // console.log("date?", daily.dt_txt)
    return (
        <div>
            <div className="forcast mb-2">
                {/* {mathRound(showData(daily.dt))}
                {console.log(showData(daily.dt))} */}
            </div>
        </div>
    )
};

export default Weekday;