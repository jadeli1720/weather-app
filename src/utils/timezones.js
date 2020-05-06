import { tzArray } from "./data";

export const timezones = (timezone) => {
    //converting the timezone offset that is in UTC seconds to ours
    let offset = timezone / 3600;
    //Array
    let tz = tzArray
    switch (offset) {
        //Pacific/Niue
        case -11:
            return tz[0];

        //Pacific/Honolulu
        case -10:
            return tz[1];

        //Pacific/Gambier
        case -9:
            return tz[2];

        //America/Anchorage
        case -8:
            return tz[3];

        //America/Los_Angeles
        case -7:
            return tz[4];
        //America/Denver
        case -6:
            return tz[5];

        //America/Chicago
        case -5:
            return tz[6];

        //America/New_York
        case -4:
            return tz[7];

        //America/Sao_Paulo
        case -3:
            return tz[8];

        //America/Noronha
        case -2:
            return tz[9];

        //Atlantic/Cape_Verde
        case -1:
            return tz[10];

        //Europe/Lisbon
        case 0:
            return tz[11];

        //Europe/London
        case 1:
            return tz[12];

        //Europe/Pairs
        case 2:
            return tz[13];

        //Europe/Moscow
        case 3:
            return tz[14];

        //Europe/Samara
        case 4:
            return tz[15];

        //Asia/Tehran
        case 4.5:
            return tz[16];

        //Asia/Yekaterinburg
        case 5:
            return tz[17];

        //Asia/Colombo
        case 5.5:
            return tz[18];

        //Asia/Kathmandu
        case 5.75:
            return tz[19];

        //Asia/Omsk
        case 6:
            return tz[20];

        //Asia/Bangkok
        case 7:
            return tz[21];

        //Australia/Perth
        case 8:
            return tz[22];

        //Australia/Eucla
        case 8.75:
            return tz[23];

        //Asia/Tokyo
        case 9:
            return tz[24];

        //Australia/Adelaide
        case 9.5:
            return tz[25];

        //Australia/Sydney
        case 10:
            return tz[26];

        //Australia/Lord_Howe
        case 10.5:
            return tz[27];

        //Pacific/Guadalcanal
        case 11:
            return tz[28];

        //Pacific/Auckland
        case 12:
            return tz[29];

        // Pacific/Apia
        case 13:
            return tz[30];

        //Pacific/Kiritimati
        case 14:
            return tz[31];

        default:
            return tz[32];
    }
};
