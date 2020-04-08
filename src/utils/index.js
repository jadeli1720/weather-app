//should probably divide these up and import them to this file
export const mathRound = num => {
    return Math.round(num);
};

//converting unix timestamp into hh/mm format from API
export const sunTime = unix_timestamp => {

    //this works according to my timezone. Not the cities timezone. We will need to somehow fix this to cities timezone. There is data.timezone = Shift in second from UTC
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let time = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = time.getHours();
    // Minutes part from the timestamp
    let minutes = time.getMinutes();
    //Determine am or pm from timestamp
    let am_pm = time.getHours() >= 12 ? "pm" : "am";

    //Figuring out offset to consider tz
    // if(hours < 10) {
    //     hours = "0" + hours
    // }
    //Structuring time to 12 hours
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //attatching am or pm based on timestamp 24 hour
    let mid = "pm";
    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours % 12;
        mid = "am";
    }



    let formattedTime = hours + ":" + minutes + " " + am_pm;
    // console.log("Formatted", formattedTime)

    return formattedTime;
};

//Getting the day of the week
export const getDay = dateTime => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // let dayFormat = moment()
    let date = new Date(dateTime * 1000)
    // console.log("Date", date.toGMTString())

    //setting up Array of Days as strings
    let day_arr = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

    //passing in the day_arr to get day of the week
    let day = day_arr[date.getDay()]

    let time = sunTime(date)

    
    return day 
    // return date.toLocaleTimeString()

}

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

//grabbing current time --> need to pass argument in data.timezone from fetchIcons
export const currentTime = () => {

    //this works according to my timezone. Not the cities timezone. We will need to somehow fix this to cities timezone. There is data.timezone = Shift in second from UTC
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let am_pm = today.getHours() >= 12 ? "pm" : "am";

    //converts 24 hour formate
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let mid = "pm";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours = hours % 12;
        mid = "am";
    }

    let time = hours + ":" + minutes + am_pm;
    // console.log("Today", time);
    return time;
};

//Fetching icons --> pass in id and timezone shift to pass into currentTime?
//Use this possibly --> https://www.npmjs.com/package/city-timezones
export const fetchIcons = rangeId => {
    //async await?
    let fetchTime = currentTime();
    // console.log("Today", fetchTime)

    switch (true) {
        //Thunderstorm --> 200's
        //Thunderstorm w/rain
        case rangeId >= 200 && rangeId < 210:
            if (fetchTime === "am") {
                return "wi-day-thunderstorm";
            } else {
                return "wi-night-alt-thunderstorm";
            }
        //Thunderstorm
        case rangeId >= 210 && rangeId < 230:
            if (fetchTime === "am") {
                return "wi-day-lightning";
            } else {
                return "wi-night-alt-lightning";
            }
        //Thunderstorm drizzle
        case rangeId >= 230 && rangeId <= 232:
            if (fetchTime === "am") {
                return "wi-day-storm-showers";
            } else {
                return "wi-night-alt-storm-showers";
            }

        //Drizzle --> 300's
        case rangeId >= 300 && rangeId <= 321:
            if (fetchTime === "am") {
                return "wi-day-sprinkle";
            } else {
                return "wi-night-alt-sprinkle";
            }

        //Rain --> 500's
        //light - moderate
        case rangeId === 500 || rangeId === 501:
            if (fetchTime === "am") {
                return "wi-day-showers";
            } else {
                return "wi-night-alt-showers";
            }
        //light - moderate
        case rangeId >= 502 && rangeId <= 504:
            if (fetchTime === "am") {
                return "wi-day-rain";
            } else {
                return "wi-night-alt-rain";
            }
        //freezing rain
        case rangeId === 511:
            if (fetchTime === "am") {
                return "wi-day-hail";
            } else {
                return "wi-night-alt-hail";
            }
        //Showers
        case rangeId >= 521 && rangeId <= 531:
            return "wi-rain";

        //Snow --> 600's
        //snows
        case rangeId >= 600 && rangeId <= 601:
            if (fetchTime === "am") {
                return "wi-day-snow";
            } else {
                return "wi-night-alt-snow";
            }
        //heavy snow
        case rangeId === 602:
            return "wi-snow";

        //Sleet
        case rangeId === 611:
            return "wi-sleet";
        //Sleet showers
        case rangeId === 612 || rangeId === 613:
            if (fetchTime === "am") {
                return "wi-day-sleet";
            } else {
                return "wi-night-alt-sleet";
            }
        //Sleet showers
        case rangeId === 615 || rangeId === 616:
            if (fetchTime === "am") {
                return "wi-day-rain-mix";
            } else {
                return "wi-night-alt-rain-mix";
            }
        //snows
        case rangeId >= 620 && rangeId <= 622:
            return "wi-snowflake-cold";

        //Atmosphere --> 700's
        //mist
        case rangeId === 701:
            return "wi-windy";

        //smoke
        case rangeId === 711:
            return "wi-smoke";

        //haze
        case rangeId === 721:
            if (fetchTime === "am") {
                return "wi-day-haze";
            } else {
                return "wi-night-alt-cloudy-windy";
            }
        //sand and dust whirls
        case rangeId === 731:
            return "wi-dust";

        //fog
        case rangeId === 741:
            if (fetchTime === "am") {
                return "wi-day-fog";
            } else {
                return "wi-night-fog";
            }
        //sand
        case rangeId === 751:
            return "wi-sandstorm";

        //dust
        case rangeId === 761:
            return "wi-dust";

        //ash
        case rangeId === 762:
            return "wi-volcano";

        //squall
        case rangeId === 771:
            return "wi-strong-wind";

        //tornado
        case rangeId === 781:
            return "wi-tornado";

        //Clear and Clouds --> 800's
        case rangeId === 800:
            if (fetchTime === "am") {
                return "wi-day-sunny";
            } else {
                return "wi-night-clear";
            }
        //Cloud Cover
        //few clouds: 11-25%
        case rangeId === 801:
            if (fetchTime === "am") {
                return "wi-day-sunny-overcast";
            } else {
                return "wi-night-alt-partly-cloudy";
            }
        //scattered clouds: 25-50%
        case rangeId === 802:
            if (fetchTime === "am") {
                return "wi-day-cloudy";
            } else {
                return "wi-night-alt-cloudy";
            }
        //broken clouds: 51-84%
        case rangeId === 803:
            return "wi-cloud";

        //broken clouds: 85-100%
        case rangeId === 804:
            return "wi-cloudy";

        // clear day
        default:
            return "wi-day-sunny";
    }
};

