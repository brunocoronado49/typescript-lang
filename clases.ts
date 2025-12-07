(() => {
  class Avenger {
    static avAge: number = 20;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
  }

  const spiderman: Avenger = new Avenger('Spiderman', 'Ironman', 'Peter Parker');
  console.log(spiderman);
  console.log(Avenger.avAge);
})()
