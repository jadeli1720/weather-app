import React from 'react';
import {Card, Row, Col}from 'react-bootstrap';
import DateDisplay from './date'


const Weather = ({data}) => {

    const tempRound = (temp) => {
        return Math.round(temp)
    }

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

    console.log("Time", time(data.sys.sunset))

    // console.log("Temp",tempRound(data.main.temp))
    return (
        <div className="card-container">
            
            <Card className="card p-3" >
                <div className="" >
                    <h4>{data.name}, {data.sys.country}</h4>
                    <DateDisplay /> 
                </div>
                
                <div className="temp" >
                    <div className="temp-top" >
                        {/* Need to use different Icons. These aren't the best*/}
                        <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />
                        <h1 className="pt-2 ml-2">{tempRound(data.main.temp)}&deg;</h1>
                    </div>
                    <div className="temp-mid" >
                        <p>{tempRound(data.main.temp_max)}&deg;/ {tempRound(data.main.temp_min)}&deg;</p>
                        <p>Feels Like: {tempRound(data.main.feels_like)}&deg; </p>
                    </div>
                    <div className="temp-btm mt-4" >
                        <p className="text-center">{data.weather[0].description}</p>
                    </div>
                    
                    
                </div>
                {/* <p>{data.weather[0].main}</p> */}
                {/* <p className="temp" >{tempRound(data.main.temp)}&deg;</p> */}
                
                
                
                <p>Humidity: {data.main.humidity}%</p>
                {/* <p>{data.timezone}</p> */}
                <p>{time(data.sys.sunrise)} </p>
                <p>{time(data.sys.sunset)} </p>
            </Card>
        </div> 
    );
};

export default Weather