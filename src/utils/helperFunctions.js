//Converting degrees to Compass directions
export const degToCompass = degrees => {
    //there is an angle change at every 22.5 degrees. direction swap after 11.25 degrees for intermediary
    //divide degrees by angle change --> Math.floor((220/ 22.5) + 0.5) = 10
    let value = Math.floor(degrees / 22.5 + 0.5);
    //array of 16 cardinal directions
    const compassArr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

    //return the compassArr at the index of value / index of 16 --> compassArr[(10 % 16)] = "SW"
    return compassArr[value % 16];
};


//Getting the day of the week
export const getDay = dateTime => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // let dayFormat = moment()
    let date = new Date(dateTime * 1000)
    // console.log("Date", date.toGMTString())

    //setting up Array of Days as strings
    let day_arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

    //passing in the day_arr to get day of the week
    let day = day_arr[date.getDay()]


    // console.log("get day func",day)
    return day
    // return date.toLocaleTimeString()

}

//should probably divide these up and import them to this file
export const mathRound = num => {
    return Math.round(num);
};