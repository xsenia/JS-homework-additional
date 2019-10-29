'use strict';

let dateHours = new Date().getHours(),
    dateMinutes = new Date().getMinutes(),
    dateSeconds = new Date().getSeconds(),
    dateDate = new Date().getDate(),
    dateMonth = new Date().getMonth()+1,
    dateFullYear = new Date().getFullYear(),
    dateNow;


const addZero = function(elem) {    
    if(elem < 10 && elem >= 0 ) {
        return elem = '0' + elem;     
    } else {
        return elem;
    }
};

console.log('dateNow: ', `${dateHours}:${dateMinutes}:${dateSeconds} ${dateDate}.${dateMonth}.${dateFullYear}`);

dateHours = addZero(dateHours);
dateMinutes = addZero(dateMinutes);
dateSeconds = addZero(dateSeconds);
dateDate = addZero(dateDate);
dateMonth = addZero(dateMonth);

console.log('dateNow: ', `${dateHours}:${dateMinutes}:${dateSeconds} ${dateDate}.${dateMonth}.${dateFullYear}`);

