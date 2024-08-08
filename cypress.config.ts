import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    env: {
      VITE_POKEMON_API_URL: 'https://pokeapi.co/api/v2',
    },
  },
})
