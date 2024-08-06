import { Button } from 'culotta-lib'
import CardGrid from './components/CardGrid/CardGrid'
import Header from './components/Header'
import Spinner from './components/Spinner'
import { usePokemonList } from './hooks/usePokemonList'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import { createPortal } from 'react-dom'
import ModalCard from './components/ModalCard/ModalCard'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import { usePokemonData } from './hooks/usePokemonData'

function App() {
  const { pokemonList, loading, handlePageChange, currentPage, totalPages } =
    usePokemonList()
  const {
    pokemon,
    pokemonId,
    setPokemonId,
    loading: pokemonLoading,
  } = usePokemonData()

  const handlePokemonClick = (id: number) => {
    setPokemonId(id)
  }

  const handleCloseModal = () => {
    setPokemonId(null)
  }

  return (
    <div className="app">
      <Header
        logo={<span>Hello Worldd</span>}
        actions={<Button label="github" />}
      />
      <div className="app__bar">
        <h2>Pókedex</h2>
        <Navigation
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <CardGrid cardsList={pokemonList} onClickCard={handlePokemonClick} />
      )}

      {pokemon &&
        pokemonId &&
        createPortal(
          <ModalCard
            isOpen={true}
            onClose={handleCloseModal}
            children={
              <PokemonDetail pokemon={pokemon} loading={pokemonLoading} />
            }
          />,
          document.body
        )}
    </div>
  )
}

export default App
