import React from 'react';
// import { SSRProvider } from '@react-aria/ssr';
// import { OverlayProvider } from '@react-aria/overlays';

export interface State {
  displayAlert: boolean;
}

export interface StateWithActions extends State {
  openAlert: () => void;
  closeAlert: () => void;
}

const initialState: State = {
  displayAlert: false,
};

const initialStateWithActions: StateWithActions = {
  ...initialState,
  openAlert: () => {},
  closeAlert: () => {},
};

type Action =
  | {
      type: 'OPEN_ALERT';
    }
  | {
      type: 'CLOSE_ALERT';
    };

export const UIContext = React.createContext<StateWithActions>(
  initialStateWithActions,
);

const uiReducer: (state: State, action: Action) => State = (state, action) => {
  switch (action.type) {
    case 'OPEN_ALERT': {
      return {
        ...state,
        displayAlert: true,
      };
    }
    case 'CLOSE_ALERT': {
      return {
        ...state,
        displayAlert: false,
      };
    }
  }
};

export const UIProvider: React.FC = ({ ...props }) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);
  const openAlert = () => dispatch({ type: 'OPEN_ALERT' });
  const closeAlert = () => dispatch({ type: 'CLOSE_ALERT' });

  const value: StateWithActions = React.useMemo(
    () => ({
      ...state,
      openAlert,
      closeAlert,
    }),
    [state],
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

export const ManagedUIContext: React.FC = ({ children }) => (
  <UIProvider>
    {/* <ThemeProvider defaultTheme="light"> */}
    {/* <SSRProvider> */}
    {/* <OverlayProvider> */}
    {children}
    {/* </OverlayProvider> */}
    {/* </SSRProvider> */}
    {/* </ThemeProvider> */}
  </UIProvider>
);

export default ManagedUIContext;
