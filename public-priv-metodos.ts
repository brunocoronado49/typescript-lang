(() => {
  class Avenger {
    private name: string;
    private team: string;
    public realName?: string;
    static avAge: number = 20;

    static getAvgAge() {
      return this.name;
    }

    constructor(
      name: string,
      team: string,
      realName?: string
    ) {
      this.name = name;
      this.team = team;
      this.realName = realName ?? ''
    }

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const spiderman: Avenger = new Avenger('Spiderman', 'Ironman', 'Peter Parker');
  console.log(spiderman);
  console.log(Avenger.avAge);
  console.log(Avenger.getAvgAge());
  console.log(spiderman.bio());
})()
