import { renderHook, act } from '@testing-library/react-hooks'
import { usePokemonData } from './usePokemonData'
import { getPokemonById } from '../api/helpers'

// Mock del módulo api/helpers
jest.mock('../api/helpers', () => ({
  getPokemonById: jest.fn(),
}))

describe('usePokemonData', () => {
  it('debe cargar los datos del Pokémon cuando se establece el ID', async () => {
    const mockPokemon = { id: 1, name: 'Bulbasaur' }
      ; (getPokemonById as jest.Mock).mockResolvedValue(mockPokemon)

    const { result, waitForNextUpdate } = renderHook(() => usePokemonData())

    expect(result.current.pokemon).toBeNull()
    expect(result.current.loading).toBe(false)

    act(() => {
      result.current.setPokemonId(1)
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.pokemon).toEqual(mockPokemon)
    expect(result.current.loading).toBe(false)
    expect(getPokemonById).toHaveBeenCalledWith(1)
  })

  // ... más tests aquí ...
})