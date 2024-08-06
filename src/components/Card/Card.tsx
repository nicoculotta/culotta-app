import './Card.scss'

interface CardProps {
  image: string
  name: string
  onClick: () => void
  variant: 'purple' | 'yellow' | 'white'
}

const Card = ({ image, name, onClick, variant = 'purple' }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      <img
        className={`card__image card__image--${variant}`}
        src={image}
        alt={name}
      />
      <h2 className="card__name">{name}</h2>
    </div>
  )
}

export default Card
