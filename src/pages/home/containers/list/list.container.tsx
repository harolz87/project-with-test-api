import React from 'react';
import Button from '@mui/material/Button';

import { PokemonList } from '../../../../components/pokemon-list';
import { PokemonItem } from '../../../../components/pokemon-item';

import { useRegs } from '../hooks/useRegs';
import { useFavs } from '../hooks/useFavs';

export const List = (): JSX.Element => {
  const {
    regs,
    onScroll,
    showMore,
    nextRegs,
  } = useRegs();

  const {
    favsHash,
    addFav,
    removeFav,
  } = useFavs();

  return (
    <>
      <PokemonList onScroll={onScroll}>
        {
        regs.map(({ name, id }) => {
          const isLiked = favsHash[id] === true;
          const onClickLiked = isLiked ? removeFav(id) : addFav({ name, id });
          return (
            <PokemonItem
              key={name}
              id={id}
              name={name}
              isLiked={isLiked}
              onClickLiked={onClickLiked}
            />
          );
        })
      }
      </PokemonList>
      {showMore && (
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={nextRegs}
      >
        Show more
      </Button>
      )}
    </>
  );
};
