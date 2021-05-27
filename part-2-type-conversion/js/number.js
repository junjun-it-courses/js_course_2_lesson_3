// преобразование при математически функциях и выражениях кроме операции сложения
// console.log( 6 / "2" ); // 3, строки преобразуются в числа


// явное преобразование к числу
// let str = "123";
// console.log(str, typeof str); // string
//
// let num = Number(str); // становится числом 123
//
// console.log(num, typeof num); // number


// ошибка при преобразовании строки к числу
// let num1 = '10';
// let num2 = "   90 ";
// let num3 = "10 ..asd"
// //
//
// console.log(Number(num1), Number(num2), Number(num3)); // NaN, преобразование не удалось
//
// console.log(Number(undefined));
//
// console.log(Number(null), typeof null);
//
// console.log(Number(true), Number(false));


// Правила численного преобразования:

// undefined  -	NaN
//
// null - 0
//
// true / false	- 1 / 0

// string	Пробельные символы по краям обрезаются. Далее, если остаётся
// пустая строка, то получаем 0,
// иначе из непустой строки «считывается» число. При ошибке результат NaN.