import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

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
  <Link to={`/detail/${id}`}>
    {children}
  </Link>
);

export const PokemonItem = ({
  id,
  name,
  isLiked,
  onClickLiked,
}: PokemonItemProps): JSX.Element => (
  <div className="pokemon-item">
    <Card sx={{ maxWidth: 345 }}>
      <LinkDetail id={id}>
        <CardHeader
          avatar={(
            <Avatar sx={{ bgcolor: red[500] }}>
              {id}
            </Avatar>
        )}
          title={name}
        />
        <CardMedia
          component="img"
          sx={{ width: '100%' }}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={name}
        />
      </LinkDetail>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={onClickLiked}
        >
          <FavoriteIcon sx={{ color: isLiked ? red[500] : undefined }} />
        </IconButton>

        <LinkDetail id={id}>
          <Button size="small">Learn More</Button>
        </LinkDetail>
      </CardActions>
    </Card>
  </div>
);
