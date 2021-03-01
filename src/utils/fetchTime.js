export const fetchTime = unix_timestamp => {

    //this works according to my timezone. Not the cities timezone. We will need to somehow fix this to cities timezone. There is data.timezone = Shift in second from UTC
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let time = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = time.getHours();
    // Minutes part from the timestamp
    let mins = time.getMinutes();
    //Determine am or pm from timestamp
    let am_pm = time.getHours() >= 12 ? "pm" : "am";

    //dividing hours by 12 to make 24 hour format into 12 hour format
    hours = hours % 12;

    //the hour 0 should be at 12
    hours = hours ? hours : 12;

    //If mins is single digit (smaller then 10), insert 0 before that digit
    mins = mins < 10 ? "0" + mins : mins;

    let formattedTime = hours + ":" + mins + " " + am_pm;
    // console.log("Formatted", formattedTime)

    return formattedTime;
};