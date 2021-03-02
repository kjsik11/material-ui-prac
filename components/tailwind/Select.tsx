import React from 'react';
import styled from 'styled-components';
import SelectItem from './SelectItem';

const Root = styled.div``;

interface Props {
  className?: string;
  items: string[];
}
const Select: React.FC<Props> = ({ className, items }) => {
  const [openItem, setOpenItem] = React.useState<boolean>(false);
  const [selectItem, setSelectItem] = React.useState<string>(items[0]);

  return (
    <Root className={className}>
      <div className="mt-1 relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onClick={() => setOpenItem((prev) => !prev)}
        >
          <span className="block truncate">{selectItem}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {openItem && (
          <div className="mt-1 w-full rounded-md bg-white shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {items.map((item, idx) => (
                <SelectItem
                  value={item}
                  key={`select-item-${idx}`}
                  setSelectItem={setSelectItem}
                  close={setOpenItem}
                  selected={selectItem === item}
                >
                  {item}
                </SelectItem>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Root>
  );
};

export default Select;
