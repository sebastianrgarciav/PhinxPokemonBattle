// src/components/Battle.js
import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography, Grid, Box, Alert } from '@mui/material';
import PokemonCard from './PokemonCard';

const Battle = ({ pokemon1, pokemon2 }) => {
  const [winner, setWinner] = useState(null);

  const startBattle = () => {
    axios.post('http://localhost:8000/battle', {
      pokemon1Id: pokemon1.id,
      pokemon2Id: pokemon2.id,
    })
      .then(response => {
        setWinner(response.data.winner);
      })
      .catch(error => {
        console.error('There was an error starting the battle!', error);
      });
  };

  return (
    <div>
      {winner && (
        <Box my={3}>
          <Alert severity="success" variant="filled" sx={{ textAlign: 'center', fontSize: '1.5rem' }}>
            Winner: {winner.name}
          </Alert>
        </Box>
      )}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={5}>
          {pokemon1 && <PokemonCard pokemon={pokemon1} showStats />}
        </Grid>
        <Grid item xs={12} sm={2} container direction="column" alignItems="center">
          <Button variant="contained" color="primary" onClick={startBattle} style={{ marginTop: '20px' }}>
            Start Battle
          </Button>
          <Button variant="contained" color="secondary" onClick={() => window.location.reload()} style={{ marginTop: '20px' }}>
            Reset
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          {pokemon2 && <PokemonCard pokemon={pokemon2} showStats />}
        </Grid>
      </Grid>
    </div>
  );
};

export default Battle;
