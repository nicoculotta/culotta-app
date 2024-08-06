import { Pokemon } from '../../types/pokemon'
import Spinner from '../Spinner'

interface PokemonDetailProps {
  pokemon: Pokemon
  loading: boolean
}

const PokemonDetail = ({ pokemon, loading }: PokemonDetailProps) => {
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>{pokemon.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <p>{pokemon.types.map((type) => type.type.name).join(', ')}</p>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
          <p>{pokemon.stats.map((stat) => stat.stat.name).join(', ')}</p>
        </>
      )}
    </div>
  )
}

export default PokemonDetail
