import { useActions } from './useActions';
import { actions } from '../../store/slices/home';

export const usHomeActions = (): typeof actions => useActions(actions);
