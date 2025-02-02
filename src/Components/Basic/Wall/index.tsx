import React, { useState, useEffect } from 'react';

import { IWall } from './Wall';

export const Wall: React.FC<IWall.IProps> = ({
  elementProps = [],
  elementWidth = 24,
  gutterWidth = 1,
  marginWidth = 2,
  Component,
  onSetColumns = numColumns => numColumns,
}) => {
  const [columns, setColumns] = useState<number[][]>([]);

  const updateColumns = () => {
    const cs: number[][] = [];
    const width =
      window.innerWidth / parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    let numColumns = 1;
    let remaining = width - marginWidth - elementWidth;
    while (remaining - elementWidth - gutterWidth >= 0) {
      numColumns += 1;
      remaining -= elementWidth + gutterWidth;
    }
    for (let i = 0; i < numColumns; i += 1) cs.push([]);
    for (let i = 0; i < elementProps.length; i += 1) {
      const c = i % numColumns;
      const element = elementProps[i];
      cs[c].push(element);
    }
    setColumns(cs);
    onSetColumns(numColumns);
  };

  useEffect(() => {
    updateColumns();
    window.removeEventListener('resize', updateColumns);
    window.addEventListener('resize', updateColumns);

    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, [elementProps]);

  return (
    <div className="list">
      {columns.map(column => (
        <React.Fragment key={column.length > 0 ? JSON.stringify(column) : Math.random()}>
          <div className={`column ${columns.length === 1 && 'only-one'}`}>
            {column.map(props => (
              <React.Fragment key={JSON.stringify(props)}>
                <Component {...props} />
              </React.Fragment>
            ))}
          </div>
          <div className="gutter" />
        </React.Fragment>
      ))}
      <style jsx>
        {`
          .list {
            display: flex;
            width: 100%;
            justify-content: center;
          }

          .column {
            display: flex;
            width: ${elementWidth}rem;
            flex-direction: column;
            max-width: calc(100vw - 1rem);
          }

          .only-one {
            max-width: calc(100vw - 2rem);
          }

          .gutter {
            width: ${gutterWidth}rem;
          }

          .gutter:last-child {
            display: none;
          }
        `}
      </style>
    </div>
  );
};
