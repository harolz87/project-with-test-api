import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';
import { usHomeActions } from '../../hooks/actions/usHomeActions';
import { Masonry } from '../../components/masonry';
import { ItemPokemon } from '../../components/item-pokemon';

export const Home = (): JSX.Element => {
  const regs = useSelector((state: RootState) => state.home.regs);
  const homeActions = usHomeActions();
  useEffect(() => {
    if (regs.length === 0) {
      homeActions.nextRegs();
    }
  }, []);

  const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && regs.length > 0) {
      homeActions.nextRegs();
    }
  };

  return (
    <Masonry onScroll={onScroll}>
      {
        regs.map((reg, index) => (
          <ItemPokemon
            key={reg.name}
            id={index + 1}
            name={reg.name}
          />
        ))
      }
    </Masonry>
  );
};
