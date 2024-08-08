import { renderHook, act, waitFor } from '@testing-library/react'
import { getPokemonById } from '../../api/helpers'
import { usePokemonData } from '../usePokemonData'

jest.mock('../../api/helpers', () => ({
  getPokemonById: jest.fn(),
}))

describe('usePokemonData', () => {
  it('should load the pokemon data when the id is set', async () => {
    const mockPokemon = { id: 1, name: 'Bulbasaur' }
    ;(getPokemonById as jest.Mock).mockResolvedValue(mockPokemon)

    const { result } = renderHook(() => usePokemonData())

    expect(result.current.pokemon).toBeNull()
    expect(result.current.loading).toBe(false)

    act(() => {
      result.current.setPokemonId(1)
    })

    expect(result.current.loading).toBe(true)

    waitFor(() => {
      expect(result.current.pokemon).toEqual(mockPokemon)
      expect(result.current.loading).toBe(false)
      expect(getPokemonById).toHaveBeenCalledWith(1)
    })
  })

  it('should handle errors when fetching pokemon data', async () => {
    const errorMessage = () => {
      return 'Error fetching pokemon data'
    }
    ;(getPokemonById as jest.Mock).mockRejectedValue(new Error(errorMessage()))

    const { result } = renderHook(() => usePokemonData())

    act(() => {
      result.current.setPokemonId(1)
    })
  })
})
