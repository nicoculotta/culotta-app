import { useEffect, useState } from 'react'
import { getPokemonList } from '../api/helpers'
import { PokemonBasicInfo } from '../types/pokemon'

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonBasicInfo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const ITEMS_PER_PAGE = 18

  const mapResults = (results: any[]): PokemonBasicInfo[] =>
    results.map(({ url, name }) => ({
      url,
      name,
      id: parseInt(url.split('/').filter(Boolean).pop() || '0'),
    }))

  const fetchPokemonList = async () => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE
    setLoading(true)
    setError(null)
    try {
      const response = await getPokemonList(ITEMS_PER_PAGE, offset)
      setPokemonList(mapResults(response.results))
      setTotalPages(Math.ceil(response.count / ITEMS_PER_PAGE))
    } catch (error) {
      console.error('Error al obtener la lista de Pokémon:', error)
      setError(error instanceof Error ? error : new Error('Error desconocido'))
      setPokemonList([])
      setTotalPages(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemonList()
  }, [currentPage])

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  return {
    pokemonList,
    loading,
    error,
    handlePageChange,
    currentPage,
    totalPages,
  }
}
