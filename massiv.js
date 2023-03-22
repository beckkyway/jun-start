.forEach
//Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
//Он для каждого элемента массива вызывает функцию callback.
//Этой функции он передаёт три параметра callback(item, i, arr):
//item – очередной элемент массива.
//i – его номер.
//Метод forEach ничего не возвращает, его используют только для перебора, как более «элегантный» вариант, чем обычный цикл for.
//arr – массив, который перебирается.
const arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});

//////////////////
Filter
//Метод «arr.filter(callback[, thisArg])» используется для фильтрации массива через функцию.
//Он создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true.
const arr = [1, -1, 2, -2, 3];

const positiveArr = arr.filter(function(number) {
  return number > 0;
});

alert( positiveArr ); // 1,2,3

/////////////////
Map
//Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
//Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.
const names = ['HTML', 'CSS', 'JavaScript'];

const nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
alert( nameLengths ); // 4,3,10

/////////////////////
every/some
//Эти методы используются для проверки массива.
//Метод «arr.every(callback[, thisArg])» возвращает true, если вызов callback вернёт true для каждого элемента arr.
//Метод «arr.some(callback[, thisArg])» возвращает true, если вызов callback вернёт true для какого-нибудь элемента arr.

const arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert( arr.every(isPositive) ); // false, не все положительные
alert( arr.some(isPositive) ); // true, есть хоть одно положительное

///////////////////
reduce
const arr = [1, 2, 3, 4, 5]

// для каждого элемента массива запустить функцию,
// промежуточный результат передавать первым аргументом далее
const result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);

alert( result ); // 15


//forEach – для перебора массива.
//filter – для фильтрации массива.
//every/some – для проверки массива.
//map – для трансформации массива в массив.
//reduce/reduceRight – для прохода по массиву с вычислением значения.
