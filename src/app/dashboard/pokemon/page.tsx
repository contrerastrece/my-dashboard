import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

interface Props{
  limit: number;
  offset: number;
}
const getPokemons = async (limit=20,offset=0):Promise<SimplePokemon[]> =>{
  const response= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data:PokemonsResponse=await response.json();
  const pokemons=data.results.map(pokemon=>({
    id:pokemon.url.split('/').at(-2)!,/*con el signo de admiración le estoy diciendo que sí vendrá un dato */
    name:pokemon.name
  }))

  return pokemons;
}
const PokemonsPage = async() => {
  const pokemons=await getPokemons(151);

  return (
    <div className="flex flex-col">
     <PokemonGrid pokemons={pokemons}/>
    </div>
  )
}

export default PokemonsPage 