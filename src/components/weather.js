import React from 'react';
import {Card}from 'react-bootstrap';
import DateDisplay from './date'

// Icons from git project --> https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";



const Weather = ({data}) => {

    //Move functions into a utlis folder and helper function file?
    //Rounding decimals to whole numbers
    const mathRound = (num) => {
        return Math.round(num)
    }

    //converting unix timestamp into hh/mm format
    const time = (unix_timestamp) => {
        
        let time = new Date(unix_timestamp * 1000)
        let hours = time.getHours()
        let minutes =  time.getMinutes()
        let am_pm = time.getHours() >= 12 ? "pm" : "am"

        // if(hours < 10) {
        //     hours = "0" + hours
        // } 
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        let mid = "pm"
        if(hours === 0){
            hours = 12
        }else if (hours > 12){
            hours = hours%12;
            mid='am';
        }
        
        let formattedTime = hours + ':' + minutes + ' ' + am_pm       
        // console.log("Formatted", formattedTime)

        return formattedTime
    }

    //Converting degrees to Compass directions
    const degToCompass = (degrees) => {
        //there is an angle change at every 22.5 degrees. direction swap after 11.25 degrees for intermediary
        //divide degrees by angle change --> Math.floor((220/ 22.5) + 0.5) = 10
        let value = Math.floor((degrees/ 22.5) + 0.5);
        //array of 16 cardinal directions
        const compassArr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        
        //return the compassArr at the index of value / index of 16 --> compassArr[(10 % 16)] = "SW"
        return compassArr[(value % 16)];
    }
    
    // console.log("Temp",mathRound(data.main.temp))
    // console.log("Time", time(data.sys.sunset))
    // console.log("Humidity",degToCompass(data.wind.deg))

    
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
                        <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />
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
                        <p className="m-0" >{time(data.sys.sunrise)}</p>
                    </div>
                    <div className="col-2 column-1">
                        <div className="icons ">
                            <i className="wi wi-sunset"></i>
                        </div>
                    </div>
                    <div className="col-4 column-2">
                        <p className="m-0" >Sunset</p>
                        <p className="m-0" >{time(data.sys.sunset)}</p>
                    </div>
                </div>
                {/* Below could be used to determine icons and or icons */}
                {/* <p>{data.weather[0].main}</p> */}
            </Card>
        </div> 
    );
};

export default Weather