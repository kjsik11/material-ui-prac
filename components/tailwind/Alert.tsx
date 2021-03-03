import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { useUI } from '@components/context';
import { Transition } from '@headlessui/react';

const Root = styled.div`
  width: 1000px;
  position: relative;
`;

interface Props {
  className?: string;
  title: string;
  description: string;
  open: boolean;
}

const Alert: React.FC<Props> = ({ className, title, description, open }) => {
  const { closeAlert } = useUI();

  return (
    <Transition show={open}>
      <Transition.Child
        enter="transition-opacity ease-linear duration-75 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-75 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Root className={cn(className, 'rounded-md bg-yellow-50 p-4')}>
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">{title}</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <button
            className="absolute top-0 right-3"
            onClick={() => closeAlert()}
          >
            x
          </button>
        </Root>
      </Transition.Child>
    </Transition>
  );
};

export default Alert;
