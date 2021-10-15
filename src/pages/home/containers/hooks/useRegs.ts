import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { useHomeActions } from '../../../../hooks/actions/useHomeActions';

interface UseRegsResult {
    regs: any[];
    onScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    showMore: boolean;
    nextRegs: () => void;
}

export const useRegs = (): UseRegsResult => {
  const regs = useSelector((state: RootState) => state.home.regs);
  const filter = useSelector((state: RootState) => state.home.filter);
  const limit = useSelector((state: RootState) => state.home.limit);
  const homeActions = useHomeActions();

  useEffect(() => {
    if (regs.length === 0) {
      homeActions.nextRegs();
    }
  }, []);

  const onScroll = (e: any): void => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && regs.length > 0) {
      homeActions.nextRegs();
    }
  };

  const newRegs = useMemo(() => {
    const filterToLowerCase = filter.toLowerCase().trim();
    if (filterToLowerCase === '') {
      return regs;
    }
    return regs.filter((reg) => reg.name.toLowerCase().includes(filterToLowerCase));
  }, [regs, filter]);

  return {
    regs: newRegs,
    onScroll,
    showMore: newRegs.length < limit && filter !== '',
    nextRegs: homeActions.nextRegs,
  };
};
