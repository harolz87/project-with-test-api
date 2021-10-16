import Grid from '@mui/material/Grid';
import * as React from 'react';
import './pokemonList.css';

interface ListProps {
  children: JSX.Element | JSX.Element[];
  onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

export const PokemonList = ({
  children,
  onScroll,
}: ListProps): JSX.Element => (
  <div className="pokemon-list" onScroll={onScroll}>
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 1, sm: 4, md: 10 }}>
      {children}
    </Grid>
  </div>
);
