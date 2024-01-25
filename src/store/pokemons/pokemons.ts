import { SimplePokemon } from "@/pokemons";
import { create } from "zustand";

interface PokemonState{
[key:string]: SimplePokemon
}

const initialState:PokemonState={
    '1':{id: '1', name: 'bulbasaur'}
}

interface PokemonStore{
  name:string;
  initialState:PokemonState
}
export const usePokemonStore=create<PokemonStore>((set,get)=>({
  name:'Pokemons',
  initialState,
  
}))