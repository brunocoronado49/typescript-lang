import { Pokemon } from './decorator.ts';

const charmander = new Pokemon('Charmander');
Pokemon.prototype.name = 'Pikachu';
console.log(charmander);
charmander.savePokemonToDb(3);
