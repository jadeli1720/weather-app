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