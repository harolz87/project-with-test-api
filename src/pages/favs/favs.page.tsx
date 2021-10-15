import React from 'react';

import { Masonry } from '../../components/masonry';
import { PokemonItem } from '../../components/pokemon-item';

import { useFavs } from './hooks/useFavs';

export const Favs = (): JSX.Element => {
  const { regs, removeFav } = useFavs();
  return (
    <>
      <h2>My favorite Pokemons</h2>
      <Masonry>
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
      </Masonry>
    </>
  );
};
