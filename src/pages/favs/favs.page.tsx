import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { Masonry } from '../../components/masonry';
import { PokemonItem } from '../../components/pokemon-item';

import { useFavsActions } from '../../hooks/actions/useFavsActions';

export const Favs = (): JSX.Element => {
  const regs = useSelector((state: RootState) => state.favs.regs);
  const favsActions = useFavsActions();

  const removeFav = (id: number) => (): void => {
    favsActions.removeFav(id);
  };

  return (
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
  );
};
