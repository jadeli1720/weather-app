import React from 'react';
import moment from 'moment';


const DateDisplay = () => {
    let date = moment()

        
    return(
        <div>
            <p className="date" >{date.format("dddd[,] MMM Do")} </p>
        </div>
            
        
    )
}

export default DateDisplay;