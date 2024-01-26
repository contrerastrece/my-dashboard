
import {  PokemonGridFav  } from "@/pokemons";

interface Props{
  limit: number;
  offset: number;
}


export const metadata = {
 title: 'Favoritos',
 description: 'Lista de los pokemons de la 1era generación',
};



const FavoritesPage = async() => {

  return (
    <div className="flex flex-col">
      <span className="text-4xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
     <PokemonGridFav/>
    </div>
  )
}

export default FavoritesPage 