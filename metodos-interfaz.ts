(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(): string;
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
    },
    getFullAddress() {
      return this.address.city;
    },
  }

  console.log(client);
})()
