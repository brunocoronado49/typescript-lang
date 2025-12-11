import { getPokemon } from "./get-pokemon.ts";

getPokemon(1)
  .then(console.log)
  .catch(console.log)
  .finally(() => console.log('Fin'));
