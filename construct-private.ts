(() => {
  class Apocalipsis {
    static _instance: Apocalipsis;
    public name: string;

    private constructor(name: string) {
      this.name = name;
    }

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis._instance) {
        Apocalipsis._instance = new Apocalipsis('Apocalipsis');
      }
      return Apocalipsis._instance;
    }
  }

  const apoca = Apocalipsis.callApocalipsis();
  const apoca1 = Apocalipsis.callApocalipsis();
  const apoca2 = Apocalipsis.callApocalipsis();
})()
