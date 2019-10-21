'use strict';

//---1---

let langIf = prompt('Если нужен русский язык, введите "ru", если английский - "en"');

if (langIf === 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if ( langIf === 'en') {
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else {
    console.log('Не верное значение');
}

let lengSwitch = prompt('Если нужен русский язык, введите "ru", если английский - "en"');
switch (lengSwitch) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
      break;
    case 'en':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
      break;    
    default:
        console.log('Не верное значение');
}

let language = prompt('Если нужен русский язык, введите "ru", если английский - "en"');
let langMap = new Map([
    ['ru', 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['en', 'monday, tuesday, wednesday, thursday, friday, saturday, sunday']
]);
console.log(langMap.get(language));



//---2---

let namePerson,
    position;

namePerson = prompt('Артем - директор, Максим - преподаватель, остальные - студенты', 'Артем'); 
position = (namePerson === 'Артем') ? 'директор' : 'преподаватель';
position = (namePerson !== 'Артем' && namePerson !== 'Максим') ? 'студент' : position;
console.log(position);