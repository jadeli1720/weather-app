import React from 'react';
import {Card}from 'react-bootstrap';


const Weather = ({data}) => {
    console.log("Weather", data)
    return (
        <div className="card-container">
            <Card >
            <h2>{data.name}, {data.sys.country}</h2>

                {/* Need to use different Icons. These aren't the best*/}
                <div className="icon">
                    <img  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' />
                </div>
                
                {/* <p>{data.weather[0].main}</p> */}
                <p className="temp" >{Math.round(data.main.temp)}&deg;</p>
                {data.weather[0].description}
            </Card>
        </div> 
    );
};

export default Weather