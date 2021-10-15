import React from 'react';

import { PokemonDetail } from '../../components/pokemon-detail';
import { useFavs } from './hooks/useFavs';

export const Detail = (): JSX.Element | null => {
  const { reg } = useFavs();
  if (reg === null) {
    return null;
  }

  return (
    <>
      <h2>Pokemon detail</h2>
      <PokemonDetail reg={reg} />
    </>
  );
};
