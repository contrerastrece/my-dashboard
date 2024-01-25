import { SimplePokemon } from "@/pokemons";
import { create } from "zustand";

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
  "1": { id: "1", name: "bulbasaur" },
};

interface PokemonStore {
  name: string;
  initialState: PokemonState;
  toggleFavorite: (pokemon: SimplePokemon) => void;
}
export const usePokemonStore = create<PokemonStore>((set, get) => ({
  name: "Pokemon",
  initialState,
  toggleFavorite: (pokemon) => {
    const { id } = pokemon;
    const currentState = get().initialState;
    const isFavorite = !!currentState[id];
    isFavorite ? delete currentState[id] : (currentState[id] = { ...pokemon });

    set({ initialState: { ...currentState } });
  },
}));
