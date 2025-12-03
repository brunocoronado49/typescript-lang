(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWold = (): string => 'Save the world';

  let myFunction: Function;

  myFunction = addNumbers;
  console.log(myFunction(1, 3));

  myFunction = greet;
  console.log(myFunction('Bruce'));

  myFunction = saveTheWold;
  console.log(myFunction());
})()
