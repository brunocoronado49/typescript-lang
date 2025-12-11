import { genericFnArrow } from '../genericos.ts';
import type { Villain } from '../interfaces/index.ts';
// import { printObject, genericFn, genericFnArrow } from './genericos.ts';

// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject([1,2,3,4,5,6,7]);
// printObject('Hello World!');

// console.log(genericFn(3.1416).toFixed(2));
// console.log(genericFn('Hello world'.toUpperCase()));
// console.log(genericFn(new Date().getDate()));

// console.log(genericFnArrow(3.1416).toFixed(2));
// console.log(genericFnArrow('Hello world'.toUpperCase()));
// console.log(genericFnArrow(new Date().getDate()));

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Wilson',
  dangerLevel: 120
}

console.log(genericFnArrow<Villain>(deadpool).dangerLevel);
