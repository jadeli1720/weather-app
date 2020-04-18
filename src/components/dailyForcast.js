import React, { useState, useEffect } from 'react';
import { mathRound, sunTime, degToCompass, fetchDailyIcons } from '../utils/index'
import { Card } from 'react-bootstrap';
import DateDisplay from './date'

// Icons from git project --> https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";



const DailyForcast = ({day}) => {
    //May not be working properly. Check if we are getting night time icons during the daytime
    //These icons need to range for day light hours of sunrise to sunset
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')

    // console.log("Testing weather icons:",fetchDailyIcons(day.weather[0].id))
    console.log("Day data", day)
    // console.log("Sunrise and Sunset", sunTime(day.sys.sunset))
    // console.log("sunTime of Day",degToCompass(day.wind.deg))

    useEffect(() => {
        if (day) {
            let weather = fetchDailyIcons(day.weather[0].id, day.sys.sunrise, day.sys.sunset)
            return setWeatherIcon(weather)
        }
    }, []); //how do we get rid of this warning?

    // console.log("Setting Weather", weatherIcon)

    return (
        <div className="card-container">

            <Card className="card mb-2 p-3" >
                {/* top row */}
                <div className="dateDisplay" >
                    <h4 className="bold" >{day.name}, {day.sys.country}</h4>
                    <DateDisplay className="" />
                </div>
                {/* middle row */}
                <div className="temp p-3" >
                    <div className="temp-top" >
                        {/* Need to use different Icons. These aren't the best*/}
                        <div className="weatherIcon mr-1">
                            <i className={`wi ${weatherIcon}`}></i>
                        </div>
                        <h1 className="pt-2 ml-2">{mathRound(day.main.temp)}&deg;</h1>
                    </div>
                    <div className="temp-mid " >
                        <p className="pr-2" >{mathRound(day.main.temp_max)}&deg;/ {mathRound(day.main.temp_min)}&deg;</p>

                        <p>Feels Like: {mathRound(day.main.feels_like)}&deg; </p>
                    </div>
                    <div className="temp-btm mt-3" >
                        <p className="text-center text-capitalize">{day.weather[0].description}</p>
                    </div>
                </div>
                {/* bottom row */}
                <div className="metrics-row">
                    <div className=" row metrics mt-3" >
                        <div className="col-2 column-1">
                            <div className="icons  ">
                                <i className="wi wi-small-craft-advisory"></i>
                            </div>
                        </div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >{degToCompass(day.wind.deg)}</p>
                            <p className="m-0" >{mathRound(day.wind.speed)}</p>
                        </div>
                        <div className="col-2 column-1">
                            <div className="icons">
                                <i className="wi wi-raindrop"></i>
                            </div>
                        </div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >Humidity</p>
                            <p className="m-0" >{mathRound(day.main.humidity)}%</p>
                        </div>
                    </div>
                    <div className=" row metrics mt-3 " >
                        <div className="col-2 column-1">
                            <div className="icons ">
                                <i className="wi wi-sunrise"></i>
                            </div>
                        </div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >Sunrise</p>
                            <p className="m-0" >{sunTime(day.sys.sunrise)}</p>
                        </div>
                        <div className="col-2 column-1">
                            <div className="icons text-center ">
                                <i className="wi wi-sunset"></i>
                            </div>
                        </div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >Sunset</p>
                            <p className="m-0" >{sunTime(day.sys.sunset)}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DailyForcast;