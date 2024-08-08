import React from 'react'
import { render } from '@testing-library/react'
import PokemonDetail from './PokemonDetail'
import { PokemonMock } from '../../api/pokemonMock'

describe('PokemonDetail', () => {
  it('should render the pokemon details', () => {
    const { getByText } = render(<PokemonDetail pokemon={PokemonMock} />)
    expect(getByText('ditto')).toBeInTheDocument()
  })
})
