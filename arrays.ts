(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numbersOrString: (string | number)[] = [1, 4, 'Helo', 6, 'World'];

  numbers.push(18);
  console.log(numbers);
  console.log(numbersOrString);

  const villians: string[] = ['Omega', 'Dormamu', 'Duende Verde'];
  villians.forEach(villian => {
    console.log(`Hello ${villian}`);
  });
})()
