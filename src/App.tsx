import React from 'react'
import './App.scss'
import { Button, Heading, Logo, Spinner, Pagination } from 'culotta-lib'
import CardGrid from './components/CardGrid/CardGrid'
import Header from './components/Header'
import { createPortal } from 'react-dom'
import ModalCard from './components/ModalCard/ModalCard'
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import { usePokemonList } from './hooks/usePokemonList'
import { usePokemonData } from './hooks/usePokemonData'

function App() {
  const { pokemonList, loading, handlePageChange, currentPage, totalPages } =
    usePokemonList()
  const { pokemon, pokemonId, setPokemonId } = usePokemonData()

  const handlePokemonClick = (id: number) => {
    setPokemonId(id)
  }

  const handleCloseModal = () => {
    setPokemonId(null)
  }

  return (
    <div className="app">
      <Header
        logo={<Logo />}
        actions={
          <Button
            onClick={() => window.open('https://github.com/nicoculotta')}
            size="small"
            variants="primary"
            hasBorder
            label="github"
          />
        }
      />
      <div className="app__bar">
        <Heading as="h1" size="s">
          List of Pokemons
        </Heading>
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          nextLabel="Next"
          previousLabel="Previous"
          size="small"
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
            children={<PokemonDetail pokemon={pokemon} />}
          />,
          document.body
        )}
    </div>
  )
}

export default App