export const fetchWeekIcons = rangeId => {

    switch (true) {
        //Thunderstorm --> 200's
        //Thunderstorm w/rain
        case rangeId >= 200 && rangeId < 210:
            return "wi-day-thunderstorm";

        //Thunderstorm
        case rangeId >= 210 && rangeId < 230:
            return "wi-day-lightning";

        //Thunderstorm drizzle
        case rangeId >= 230 && rangeId <= 232:
            return "wi-day-storm-showers";

        //Drizzle --> 300's
        case rangeId >= 300 && rangeId <= 321:
            return "wi-day-sprinkle";

        //Rain --> 500's
        //light - moderate
        case rangeId === 500 || rangeId === 501:
            return "wi-day-showers";

        //light - moderate
        case rangeId >= 502 && rangeId <= 504:
            return "wi-day-rain";
        //freezing rain
        case rangeId === 511:
            return "wi-day-hail";
        //Showers
        case rangeId >= 521 && rangeId <= 531:
            return "wi-rain";

        //Snow --> 600's
        //snows
        case rangeId >= 600 && rangeId <= 601:
            return "wi-day-snow";
        //heavy snow
        case rangeId === 602:
            return "wi-snow";

        //Sleet
        case rangeId === 611:
            return "wi-sleet";
        //Sleet showers
        case rangeId === 612 || rangeId === 613:
            return "wi-day-sleet";
        //Sleet showers
        case rangeId === 615 || rangeId === 616:
            return "wi-day-rain-mix";
        //snows
        case rangeId >= 620 && rangeId <= 622:
            return "wi-snowflake-cold";

        //Atmosphere --> 700's
        //mist
        case rangeId === 701:
            return "wi-windy";

        //smoke
        case rangeId === 711:
            return "wi-smoke";

        //haze
        case rangeId === 721:
            return "wi-day-haze";
        //sand and dust whirls
        case rangeId === 731:
            return "wi-dust";

        //fog
        case rangeId === 741:
            return "wi-day-fog";
        //sand
        case rangeId === 751:
            return "wi-sandstorm";

        //dust
        case rangeId === 761:
            return "wi-dust";

        //ash
        case rangeId === 762:
            return "wi-volcano";

        //squall
        case rangeId === 771:
            return "wi-strong-wind";

        //tornado
        case rangeId === 781:
            return "wi-tornado";

        //Clear and Clouds --> 800's
        case rangeId === 800:
            return "wi-day-sunny";
        //Cloud Cover
        //few clouds: 11-25%
        case rangeId === 801:
            return "wi-day-sunny-overcast";
        //scattered clouds: 25-50%
        case rangeId === 802:
            return "wi-day-cloudy";
        //broken clouds: 51-84%
        case rangeId === 803:
            return "wi-cloud";

        //broken clouds: 85-100%
        case rangeId === 804:
            return "wi-cloudy";

        // clear day
        default:
            return "wi-day-sunny";
    }
};


