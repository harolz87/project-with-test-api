import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { PokemonDetail } from '../../components/pokemon-detail';

import { RootState } from '../../store';
import { useDetailActions } from '../../hooks/actions/useDetailActions';

export const Detail = (): JSX.Element | null => {
  const reg = useSelector((state: RootState) => state.detail.reg);
  const detailActions = useDetailActions();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    detailActions.getItem(id);
    return (): void => {
      detailActions.reset();
    };
  }, [id]);

  if (reg === null) {
    return null;
  }

  return (
    <PokemonDetail reg={reg} />
  );
};
