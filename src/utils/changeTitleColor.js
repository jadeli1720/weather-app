import { timeRange } from './timeRange';


export const changeTitleColor = (rangeId, sunRise, sunSet, timeZone) => {
    //Using timeRange function to set morning and night time icons based off of locations sunrise and sunset data. 
    let range = timeRange(sunRise, sunSet, timeZone)
    // console.log("Range", range)

    switch(true) {
        //Thunderstorm --> 200's
        case rangeId >= 200 && rangeId <= 233:
            if(range){
                return 'ffefeb'
            }else{
                return 'ffefeb'
            }

        //Drizzle --> 300's
        case rangeId >= 300 && rangeId <= 321:
            if(range){
                return 'ecd2a3'
            }else{
                return 'ffca8d'
            }

        //Rains --> 500's
        case rangeId >= 500 && rangeId <= 531:
            if(range){
                return 'ecd2a3'
            }else{
                return 'ffca8d'
            }

        //Snows --> 600's
        case rangeId >= 600 && rangeId <= 622:
            if(range){
                return '051417'
            }else{
                return 'c3b7c9'
            }

        //mist, smoke, haze
        case rangeId === 701 || rangeId === 721:
            if(range){
                return '051417'
            }else{
                return 'c3b7c9'
            } 

        //fog
        case rangeId === 741:
            return '051417';

        //sand
        case   rangeId === 751:
            return "f5f5f5";

        //tornado
        case rangeId === 711 || rangeId === 761 ||rangeId === 781:
            return "ffe5de";

        //Clear and Clouds --> 800's
        case rangeId === 800:
            if (range) {
                return 'f5f5f5';
            } else {
                return 'e0d1e2';
            }

        //Cloudy
        case rangeId >= 801 && rangeId <= 805:
            if (range) {
                return 'f5f5f5';
            } else {
                return 'f5f5f5';
            }
        default:
            return 'f5f5f5';
    }
}