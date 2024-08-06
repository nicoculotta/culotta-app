import './Spinner.scss'

const Spinner = () => (
  <div className="spinner-container">
    <img
      className="spinner"
      alt="Loading..."
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    />
    <img
      className="spinner"
      alt="Loading..."
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    />
    <img
      className="spinner"
      alt="Loading..."
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    />
  </div>
)

export default Spinner
