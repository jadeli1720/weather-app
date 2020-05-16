import { timezones } from "./timezones";
import { timeRange } from './fetchDailyIcons';


export const changeBackground = (rangeId, sunRise, sunSet, timeZone) => {
    //Using timeRange function to set morning and night time icons based off of locations sunrise and sunset data. 
    let range = timeRange(sunRise, sunSet, timeZone)

    switch(true) {
        //Thunderstorm --> 200's
        case rangeId >= 200 && rangeId <= 233:
            if(range){
                return 'thunderstormDay'
            }else{
                return 'thunderstormNight'
            }
        //Drizzle --> 300's
        case rangeId >= 300 && rangeId <= 321:
            if(range){
                return 'rainDay'
            }else{
                return 'rainyNight'
            }
        //Rains --> 500's
        case rangeId >= 500 && rangeId <= 531:
            if(range){
                return 'rainDay'
            }else{
                return 'rainyNight'
            }
        //Snows --> 600's
        case rangeId >= 600 && rangeId <= 522:
            if(range){
                return 'snowDay'
            }else{
                return 'snowNight'
            }
        //fog
        case rangeId === 741:
            if (range) {
                return 'fog';
            } else {
                return 'fog';
            }
        //sand
        case rangeId === 751:
            return "sandstorm";
        //tornado
        case rangeId === 781:
            return "wi-tornado";
        //Clear and Clouds --> 800's
        case rangeId === 800:
            if (range) {
                return 'clearDay';
            } else {
                return 'clearNight';
            }
        //Cloudy
        case rangeId >= 801 && rangeId <= 805:
            if (range) {
                return 'cloudyDay';
            } else {
                return 'cloudyNight';
            }
        default:
            return 'clearDay';
    }
}