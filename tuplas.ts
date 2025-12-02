(() => {
  const hero: [string, number, boolean] = ['Doctor Strange', 100, true]

  hero[0] = 'Spider Man';
  hero[1] = 80;
  hero[2] = false;

  console.log(hero);
})()
