import React from 'react'
import { CardDetails } from 'culotta-lib'
import { Pokemon } from '../../types/pokemon'
import './PokemonDetail.scss'

interface PokemonDetailProps {
  pokemon: Pokemon
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  const statsData = {
    headers: pokemon.stats.map((stat) => stat.stat.name),
    data: [pokemon.stats.map((stat) => stat.base_stat.toString())],
  }
  const typesData = pokemon.types.map((type) => type.type.name)

  return (
    <CardDetails
      name={pokemon.name}
      imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      types={typesData}
      stats={statsData}
      weight={pokemon.weight}
      height={pokemon.height}
    />
  )
}

export default PokemonDetail
