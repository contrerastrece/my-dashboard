"use client";

import React, { useState } from "react";
import { PokemonCard } from "..";
import { usePokemonStore } from "@/store/pokemons/pokemons";

export const PokemonGridFav = () => {
  const pokeFav = usePokemonStore((state) => Object.values(state.initialState));
  const [pokemons, setPokemons] = useState(pokeFav);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.length > 0
        ? pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        : "No hay favoritos"}
    </div>
  );
};
