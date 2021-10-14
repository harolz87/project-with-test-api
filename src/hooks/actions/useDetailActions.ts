import { useActions } from './useActions';
import { actions } from '../../store/slices/detail';

export const useDetailActions = (): typeof actions => useActions(actions);
