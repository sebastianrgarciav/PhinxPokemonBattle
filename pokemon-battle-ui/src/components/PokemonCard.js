// src/components/PokemonCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, LinearProgress, Box } from '@mui/material';

const PokemonCard = ({ pokemon, isSelected, compact }) => {
  const maxStatValue = 10; // Define el valor máximo para las estadísticas para normalizar las barras

  const getNormalizedValue = (value) => (value / maxStatValue) * 100;

  return (
    <Card className={`pokemon-card ${isSelected ? 'selected' : ''}`} style={compact ? { width: 150, cursor: 'pointer' } : {}}>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height={compact ? "140" : "200"}
        image={pokemon.imageUrl}
        title={pokemon.name}
        style={{ objectFit: 'contain' }}
      />
      <CardContent style={compact ? { padding: '8px' } : {}}>
        <Typography variant={compact ? "body2" : "h5"} color="textSecondary" component="p">
          {pokemon.name}
        </Typography>
        {!compact && (
          <>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">HP</Typography>
              <LinearProgress variant="determinate" value={getNormalizedValue(pokemon.hp)} />
            </Box>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">Attack</Typography>
              <LinearProgress variant="determinate" value={getNormalizedValue(pokemon.attack)} />
            </Box>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">Defense</Typography>
              <LinearProgress variant="determinate" value={getNormalizedValue(pokemon.defense)} />
            </Box>
            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">Speed</Typography>
              <LinearProgress variant="determinate" value={getNormalizedValue(pokemon.speed)} />
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
