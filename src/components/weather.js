import React from 'react';
import {Card}from 'react-bootstrap';


const Weather = ({data}) => {
    console.log("Weather", data)
    return (
        <div className="card-container">
            <Card >
                <h2>{data.name}</h2>
                {/* <img src={data.weather[0].icon}/> */}
                <p></p>
                {data.weather[0].description}
            </Card>
        </div> 
    );
};

export default Weather