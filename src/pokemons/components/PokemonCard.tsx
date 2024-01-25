"use client";
import Link from "next/link";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "..";
import { usePokemonStore } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const isFavorite = usePokemonStore(
    (state) => !!state.initialState[pokemon.id]
  );
  const toggle = usePokemonStore((state) => state.toggleFavorite);
  // console.log("", toggle);
  // console.log({isFavorite});

  const onToggle=()=>{
    toggle(pokemon);
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            height={100}
            width={100}
            alt={pokemon.name}
            className="object-contain w-20 h-20"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {pokemon.name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer" onClick={onToggle}>
            <div className="text-red-600 ">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es Favorito" : "No es Favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
