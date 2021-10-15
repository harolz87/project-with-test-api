import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { Masonry } from '../../../../components/masonry';
import { PokemonItem } from '../../../../components/pokemon-item';

import { RootState } from '../../../../store';
import { useHomeActions } from '../../../../hooks/actions/useHomeActions';
import { useFavsActions } from '../../../../hooks/actions/useFavsActions';

export const List = (): JSX.Element => {
  const regs = useSelector((state: RootState) => state.home.regs);
  const filter = useSelector((state: RootState) => state.home.filter);
  const limit = useSelector((state: RootState) => state.home.limit);
  const favs = useSelector((state: RootState) => state.favs.regs);
  const homeActions = useHomeActions();
  const favsActions = useFavsActions();

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

  const newRegs = useMemo(() => {
    const filterToLowerCase = filter.toLowerCase().trim();
    if (filterToLowerCase === '') {
      return regs;
    }
    return regs.filter((reg) => reg.name.toLowerCase().includes(filterToLowerCase));
  }, [regs, filter]);

  const favsHash = useMemo(() => {
    const hash = favs.reduce((acc: any, fav) => {
      acc[fav.id] = true;
      return acc;
    }, {});

    return hash;
  }, [favs]);

  const addFav = (args: any) => (): void => {
    favsActions.addFav(args);
  };

  const removeFav = (id: number) => (): void => {
    favsActions.removeFav(id);
  };

  return (
    <>
      <Masonry onScroll={onScroll}>
        {
        newRegs.map(({ name, id }) => {
          const isLiked = favsHash[id] === true;
          let onClickLiked;
          if (!isLiked) {
            onClickLiked = addFav({ name, id });
          } else {
            onClickLiked = removeFav(id);
          }
          return (
            <PokemonItem
              key={name}
              id={id}
              name={name}
              isLiked={isLiked}
              onClickLiked={onClickLiked}
            />
          );
        })
      }
      </Masonry>
      {(newRegs.length < limit && filter !== '') && (
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={(): void => { homeActions.nextRegs(); }}
      >
        Show more
      </Button>
      )}
    </>
  );
};
