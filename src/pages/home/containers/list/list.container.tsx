import React from 'react';
import Button from '@mui/material/Button';

import { Masonry } from '../../../../components/masonry';
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
      <Masonry onScroll={onScroll}>
        {
        regs.map(({ name, id }) => {
          const isLiked = favsHash[id] === true;
          const onClickLiked = isLiked ? addFav({ name, id }) : removeFav(id);
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
      </Masonry>
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
