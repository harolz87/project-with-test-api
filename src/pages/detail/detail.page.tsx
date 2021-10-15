import React from 'react';

import { PokemonDetail } from '../../components/pokemon-detail';
import { useDetail } from './hooks/useDetail';

export const Detail = (): JSX.Element | null => {
  const { reg } = useDetail();
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
