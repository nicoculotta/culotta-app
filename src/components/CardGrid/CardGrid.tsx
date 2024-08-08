import React from 'react'
import { Card } from 'culotta-lib'
import { PokemonBasicInfo } from '../../types/pokemon'
import './CardGrid.scss'

interface CardGridProps {
  cardsList: PokemonBasicInfo[]
  onClickCard: (id: number) => void
}

const CardGrid = ({ cardsList, onClickCard }: CardGridProps) => {
  const randomVariant = () => {
    const variants = ['purple', 'yellow', 'white']
    return variants[Math.floor(Math.random() * variants.length)] as
      | 'purple'
      | 'yellow'
      | 'white'
  }

  const handleClickCard = (id: number) => {
    onClickCard(id)
  }

  return (
    <>
      <ul className="card-grid">
        {cardsList.length === 0 ? (
          <div className="card-grid__empty">No cards found</div>
        ) : (
          cardsList.map((card) => (
            <li key={card.id}>
              <Card
                imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
                name={card.name}
                onClick={() => handleClickCard(card.id)}
                variant={randomVariant()}
              />
            </li>
          ))
        )}
      </ul>
    </>
  )
}

export default CardGrid
