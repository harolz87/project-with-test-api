import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ItemPokemonProps {
  id: number;
  name: string;
  isLiked: boolean;
  onClickLiked: () => void;
}

export const ItemPokemon = ({
  id,
  name,
  isLiked,
  onClickLiked,
}: ItemPokemonProps): JSX.Element => (
  <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={(
          <Avatar sx={{ bgcolor: red[500] }}>
            {id}
          </Avatar>
        )}
        title={name}
      />
      <CardMedia
        component="svg"
        height="194"
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={name}
      />
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={onClickLiked}
        >
          <FavoriteIcon sx={{ color: isLiked ? red[500] : undefined }} />
        </IconButton>
      </CardActions>
    </Card>
  </div>
);
