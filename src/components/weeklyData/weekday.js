import React, { useState, useEffect } from 'react';
import { mathRound, fetchWeekIcons, getDay } from '../../utils/index';

const Weekday = ({ day }) => {

    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')
    
    useEffect(() => {
        if (day) {
            let weather = fetchWeekIcons(day.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, [day]); 

    // console.log("weekday component",mathRound(day.main.temp))
    return (
            <div className="forcast">
                {/* {console.log("Getting Data?",day)} */}
                <p className="text-center dayOfWeek bold">{getDay(day.dt)}</p>
                <div className="text-center icon-container pt-2 pb-1">
                    <i className={`wi ${weatherIcon}`}></i>
                </div>
                <p className="text-center temperature">{mathRound(day.main.temp)}&deg;</p>
            </div>
    )
};

export default Weekday;