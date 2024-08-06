import { useEffect, useState } from 'react'
import { Pokemon } from '../types/pokemon'
import { getPokemonById } from '../api/helpers'

export const usePokemonData = () => {
  const [pokemonId, setPokemonId] = useState<number | null>(null)
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchPokemonData = async (id: number) => {
    setLoading(true)
    try {
      const pokemon = await getPokemonById(id)
      setPokemon(pokemon)
    } catch (error) {
      console.error('Error fetching pokemon data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (pokemonId) {
      fetchPokemonData(pokemonId)
    }
  }, [pokemonId])

  return { pokemon, setPokemonId, pokemonId, loading }
}
