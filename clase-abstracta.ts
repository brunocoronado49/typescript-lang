(() => {
  abstract class Mutante {
    public name: string;
    public realName: string;

    constructor(name: string, realName: string) {
      this.name = name;
      this.realName = realName;
    }
  }

  class Xmen extends Mutante {
    worldSaved() {
      return 'World Saved!';
    }
  }

  class Villian extends Mutante {
    worldDestruyed() {
      return 'World Destruted!';
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  console.log(wolverine);

  const saberthoot = new Villian('Saberthoot', 'Victor');
  console.log(saberthoot);

  console.log(wolverine.worldSaved());
  console.log(saberthoot.worldDestruyed());

  const printName = (character: Mutante) => {
    console.log(character.realName);
  }

  printName(wolverine);
  printName(saberthoot);
})()
