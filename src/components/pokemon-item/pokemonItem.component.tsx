import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { ROOT_ROUTE } from '../../config/env';

import './pokemonItem.css';

interface PokemonItemProps {
  id: number;
  name: string;
  isLiked: boolean;
  onClickLiked: () => void;
}

interface LinkDetailProps {
  id: number;
  children: JSX.Element | JSX.Element[];
}

const LinkDetail = ({
  id,
  children,
}: LinkDetailProps): JSX.Element => (
  <Link to={`${ROOT_ROUTE}/detail/${id}`}>
    {children}
  </Link>
);

export const PokemonItem = ({
  id,
  name,
  isLiked,
  onClickLiked,
}: PokemonItemProps): JSX.Element => (
  <Grid item xs={1} sm={1} md={2} className="pokemon-item">
    <Card sx={{ maxWidth: 345 }}>
      <LinkDetail id={id}>
        <CardHeader
          avatar={(
            <Avatar className="pokemon-item__avatar">
              {id}
            </Avatar>
        )}
          title={name}
        />
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={name}
        />
      </LinkDetail>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={onClickLiked}
        >
          <FavoriteIcon
            className={`pokemon-item__liked pokemon-item__liked--color-${isLiked ? 'checked' : 'no-checked'}`}
          />
        </IconButton>

        <LinkDetail id={id}>
          <Button size="small">Learn More</Button>
        </LinkDetail>
      </CardActions>
    </Card>
  </Grid>
);
