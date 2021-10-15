import React from 'react';
import { Carousel as ReCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

interface CarouselProps {
    children: JSX.Element[];
}

export const Carousel = ({
  children,
}: CarouselProps): JSX.Element => (
  <ReCarousel>
    {children}
  </ReCarousel>
);
