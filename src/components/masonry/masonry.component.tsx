import * as React from 'react';
import MasonryCss from 'react-masonry-css';
import './masonry.css';

interface ListProps {
  children: JSX.Element | JSX.Element[];
  numColumns?: number;
  onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

export const Masonry = ({
  children,
  numColumns = 5,
  onScroll,
}: ListProps): JSX.Element => (
  <div className="masonry" onScroll={onScroll}>
    <MasonryCss
      breakpointCols={numColumns}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {children}
    </MasonryCss>
  </div>
);
