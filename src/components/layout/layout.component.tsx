import React from 'react';
import './layout.css';

interface WrapperProps {
    children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({
  children,
}: WrapperProps) : JSX.Element => (
  <div className="layout">
    {children}
  </div>
);

interface BodyProps {
    children: JSX.Element | JSX.Element[];
}

export const Body = ({
  children,
}: BodyProps) : JSX.Element => (
  <main className="layout__body">
    {children}
  </main>
);
