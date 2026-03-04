import './App.css';
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import PokemonCard from './components/PokemonCard/PokemonCard';
import StatusMessage from './components/StatusMessage/StatusMessage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

  useEffect(() => {
    if (searchTerm === '') {
      setPokemon(null);
      return;
    }

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(BASE_URL + searchTerm.toLowerCase());

        if (!response.ok) {
          throw new Error('Pokemon no encontrado');
        }

        const data = await response.json();

        setPokemon(data);
        setLoading(false);
      } catch (err) {
        setPokemon(null);
        setError('Pokemon no encontrado');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Buscador de Pokemon</h1>
      <p>Escribe el nombre del Pokemon que quieres ver:</p>

      <SearchForm
        searchTerm={searchTerm}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <StatusMessage loading={loading} error={error} />

      {pokemon && !loading && !error && <PokemonCard pokemon={pokemon} />}
    </>
  );
}

export default App;
