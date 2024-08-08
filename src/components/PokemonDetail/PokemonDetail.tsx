import React from 'react'
import { CardDetails, Spinner } from 'culotta-lib'
import { Pokemon } from '../../types/pokemon'

interface PokemonDetailProps {
  pokemon: Pokemon
  loading: boolean
}

const PokemonDetail = ({ pokemon, loading }: PokemonDetailProps) => {
  const statsData = {
    headers: pokemon.stats.map((stat) => stat.stat.name),
    data: [pokemon.stats.map((stat) => stat.base_stat.toString())],
  }
  const typesData = pokemon.types.map((type) => type.type.name)

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CardDetails
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            types={typesData}
            stats={statsData}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        </>
      )}
    </div>
  )
}

export default PokemonDetail
