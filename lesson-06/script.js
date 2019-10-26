'use strict';

// Создать массив week и записать в него дни недели в виде строк
// · Вывести на экран все дни недели
// · Каждый из них с новой строчки
// · Выходные дни - курсивом
// · Текущий день - жирным шрифтом(использовать объект даты)

let week = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
let container = document.getElementById('container');
let now = new Date();
now = now.getDay() - 1;

for (let i=0; i<week.length; i++) {

    let elemId = i + 1;

    if (i<5) {
        container.innerHTML += '<p id="day' + elemId + '">' + week[i] + '</p>';
    } else {
        container.innerHTML += '<p id="day' + elemId + '"><i>' + week[i] + '</i></p>';
    }

    if (i === now) {
        let day = document.getElementById("day" + elemId);
        day.style.fontWeight = "bold";
    }
    
}