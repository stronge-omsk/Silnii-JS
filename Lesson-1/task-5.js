// Написать функцию task5, принимающая аргументом to.
// Функция должна проверять числа от 1 до to включительно следующим образом:
// Если число кратно 3, то выводит это число и сообщение 'кртано 3'
// Если число кратно 5, то выводит это число и сообщение 'кратно 5'
// Если число кратно и 3, и 5, то выводит это число и сообщение 'кратно 3 и 5'

// здесь твой код
function task5 (to) {
    for (var i=1; i<=to; i++) {
        
         if (i % 3 === 0 && i % 5 === 0) {
            console.log (i + " кратно 3 и 5");
            }      
        
       else if (i % 3 === 0) {
            console.log (i+' кратно 3');
          }
          else if (i % 5 === 0) {
              console.log (i+' кратно 5');
          }
     
          
          
    }
}


// проверка
task5(30);
// Должно вывести
// 3 кратно 3
// 5 кратно 5
// 6 кртано 3
// 9 кратно 3
// 10 кратно 5
// 12 кратно 3
// 15 кратно 3 и 5
// 18 кратно 3
// 20 кратно 5
// 21 кратно 3
// 24 кратно 3
// 25 кратно 5
// 27 кратно 3
// 30 кратно 3 и 5