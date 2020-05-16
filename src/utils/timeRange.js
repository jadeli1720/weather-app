import { timezones } from "./timezones";
import "moment-timezone";

let moment = require("moment");

//Function to check if current time is between the locations sunrise and sunset data
export const timeRange = (sunrise, sunset, timezone) => {
    //STEP 1: get the timezone country/city
    let tZone = timezones(timezone);
    // console.log("Timezone",tZone);

    //STEP 2: get and format current, sunrise, and sunset times in the timezone
    let currentTime = moment().tz(tZone);
    // console.log("Current Time", currentTime)

    let sunRise = moment(sunrise * 1000).tz(tZone);
    // console.log("Sunrise", sunRise);
    let sunSet = moment(sunset * 1000).tz(tZone);
    // console.log("Sunset", sunSet);

    //STEP 3: Compare
    if (moment(currentTime).isBetween(sunRise, sunSet, null, [])) {
        // console.log(true)
        return true
    }
    else {
        // console.log(false)
        return false
    }
};