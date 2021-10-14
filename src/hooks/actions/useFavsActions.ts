import { useActions } from './useActions';
import { actions } from '../../store/slices/favs';

export const useFavsActions = (): typeof actions => useActions(actions);
