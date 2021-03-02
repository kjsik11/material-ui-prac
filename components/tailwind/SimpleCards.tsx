import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

const Root = styled.li``;

interface Props {
  className?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  onOptionClick?: () => void;
  bgColorTailwind?: string;
}

const SimpleCards: React.FC<Props> = ({
  className,
  icon,
  title,
  sub,
  onOptionClick,
  bgColorTailwind = 'green-500',
}) => {
  return (
    <Root className={cn(className, 'col-span-1 flex shadow-sm rounded-md')}>
      <div
        className={`flex-shrink-0 flex items-center justify-center w-16 bg-${bgColorTailwind} text-white text-sm font-medium rounded-l-md`}
      >
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <a href="#" className="text-gray-900 font-medium hover:text-gray-600">
            {title}
          </a>
          <p className="text-gray-500">{sub}</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none"
            onClick={() => {
              if (onOptionClick) onOptionClick();
            }}
          >
            <span className="sr-only">Open options</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>
    </Root>
  );
};

export default SimpleCards;
