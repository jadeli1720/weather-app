import React from 'react';
import { sunTime } from '../utils/index';
import { Card } from 'react-bootstrap';
import Weekday from './weekday';

const WeeklyForcast = ({ week }) => {

    // const weekday = week.list;
    // console.log('Weekly Component', weeklyData)


    // console.log("show",week.list)


    //TODO's:
    //implement one of the react sliders. May not need if we are only doing 5 day. Need to figure out if we will get more or request for 7 day look out
    // overall will need to decide on layout when weather icon is on bigger screen sizes like tablets. Maybe limit it to those sizes and make it responsive down to phone screens. This may effect the sliders.

    return (
        <>
            <Card className="weeklyForcast card">
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