import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { RootState } from '../../../store';
import { useDetailActions } from '../../../hooks/actions/useDetailActions';

interface useDetailResult {
    reg: any | null;
}

export const useDetail = (): useDetailResult => {
  const reg = useSelector((state: RootState) => state.detail.reg);
  const detailActions = useDetailActions();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    detailActions.getItem(id);
    return (): void => {
      detailActions.reset();
    };
  }, [id]);

  return {
    reg,
  };
};
