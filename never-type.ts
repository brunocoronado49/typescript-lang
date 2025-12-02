(() => {
  const error = (message: string): never => {
    throw new Error(message);
  }

  error('Valio madre padrino!');
})()
