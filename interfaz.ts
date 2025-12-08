(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 25,
    powers: ['Superspeed', 'Time traveler']
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 35,
    powers: ['Superpower', 'Fly'],
    getName() {
      return this.name;
    }
  };
})()
