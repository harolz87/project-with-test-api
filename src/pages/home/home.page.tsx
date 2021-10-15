import React from 'react';
import { List } from './containers/list';
import { SearchInput } from './containers/search';

export const Home = (): JSX.Element => (
  <>
    <h2>All Pokemons</h2>
    <SearchInput />
    <List />
  </>
);
