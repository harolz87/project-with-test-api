import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Carousel } from '../carousel';

import './pokemonDetail.css';

interface PokemonDetailProps {
    reg: any;
}

interface DescriptionProps {
    children: JSX.Element | JSX.Element[] | string;
    title: string;
}

const Description = ({
  title,
  children,
}: DescriptionProps): JSX.Element => (
  <Grid item xs={2} sm={2} md={2}>
    <Card className="pokemon-detail__description">
      <CardContent>
        <Typography className="pokemon-detail__description-title" variant="h5" component="div">
          {title}
        </Typography>
        <br />
        <Typography className="pokemon-detail__description-content" variant="body2">
          {children}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

interface CarouselItemProps {
    image: string;
    width?: string;
}

const CarouselItem = ({
  image,
  width = '100%',
}: CarouselItemProps): JSX.Element => (
  <CardMedia
    component="img"
    sx={{ width }}
    image={image}
  />
);

export const PokemonDetail = ({
  reg,
}: PokemonDetailProps): JSX.Element | null => (
  <div className="pokemon-detail">
    <div className="pokemon-detail__wrapper">
      <Card className="pokemon-detail__card">
        <Box className="pokemon-detail__card-left">
          <Carousel>
            <CarouselItem image={reg.sprites.other['official-artwork'].front_default} />
            <CarouselItem image={reg.sprites.other.dream_world.front_default} />
          </Carousel>
        </Box>
        <Box className="pokemon-detail__card-rigth">
          <CardContent className="">
            <Grid container spacing={{ xs: 1, sm: 1, md: 1 }} columns={{ xs: 1, sm: 1, md: 4 }}>

              <Description title="Name">
                {reg.name}
              </Description>
              <Description title="Type">
                {
                reg.types.map(({ type }) => (
                  <div key={type.name}>
                    {type.name}
                  </div>
                ))
            }
              </Description>
              <Description title="Height">
                {reg.height}
              </Description>
              <Description title="Weight">
                {reg.weight}
              </Description>
              <Description title="Abilities">
                {
                reg.abilities.map(({ ability }) => (
                  <div key={ability.name}>
                    {ability.name}
                  </div>
                ))
            }
              </Description>
            </Grid>
          </CardContent>
        </Box>

        <div className="pokemon-detail__mini-image-container ">
          <CarouselItem image={reg.sprites.front_default} width="auto" />
          <CarouselItem image={reg.sprites.back_default} width="auto" />
          <CarouselItem image={reg.sprites.front_shiny} width="auto" />
          <CarouselItem image={reg.sprites.back_shiny} width="auto" />
        </div>
      </Card>

    </div>
  </div>
);
