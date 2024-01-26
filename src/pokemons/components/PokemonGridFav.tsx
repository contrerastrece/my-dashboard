"use client";

import React from "react";
import { PokemonCard } from "..";
import { usePokemonStore } from "@/store/pokemons/pokemons";

export const PokemonGridFav = () => {
  const pokeFav = usePokemonStore((state) => state.initialState);

  console.log(Object.values(pokeFav));
  const data = Object.values(pokeFav);

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center" >
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
