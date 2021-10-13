import { useActions } from './useActions';
import { actions } from '../../store/slices/auth';

export const useAuthActions = (): typeof actions => useActions(actions);
