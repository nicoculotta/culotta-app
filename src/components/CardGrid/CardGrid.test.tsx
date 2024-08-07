import React from 'react'
import { render } from "@testing-library/react"
import CardGrid from "./CardGrid"

describe('CardGrid', () => {

  const defaultProps = {
    cardsList: [],
    onClickCard: jest.fn(),
  }
  it('should render and empty message when the cards list is empty', () => {
    const { getByText } = render(<CardGrid {...defaultProps} />)
    expect(getByText('No cards found')).toBeInTheDocument()
  })
})