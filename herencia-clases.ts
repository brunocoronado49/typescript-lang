(() => {
  class Avenger {
    public name: string;
    public realName: string;

    constructor(name: string, realName: string) {
      this.name = name;
      this.realName = realName;
      console.log('Constructor Avenger!');
    }

    protected getFullName(): string {
      return `${this.name}, ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    public isMutant: boolean;

    constructor(name: string, realName: string, isMutant: boolean) {
      super(name, realName);
      this.isMutant = isMutant;
      console.log('Constructor Xmen!');
    }

    getFullNameFromXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  console.log(wolverine);
  wolverine.getFullNameFromXmen();
})()
