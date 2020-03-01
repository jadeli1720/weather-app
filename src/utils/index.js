export const mathRound = (num) => {
        return Math.round(num)
}

    //converting unix timestamp into hh/mm format
export const time = (unix_timestamp) => {
    
    let time = new Date(unix_timestamp * 1000);
    let hours = time.getHours();
    let minutes =  time.getMinutes();
    let am_pm = time.getHours() >= 12 ? "pm" : "am";

    // if(hours < 10) {
    //     hours = "0" + hours
    // } 
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    let mid = "pm"
    if(hours === 0){
        hours = 12;
    }else if (hours > 12){
        hours = hours%12;
        mid='am';
    }
    
    let formattedTime = hours + ':' + minutes + ' ' + am_pm;      
    // console.log("Formatted", formattedTime)

    return formattedTime;
}

//Fetching icons
export const fetchIcons = (rangeId, timeOfDay) => {
    

    
    let fetchTime = time(timeOfDay);

    //Clear --> 800
    if (rangeId === 800 && fetchTime === "am"){
        
            return 'wi-day-sunny';

    }else{

        return 'wi-night-clear'; 
    };

    //Clouds
    
    //Thunderstorm
    //Drizzle
    //Rain
    //Snow
    //Atmosphere --> fog, dust, mist....
};

//Converting degrees to Compass directions
export const degToCompass = (degrees) => {
    //there is an angle change at every 22.5 degrees. direction swap after 11.25 degrees for intermediary
    //divide degrees by angle change --> Math.floor((220/ 22.5) + 0.5) = 10
    let value = Math.floor((degrees/ 22.5) + 0.5);
    //array of 16 cardinal directions
    const compassArr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    
    //return the compassArr at the index of value / index of 16 --> compassArr[(10 % 16)] = "SW"
    return compassArr[(value % 16)];
}