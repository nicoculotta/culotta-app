import React from 'react'
import { render } from "@testing-library/react"
import CardGrid from "./CardGrid"

describe('CardGrid', () => {

  const defaultProps = {
    cardsList: [{ url: '', name: 'Ditto', id: 132 }],
    onClickCard: jest.fn(),
  }
  it('should render and empty message when the cards list is empty', () => {
    const { getByText } = render(<CardGrid cardsList={[]} onClickCard={jest.fn()} />)
    expect(getByText('No cards found')).toBeInTheDocument()
  })

  it('should render the cards list', () => {
    const { getByText } = render(<CardGrid {...defaultProps} />)
    expect(getByText('Ditto')).toBeInTheDocument()
  })
})