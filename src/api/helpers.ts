const POKEMON_API_URL = import.meta.env.VITE_POKEMON_API_URL as string

interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: { url: string; name: string }[]
}

export const getPokemonList = async (
  limit: number,
  offset: number
): Promise<PokemonListResponse> => {
  try {
    const response = await fetch(
      `${POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`
    )
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error('Error getting Pokémon list:', error)
    throw error
  }
}

export const getPokemonById = async (id: number) => {
  try {
    const response = await fetch(`${POKEMON_API_URL}/pokemon/${id}`)
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }
    return response.json()
  } catch (error) {
    console.error('Error getting Pokémon by ID:', error)
    throw error
  }
}
