import { printObject, genericFn } from './genericos.ts';

printObject(123);
printObject(new Date());
printObject({a:1, b:2, c:3});
printObject([1,2,3,4,5,6,7]);
printObject('Hello World!');

console.log(genericFn(3.1416).toFixed(2));
console.log(genericFn('Hello world'.toUpperCase()));

// TODO: Terminar la seccion de genericos (clase funciones genericas)
