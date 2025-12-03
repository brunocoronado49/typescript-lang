(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return 'Batisignal activada!';
  }

  console.log(typeof activateBatisignal);

  const heroName: string = returnName();
  console.log(heroName);
})()
