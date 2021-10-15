import { useRef } from 'react';
import { useHomeActions } from '../../../../hooks/actions/useHomeActions';

interface UseFilterResult {
    onChange: (event: any) => void;
}

export const useFilter = (): UseFilterResult => {
  const timer = useRef<any>(null);
  const homeActions = useHomeActions();

  const onChange = (event: any): void => {
    const { value } = event.target;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      homeActions.setFilter(value);
    }, 500);
  };

  return {
    onChange,
  };
};
