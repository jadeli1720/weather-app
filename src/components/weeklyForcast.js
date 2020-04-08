import React, { useState, useEffect } from 'react';
import { mathRound, sunTime, degToCompass, fetchIcons } from '../utils/index';
// import DateDisplay from './date'
import Weekday from './weekday';

const WeeklyForcast = ({week}) => {
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny');

    // const weekday = weeklyData.list;
    // console.log('Weekly Component', week.list)

    
    const showData = (dataList) => {
        console.log(dataList)
        for(let data of dataList){
            let time = sunTime(data)
            console.log("Time", time)
            // if(time === "3:00 pm"){
            //     // console.log("Time", time)
            //     console.log("3 pm data", data)
            //     return data
            // }
        }
        
    }

    // console.log("show",showData(week.list))

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
            {week.list && week.list.forEach(day => { 
            //  console.log("data",day)
                let time = sunTime(day.dt)
                //when I uncomment the below console.log, the data reders to console. Now I just need the componenet to render in the if statement
                if(time === "3:00 pm" ){
                    return (
                    // console.log("data",day)
                    <Weekday
                        key={day.dt}
                        day = {day}
                    />
                    )
                }
                // return time === "3:00 pm" 
                // ? 
                // <Weekday
                //     key={day.dt}
                //     daily = {day}
                // />
                // :
                // day
                }
            )} 
            
        </div>
    );
};

export default WeeklyForcast;