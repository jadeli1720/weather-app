import React from 'react';
import { fetchTime } from '../../utils/index';
import { Card } from 'react-bootstrap';
import Weekday from './weekday';

const WeeklyForcast = ({ week, loading }) => {

    // console.log("show week data",week.list)
    const getWeekly = (data) => {
        return (data.list
            ? data.list.map(day => {
                let time = fetchTime(day.dt);
                // console.log(time)
                if (time === "3:00 pm") return <Weekday key={day.dt} day={day} />;
                // console.log("Mapping",day)
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