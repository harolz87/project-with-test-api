import { useActions } from './useActions';
import { actions } from '../../store/slices/alert-error';

export const useAlertErrorActions = (): typeof actions => useActions(actions);
