import React from 'react';
import { Wrapper, Body } from '../../components/layout';
import { Header } from '../header';
import { Footer } from '../footer';

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: LayoutProps): JSX.Element => (
  <Wrapper>
    <Header />
    <Body>
      {children}
    </Body>
    <Footer />
  </Wrapper>
);
