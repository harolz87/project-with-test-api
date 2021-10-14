import { useActions } from './useActions';
import { actions } from '../../store/slices/home';

export const useHomeActions = (): typeof actions => useActions(actions);
