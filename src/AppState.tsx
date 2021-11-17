import React, { createContext, useState } from 'react';

interface AppStateValue {
  username: string;
  shoppingCart: { items: { id: number; name: string }[] };
}

const defaultContextValue: AppStateValue = {
  username: 'Jenkin',
  shoppingCart: { items: [] },
};

export const appContext = React.createContext(defaultContextValue);

export const appSetStateContext = createContext(null);

export const AppStateProvider: React.FC = (props) => {
  const [state, c] = useState(defaultContextValue);

  return (
    <appContext.Provider value={state}>{props.children}</appContext.Provider>
  );
};
