'use strict';

const getCorner = function (hour, minutes){ 
    let hourCorner, minuteCorner, corner;

    if(hour >= 12) {
        hour = hour-12;
    }

    hourCorner = hour*30;
    minuteCorner = minutes*6;
    corner = Math.abs(hourCorner - minuteCorner);

    if (corner > 180) {
        corner = 360 - corner;
    }

    console.log(corner);

};

getCorner(9,50);
getCorner(21,10);

