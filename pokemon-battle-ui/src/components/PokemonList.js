// src/components/PokemonList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Container } from '@mui/material';
import PokemonCard from './PokemonCard';

const PokemonList = ({ selectedPokemons, onSelect }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/pokemon')
      .then(response => {
        setPokemons(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the Pokemon!', error);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '20px' }}>
        {pokemons.map(pokemon => (
          <Grid item key={pokemon.id} onClick={() => onSelect(pokemon)} style={{ cursor: 'pointer' }}>
            <PokemonCard pokemon={pokemon} isSelected={selectedPokemons.includes(pokemon)} compact />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonList;
