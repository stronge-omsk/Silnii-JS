function test1 (num1, num2) {
    var result = num1 * num2;
    return result;
}

// Функция возвращает (return) произведение двух чисел, которые она принимает
test1(2, 5); // Функция умножит 2 на 5, но ничего не выведет в консоль. Нет команды console.log(что-то);

// Можно вывести результат функции в консоль
console.log( test1(2, 5) ); // Функция умножит 2 на 5 и вернет 10, затем этот результат выведется в консоли

// Так как функция что-то возвращает, можно записать ее в переменную
var a = test1(2, 5);
console.log(a); // в переменную "a" записали результат выполнения функции, затем вывел значение переменной "a" (10) на консоль

// Выходит, что результат выполнения данной функции - просто число, можем его использовать как угодно
console.log( test1(3, 5) * 2 ); // Выполняем функцию test1(3, 5) получаем 15, затем 15 умножаем на 2. В консоль выведется результат (30)

var b = 200 / test1(2, 5); // В переменную b записали результат деления 200 на результат выполнения функции test1(2, 5) т.е. 200 / 10. В переменной b число 20. В консоль ничего не выводиться
console.log(b); // Вывели значение переменной b (20) в консоль

var c = test1(2, 2) * test1(3, 3); // test1(2, 2) вернет 4, test1(3, 3) вернет 9. В переменную "c" запишется результат 4 * 9 т.е. 36  


console.log(); // часть 2
function test2 (num1, num2) {
    var result = num1 * num2;
    console.log(result);
}
// Функция ПРОСТО выводит на консоль произведение и ничего не возвращает

test2(2, 5); // Сразу выведет в консоль результат 10
console.log( test2(2, 5) ); // Сначало выполнит test2(2, 5), которая просто выводит результат умножения 2 и 5 на консоль, т.е. 10. Но при этом, функция ничего не возвращает.
// т.е. Результат выполнения функции undefined. В итоге получается console.log(undefined);
// В итоге в консоле будет сначало 10, а потом undefined (т.к. console.log'a в итоге два)

var d = 8 * test2(3, 5); // Сначало в консоль выведется 15, потом в переменную d запишется результат умножения 8 и undefined, т.е. NaN (Not a Number) (Не Число)
console.log(d); // Выведет в консоль NaN

console.log();
function test21(val) {
    if (typeof val === 'number') {
        console.log('Это число');
    }
}
// Функция проверяет тип переменной, и если она является числом (number), то на консоль выводится сообщение 'Это число'
test21(5); // Выведет 'Это число'
test21('бла бла'); // Ничего не выведет


console.log(); // часть 3
function test31 (num) {
    if (num % 2 === 0) {
        console.log('Чётное');
    } else {
        console.log('Нечётное');
    }
}
// Функция выводит на консоль четное ли число, которое передается в функцию
test31(16); // Чётное
test31(15); // Нечётное
// else выполняется когда условия в if неверно
console.log();
function test32 (num) {
    var test = num * 3;
    if (test % 2 === 0) {
        console.log('Кратно двум');
    } else if (test % 5 === 0) {
        console.log('Кратно пяти')
    } else {
        console.log('Не кратно ни двум ни пяти');
    }
}
// В функции test32 объявляется переменная test в которую записывается результат умножения числа, которое передается в функцию и трёх
// Затем смотрим, кратно ли число двум, если да выводим 'Кратно двум'. Если нет, то смотрим, кратно ли оно 5. Если кратно 5, то выводит на консоль 'Кратно пяти'
// а если нет, то выводит 'Не кратно ни двум ни пяти';
test32(10); // в переменной test запишется результат умножения - 10 * 2 т.е. 20
// 20 % 2 = 0 (10 целых, 0 в остатке)
// 0 === 0  - верно. Заходит в тело первого if'a (т.е. в фигурные скобки). Выводит на консоль 'Кратно двум'. Конец функции
console.log();
test32(5); // переменная test будет равна 15;
// 15 % 2 = 1 (7 целых, а 1 в остатке)
// 1 === 0  - неверно. Пропускаем тело первого if'a и проверяем следующее условие
// 15 % 5 = 0 (3 целых, 0 в остатке). Заходит в тело второго if'a и выводит в консоль 'Кратно пяти'. Конец функции

// в итоге такая функция test32(10); выведет в консоль просто 'Кратно двум'
// а такая test32(5); выведет просто 'Кратно пяти'

// если написать функцию, в которой два if'a выполняются независимо (без else) результат будет другой
function test33 (test) {
    if (test % 2 === 0) {
        console.log('Кратно двум');
    }
    if (test % 5 === 0) {
        console.log('Кратно пяти')
    }
}
console.log();
test33(2); // Выведет 'Кратно двум'
console.log();
test33(5); // Выведет 'Кратно пяти'
console.log();
test33(10); // Выведет сначало 'Кратно двум', потом 'Кратно пяти'. т.е. и то и то

console.log(); // часть 4
function test41 () {
    for (var i = 1; i <= 5; i ++) {
        console.log(i);
    }
}
// Функция выводит все числа от 1 до 5 в консоль
test41(); // Выведет в консоль
// 1
// 2
// 3
// 4
// 5
console.log();
function test42 (from) {
    for (var i = from; i <= 10; i ++) {
        console.log(i);
    }
}
// Функция выводит числа на консоль от того, которое передается в функцию, до 10
test42(7); // Выведет на консоль
// 7
// 8
// 9
// 10

// Так же можно было написать так
function test43 (from) {
    for (from; from <= 10; from ++) {
        console.log(from);
    }
}
// test43 делает тоже самое что и test42
console.log();
function test44 (from, to) {
    for (var i = from; i <= to; i ++) {
        console.log(i);
    }
}
// Функция test44 выводит все числа начиная с параметра 'from' заканчивая параметром 'to' включительно
test44(3, 6); // выведет на консоль
// 3
// 4
// 5
// 6
console.log();
function test45 () {
    for (var i = 10; i > 0; i --) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
// Функция test45 выводит все числа от 10 до 0, которые кратны двум
test45(); // выведет на консоль
// 10
// 8
// 6
// 4
// 2

console.log(); // часть 5
function test5(num) {
    if (num > 10 && num % 2 === 0) {
        console.log(num);
    }
}
// Функция test5 выводит переданное число только в случае, когда число больше 10 и является четным. В данном примере '&&' является обозначением условного 'и'
// Требуется, чтобы и левая и правая части от '&&' были верными
// То есть 'число num больше 10 и число num кратно двум (четное)'. Если хоть одно из подусловий не выполнится, то код в теле if'а не выполнится
test5(4); // кратно 2, но не больше 10, поэтому ничего не выведет
test5(7); // некратно 2 и не больше 10, поэтому ничего не выведет
test5(20); // выведет на консоль 20, так как все верно
test5(15); // больше 10, но не кратно 2, поэтому ничего не выведет