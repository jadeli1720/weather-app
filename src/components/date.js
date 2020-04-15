import React, {useState, useEffect} from 'react';
import moment from 'moment';


// CalendarDate is my custom class with `today()` and `equal(otherDate)` methods
// const Today = React.createContext(CalendarDate.today());

const DateDisplay = () => {
    let date = moment()
    
    //Hmmmm.....not exactly
    const [currentDate, setDate] = useState([date]);

    const updateDate = () => {
        const newDate = date;
        // console.log("New Date",date)
        if( currentDate !== newDate){
            setDate(date);
        }
    }

    // useEffect (() => {
    //     updateDate()
    // }, []);
    
        
    return(
        <div>
            {/* <Clock/> */}
            <p className="date" >{date.format("dddd[,] MMM Do")} </p>
            {/* iterate through with map? */}
            {/* {currentDate} */}
        </div>
            
        
    )
}

export default DateDisplay;