import React from 'react';

import { PokemonList } from '../../components/pokemon-list';
import { PokemonItem } from '../../components/pokemon-item';

import { useFavs } from './hooks/useFavs';

export const Favs = (): JSX.Element => {
  const { regs, removeFav } = useFavs();
  return (
    <>
      <h2>My favorite Pokemons</h2>
      <PokemonList>
        {
        regs.map(({ name, id }) => (
          <PokemonItem
            key={name}
            id={id}
            name={name}
            isLiked
            onClickLiked={removeFav(id)}
          />
        ))
      }
      </PokemonList>
    </>
  );
};
