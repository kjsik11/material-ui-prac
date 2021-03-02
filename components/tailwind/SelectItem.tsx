import React from 'react';
import styled from 'styled-components';

const Root = styled.li``;

interface Props {
  className?: string;
  selected?: boolean;
  close: (_: boolean) => void;
  setSelectItem: (item: string) => void;
  value: any;
}

const SelectItem: React.FC<Props> = ({
  className,
  setSelectItem,
  close,
  value,
  selected = false,
  children,
}) => {
  return (
    <Root className={className}>
      <button
        className="w-full text-left"
        onClick={() => {
          setSelectItem(value);
          close(false);
        }}
      >
        <li
          id="listbox-option-0"
          role="option"
          className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
        >
          <span className="font-normal block truncate">{children}</span>

          {selected && (
            <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </li>
      </button>
    </Root>
  );
};

export default SelectItem;
