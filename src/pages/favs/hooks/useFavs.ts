import { useSelector } from 'react-redux';

import { RootState } from '../../../store';
import { useFavsActions } from '../../../hooks/actions/useFavsActions';

interface UseFavsResult {
    regs: any[];
    removeFav: (id: number) => () => void;
}

export const useFavs = (): UseFavsResult => {
  const regs = useSelector((state: RootState) => state.favs.regs);
  const favsActions = useFavsActions();

  const removeFav = (id: number) => (): void => {
    favsActions.removeFav(id);
  };

  return { regs, removeFav };
};
