'use strict';

// 1) Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

let arr = [];
arr[0] = '4398';
arr[1] = '3945';
arr[2] = '3483';
arr[3] = '1278';
arr[4] = '2934';
arr[5] = '4095';
arr[6] = '7990';

for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] === '2' || arr[i][0]  === '4') {
        console.log(arr[i]);
    }
}


// 2) Вывести в столбик все простые числа от 1 до 100
// — Статья про простые числа - КЛИК
// — Рядом с каждым числом написать оба делителя данного числа
//     Например: “Делители этого числа: 1 и n”

next:
for(let i = 2; i < 100; i++) { 
    for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue next; // не подходит, берём следующее
      }
    console.log(`${i} - это простое число. Делитель этого числа 1 и ${i}`);
}