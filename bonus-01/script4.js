'use strict';

// Задача №4

// Написать простой игровой бот, который:
// 1) Загадывает число от 1 до 100
// 2) Задает вопрос пользователю: «Угадай число»
// 3) Если пользователь ввел число меньше, чем загаданное, то бот сообщает «Больше!» и предлагает ввести новый вариант
// 4) Если пользователь ввел число больше, чем загаданное, то бот выводит «Меньше!» и предлагает ввести новый вариант
// 5) Если пользователь ввел правильное число, то бот выводит «Поздравляю вы угадали!!!»
// 6) После угаданного число бот спрашивает «Хотите сыграть еще?»
// 7) Если пользователь ввел не число, то выводит «Введи число!» и предлагает ввести новый вариант
// 8) Если пользователь нажимает «Отмена», то игра заканчивается



const guessNumber = function () {
    //debugger;
    let guessedNumber,
        query,
        finish;

        guessedNumber = Math.floor(Math.random() * Math.floor(101));
        console.log(guessedNumber);     

    do {        
        query = prompt(`Введите число (загадано число ${guessedNumber})`);        

        if (query === null || query === '') {
            alert('Игра заканчивается');
            return;
        }

        query = Number(query);        

        do {
            while ( query > guessedNumber ) {
                query = prompt(`Ваше число больше (загадано число ${guessedNumber}), введите другое`);
                query = Number(query);
            } 
    
            while ( query < guessedNumber ) {
                query = prompt(`Ваше число меньше (загадано число ${guessedNumber}), введите другое`);
                query = Number(query);
            } 
        } while (query !== guessedNumber)    
        
        if (query === guessedNumber) {
            finish = confirm('Поздравляю вы угадали!!! Хотите сыграть еще?');
            if (finish) {
                guessNumber();
            } else {
                alert('Игра заканчивается');
            }           
        }        
        
    } while ( query === '' || isNaN(query));

    


}


guessNumber();