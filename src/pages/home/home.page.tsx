import React from 'react';
import { List } from './containers/list';
import { SearchInput } from './containers/search';

export const Home = (): JSX.Element => (
  <>
    <h2>Pokemons</h2>
    <SearchInput />
    <List />
  </>
);
