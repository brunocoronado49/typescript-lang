class Avenger {
  name: string;
  power: number;

  constructor(name: string, power: number) {
    this.name = name;
    this.power = power;
  }

  static toString(): void {
    console.log(`Hello, I am a class in TS`)
  }
}

Avenger.toString();

const hulk = new Avenger('Hulk', 8000);
console.log(hulk);
