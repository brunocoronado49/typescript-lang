(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || ''}`;
  }

  const myName = fullName('Francisco');
  console.log(myName);
})()
