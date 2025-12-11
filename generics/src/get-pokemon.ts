import axios from "axios";
import type { Pokemon } from "./interfaces/index.ts";

export const getPokemon = async (pokeID: number): Promise<String> => {
  const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
  return resp.data.name;
}
