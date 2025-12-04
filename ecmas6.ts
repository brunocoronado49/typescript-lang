(() => {
  // Variables "let"
  console.log('********* let *********');

  let nombre: string;
  nombre = 'Francisco Coronado';
  console.log(nombre);

  // Destructuring Objects
  console.log('********* Destructuring Objects *********');

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  }

  const avengers: Avengers = {
    nick: 'Samuel L JAckson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activos: true,
    poder: 1500.897564
  };

  const { poder, vision } = avengers;
  console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto);
  }

  printAvenger(avengers);

  // Destructuring Arrays
  console.log('********* Destructuring Arrays *********');

  const avemgersArr: string[] = ['ironman', 'capitan america', 'hulk'];
  const [ironman,,hulk] = avemgersArr;
  console.log(ironman, hulk);

  const avengersTuple: [string, boolean, number] = ['Spiderman', true, 150];
  const [name, activo, pow] = avengersTuple;
  console.log({name, activo, pow});

  // For
  console.log('********* For *********');

  type Avenger = {
    avName: string;
    weapon: string;
  }

  const avIronman: Avenger = {
    avName: 'Iron Man',
    weapon: 'Armor suit'
  }

  const avSpiderman: Avenger = {
    avName: 'Spider Man',
    weapon: 'Spider powers'
  }

  const avHulk: Avenger = {
    avName: 'Hulk',
    weapon: 'Super strength'
  }

  const avengersFor = [avIronman, avSpiderman, avHulk];

  for (const av of avengersFor) {
    console.log(av.avName);
  }

  for (const av in avengersFor) {
    console.log(avengersFor[av]);
  }
})()
