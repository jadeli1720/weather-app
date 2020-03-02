import React, {useState, useEffect} from 'react';
import {mathRound , sunTime, degToCompass, fetchIcons} from '../utils/index'
import {Card}from 'react-bootstrap';
import DateDisplay from './date'

// Icons from git project --> https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";



const Weather = ({data}) => {
    const [weatherIcon, setWeatherIcon] = useState('wi-day-sunny')
        
    // console.log("Testing weather icons:",fetchIcons(data.weather[0].id))

    // console.log("Sunrise and Sunset", sunTime(data.sys.sunset))
    // console.log("sunTime of Day",degToCompass(data.wind.deg))
    
    useEffect(() => {
        if (data) {
            let weather = fetchIcons(data.weather[0].id)
            return setWeatherIcon(weather)
        }
    }, []);

    // console.log("Setting Weather", weatherIcon)
    
    return (
        <div className="card-container">
            
            <Card className="card p-3" >
                <div className="dateDisplay" >
                    <h4>{data.name}, {data.sys.country}</h4>
                    <DateDisplay className="" /> 
                </div>
                
                <div className="temp p-3" >
                    <div className="temp-top" >
                        {/* Need to use different Icons. These aren't the best*/}
                        <div className="weatherIcon mr-1">
                            <i className={`wi ${weatherIcon}`}></i>
                        </div>
                        {/* <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' /> */}
                        <h1 className="pt-2 ml-2">{mathRound(data.main.temp)}&deg;</h1>
                    </div>
                    <div className="temp-mid " >
                        <p className="pr-2" >{mathRound(data.main.temp_max)}&deg;/ {mathRound(data.main.temp_min)}&deg;</p>
                        
                        <p>Feels Like: {mathRound(data.main.feels_like)}&deg; </p>
                    </div>
                    <div className="temp-btm mt-3" >
                        <p className="text-center text-capitalize">{data.weather[0].description}</p>
                    </div>
                </div>
                <div className=" row metrics mt-3 " >
                    <div className="col-2 column-1">
                        <div className="icons  ">
                            <i className="wi wi-small-craft-advisory"></i>
                        </div>
                    </div>
                    <div className="col-4 column-2">
                        <p className="m-0" >{degToCompass(data.wind.deg)}</p>
                        <p className="m-0" >{mathRound(data.wind.speed)}</p>
                    </div>
                    <div className="col-2 column-1">
                        <div className="icons">
                        <i className="wi wi-raindrop"></i>
                        </div>
                    </div>
                    <div className="col-4 column-2">
                        <p className="m-0" >Humidity</p>
                        <p className="m-0" >{mathRound(data.main.humidity)}%</p>
                    </div>
                </div>
                <div className=" row metrics mt-3 " >
                    <div className="col-2 column-1">
                        <div className="icons ">
                            <i className="wi wi-sunrise"></i>
                        </div>
                    </div>
                    <div className="col-4 column-2">
                        <p className="m-0" >Sunrise</p>
                        <p className="m-0" >{sunTime(data.sys.sunrise)}</p>
                    </div>
                    <div className="col-2 column-1">
                        <div className="icons ">
                            <i className="wi wi-sunset"></i>
                        </div>
                    </div>
                    <div className="col-4 column-2">
                        <p className="m-0" >Sunset</p>
                        <p className="m-0" >{sunTime(data.sys.sunset)}</p>
                    </div>
                </div>
                {/* Below could be used to determine icons and or icons */}
                {/* <p>{data.weather[0].main}</p> */}
            </Card>
        </div> 
    );
};

export default Weather