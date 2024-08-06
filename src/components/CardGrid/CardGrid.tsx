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
      <div className="card-grid">
        {cardsList.length === 0 ? (
          <div className="card-grid__empty">No cards found</div>
        ) : (
          cardsList.map((card) => (
            <Card
              key={card.id}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
              name={card.name}
              onClick={() => handleClickCard(card.id)}
              variant={randomVariant()}
            />
          ))
        )}
      </div>
    </>
  )
}

export default CardGrid
