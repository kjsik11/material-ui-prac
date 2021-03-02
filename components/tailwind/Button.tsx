import React from 'react';
import styled from 'styled-components';

const Root = styled.button``;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scale?: number;
}

const Button: React.FC<Props> = ({ children, scale = 3, ...props }) => {
  switch (scale) {
    case 1:
      return (
        <Root
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          {...props}
        >
          {children}
        </Root>
      );

    case 2:
      return (
        <Root
          type="button"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          {...props}
        >
          {children}
        </Root>
      );
    case 3:
      return (
        <Root
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          {...props}
        >
          {children}
        </Root>
      );
    case 4:
      return (
        <Root
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          {...props}
        >
          {children}
        </Root>
      );
    default:
      return (
        <Root
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          {...props}
        >
          {children}
        </Root>
      );
  }
};

export default Button;

export const MemoizedButton = React.memo(Button);
