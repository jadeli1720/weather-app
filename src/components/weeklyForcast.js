import React, { useState, useEffect } from 'react';
import { sunTime } from '../utils/index';
// import DateDisplay from './date'
import Weekday from './weekday';

const WeeklyForcast = ({week}) => {
    //not working properly. Getting night time icons during the daytime
    // const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny');

    // const weekday = week.list;
    // console.log('Weekly Component', weeklyData)

    
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
        <>
            { week.list && week.list.forEach(day => { 
                let time = sunTime(day.dt)
                console.log("Time",time)

                // time === "3:00 pm"
                // ?(
                //         // console.log("day data",day)
                //         <div className="card-container mt-3">
                        
                //             <Weekday
                //                     key={day.dt}
                //                     day = {day}
                //                 />
                //         </div>
                        
                // )
                // :
                // null  
            }
            )} 
        </>
    );
};




export default WeeklyForcast;