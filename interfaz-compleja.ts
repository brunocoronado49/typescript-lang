(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zipCode: string;
    city: string;
  }

  const client: Client = {
    name: 'Francisco',
    age: 28,
    address: {
      id: 123,
      zipCode: '123 45 DFF',
      city: 'Mexico'
    }
  }

  console.log(client);
})()
