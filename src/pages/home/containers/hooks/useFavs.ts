/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../store';
import { useFavsActions } from '../../../../hooks/actions/useFavsActions';

interface UseFavsResult {
    favsHash: any;
    addFav: (args: any) => () => void;
    removeFav: (id: number) => () => void;
}

export const useFavs = (): UseFavsResult => {
  const favs = useSelector((state: RootState) => state.favs.regs);
  const favsActions = useFavsActions();

  const favsHash = useMemo(() => {
    const hash = favs.reduce((acc: any, fav) => {
      acc[fav.id] = true;
      return acc;
    }, {});

    return hash;
  }, [favs]);

  const addFav = (args: any) => (): void => {
    favsActions.addFav(args);
  };

  const removeFav = (id: number) => (): void => {
    favsActions.removeFav(id);
  };

  return {
    favsHash,
    addFav,
    removeFav,
  };
};
