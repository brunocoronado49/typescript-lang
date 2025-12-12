function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {}
  }
}

const bloquearPrototipo = function(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// function CheckValidPokemonId() {
//   return function(
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log({target, propertyKey, descriptor});
//   }
// }

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  public name: string;
  public api: string = 'https://pokeapi.co';

  constructor(name: string) {
    this.name = name;
  }

  // @CheckValidPokemonId()
  savePokemonToDb(id: number) {
    console.log(`Pokemon saved to Database: ${id}`);
  }
}
