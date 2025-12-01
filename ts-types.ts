const a: number = 10;
let b: number;

b = 3.1415;

console.log(a);
console.log(b);

function sayHello(msg: string): string {
  return msg.toUpperCase();
}

const result: string = sayHello('Hello world!');
console.log(result);
