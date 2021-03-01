import React from 'react';
import { Card } from 'react-bootstrap';
import Weekday from './weekday';

const WeeklyForcast = ({ week, loading }) => {

    // console.log("show week data",week.list)
    const getWeekly = (data) => {
        return (data.list
            ? data.list.map(day => {
                // console.log("finding dt_txt", day.dt_txt)
                let time = day.dt_txt.includes("12:00:00")
                //if the time that includes the string == true, then return data for that time and map it
                if (time){ return <Weekday key={day.dt} day={day} />};
            })
            : null)
    }

    //TODO's:
    // overall will need to decide on layout when weather icon is on bigger screen sizes like tablets. Maybe limit it to those sizes and make it responsive down to phone screens. This may effect the sliders.

    return (
        <>
            <Card className="weeklyForcast p-1 card ">
                {loading ? (
                    <div className="">
                    </div>
                ) : (
                        getWeekly(week)
                    )
                }
            </Card>

        </>
    );
};


export default WeeklyForcast;