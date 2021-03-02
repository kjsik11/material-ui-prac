import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Root = styled.button`
  cursor: pointer;
`;

interface Props {
  className?: string;
  disableColorTailWind?: string;
  colorTailWind?: string;
}

const Toggle: React.FC<Props> = ({
  className,
  disableColorTailWind = 'gray-200',
  colorTailWind = 'blue-300',
}) => {
  const [enable, setEnable] = React.useState<boolean>(false);

  return (
    <Root
      type="button"
      aria-pressed="false"
      className={cn(
        className,
        'flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
      )}
      onClick={() => setEnable((prev) => !prev)}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bg-white w-full h-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={cn(
          {
            [`bg-${disableColorTailWind}`]: !enable,
            [`bg-${colorTailWind}`]: enable,
          },
          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200',
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          { 'translate-x-0': !enable, 'translate-x-5': enable },
          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200',
        )}
      />
    </Root>
  );
};

export default Toggle;
