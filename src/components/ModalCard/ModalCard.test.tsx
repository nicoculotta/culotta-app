import React from 'react'
import { render } from "@testing-library/react"
import ModalCard from "./ModalCard"

describe('ModalCard', () => {
  it('should render the modal card', () => {
    const { getByText } = render(<ModalCard isOpen={true} onClose={jest.fn()} children={<div>Modal Card</div>} />)
    expect(getByText('Modal Card')).toBeInTheDocument()
  })
})