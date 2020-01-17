/*
    1)
    Напишите код, который будет спрашивать логин с помощью prompt.
    Если посетитель вводит «Админ», то prompt запрашивает пароль,
    если в поле "логин" ничего не введено или нажата клавиша Esc – показать «Отменено»,
    в противном случае отобразить «Я вас не знаю».

    Если введён пароль «Я главный», то выводить «Здравствуйте!»
    Иначе – «Неверный пароль»
    При отмене – «Отменено»

Решение: 
* /
let one = prompt('Login')
if(one == 'Админ'){
 let password = prompt('Password')
 if(password == 'Я главный'){
  document.write('Здравствуйте!')
 } else{
  document.write('Неверный пароль')
 }
} else{
  document.write('Отменено')
}
//*/

/*
    2)
    Какие значения выведет цикл while?

    Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выводят alert с одинаковыми значениями или нет?

    префиксный вариант ++i
    let i = 0;
    while (++i < 5) alert( i );

    постфиксный вариант i++
    let i = 0;
    while (i++ < 5) alert( i );

Решение:
1) 1, 2, 3, 4
2) 1, 2, 3, 4, 5
> Оба цикла выводят alert с частично одинаковыми значениями
*/

/*
    3)
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.

    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }

Решение:
1) 0, 1, 2
*/
let i = 0 ; while(i < 3){
 alert(`number ${i}!`);
i++ }
//*/

/*
    4) Перепишите код с использованием одной конструкции switch:

    const number = +prompt('Введите число между 0 и 3', '');

    if (number === 0) {
        alert('Вы ввели число 0');
    }

    if (number === 1) {
        alert('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
        alert('Вы ввели число 2, а может и 3');
    }

Решение:
*/
//*/

/*
    5)
    Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

    function getBackgroundColor(theme) {
        if (theme === 'light') {
            return '#FFF';
        } else {
            return '#000';
        }
    }

Решение:
*/
//*/

/**
 * 6) Напишите функцию pow(x,n), которая возвращает x в степени n
 * 
Решение:
*/
//*/ 