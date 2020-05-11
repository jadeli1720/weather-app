import React, { useState, useEffect } from 'react';
import { mathRound, degToCompass, fetchDailyIcons, timezones } from '../utils/index'
import { Card } from 'react-bootstrap';
import Moment from "react-moment";
import "moment-timezone";
import DateDisplay from './date'

// Icons from git project --> https://github.com/erikflowers/weather-icons
import 'weather-icons2/css/weather-icons.min.css';
import 'weather-icons2/css/weather-icons-wind.min.css';


const DailyForcast = ({ day }) => {

    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')

    // console.log("Day data", day)

    useEffect(() => {
        if (day) {
            let weather = fetchDailyIcons(day.weather[0].id, day.sys.sunrise, day.sys.sunset, day.timezone)
            return setWeatherIcon(weather)
        }
    }, [day]);

    
    return (
        <div className="card-container">

            <Card className="card mb-2 p-3" >
                {/* Top Row */}
                <div className="dateDisplay" >
                    <h4 className="bold" >{day.name}, {day.sys.country}</h4>
                    <DateDisplay className="" />
                </div>
                {/* Middle Row */}
                <div className="temp p-3" >
                    <div className="temp-top" >
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
                {/* Bottom Row */}
                <div className="metrics-row">
                    <div className=" row metrics mt-3" >
                        {/* Wind Speed/Direction */}
                        <div className="col-4 column-1">
                            <div className="icons  ">
                                <i className="wi wi-strong-wind"></i>
                            </div>
                        </div>
                        <div className="leftMetricsDivider"></div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >{degToCompass(day.wind.deg)}</p>
                            <p className="m-0" >{mathRound(day.wind.speed)} mph</p>
                        </div>
                        {/* Humidity */}
                        <div className="col-4 column-1">
                            <div className="icons">
                                <i className="wi wi-humidity"></i>
                            </div>
                        </div>
                        <div className="rightMetricsDivider"></div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >Humidity</p>
                            <p className="m-0" >{mathRound(day.main.humidity)}%</p>
                        </div>
                    </div>
                    <div className=" row metrics mt-3 " >
                        {/* Sunrise */}
                        <div className="col-4 column-1">
                            <div className="icons ">
                                <i className="wi wi-sunrise "></i>
                            </div>
                        </div>
                        <div className="leftMetricsDivider"></div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >Sunrise</p>
                            <Moment className="m-0" unix tz={timezones(day.timezone)} format="h:mm a">
                                {day.sys.sunrise}
                            </Moment>
                        </div>
                        {/* Sunset */}
                        <div className="col-4 column-1">
                            <div className="icons text-center ">
                                <i className="wi wi-sunset "></i>
                            </div>
                        </div>
                        <div className="rightMetricsDivider"></div>
                        <div className="col-4 column-2">
                            <p className="m-0 bold" >Sunset</p>
                            <p className="m-0" >
                                <Moment unix tz={timezones(day.timezone)} format="h:mm a">{day.sys.sunset}
                                </Moment>
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DailyForcast;