(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let myCustomVariable: (Hero | string | number) = 'Francisco';
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Bruce',
    age: 23,
    powers: ['No one'],
    getName() {
      return '';
    }
  };
  console.log(typeof myCustomVariable);
})()
