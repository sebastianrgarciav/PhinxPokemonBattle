// src/App.js
import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import PokemonList from './components/PokemonList';
import Battle from './components/Battle';
import './styles.css';

const App = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [battleStarted, setBattleStarted] = useState(false);

  const handleSelect = (pokemon) => {
    if (selectedPokemons.length < 2 && !selectedPokemons.includes(pokemon)) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    }
  };

  const handleReset = () => {
    setSelectedPokemons([]);
    setBattleStarted(false);
  };

  const startBattle = () => {
    setBattleStarted(true);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">Battle of Pokemon</Typography>
      <Typography variant="h6" gutterBottom align="center">Select your Pokemon</Typography>
      <br></br>
      <PokemonList selectedPokemons={selectedPokemons} onSelect={handleSelect} />
      {selectedPokemons.length === 2 && !battleStarted && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={startBattle}>
            Start Battle
          </Button>
        </Box>
      )}
      {battleStarted && (
        <Battle pokemon1={selectedPokemons[0]} pokemon2={selectedPokemons[1]} />
      )}
    </Container>
  );
};

export default App;
