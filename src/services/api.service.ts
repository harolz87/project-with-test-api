import { Fetch } from '../utils/http';

interface ListArgs {
    limit: number;
    offset: number;
}

interface reg {
    name: string;
}

interface Response {
  results: reg[];
}

const list = ({
  limit,
  offset,
}: ListArgs): Promise<Response> => (
  Fetch({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
    init: {
      method: 'GET',
    },
  })
);

export const api = {
  list,
};
