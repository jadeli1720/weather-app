import React from 'react';
import { sunTime } from '../utils/index';
import { Card } from 'react-bootstrap';
import Weekday from './weekday';

const WeeklyForcast = ({ week }) => {

    // console.log("show week data",week.list)


    //TODO's:
    // overall will need to decide on layout when weather icon is on bigger screen sizes like tablets. Maybe limit it to those sizes and make it responsive down to phone screens. This may effect the sliders.

    return (
        <>
            <Card className="weeklyForcast p-1 card ">
            {week.list
                ? week.list.map((day) => {
                    let time = sunTime(day.dt);
                    // console.log(time)
                    if (time === "3:00 pm") return <Weekday key={day.dt} day={day} />;
                    // console.log("Mapping",day)
                })
                : null}
            </Card>
            
        </>
    );
};


export default WeeklyForcast;