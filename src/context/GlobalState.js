import { createContext } from 'react';

export const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);
GlobalContext.displayName = 'GlobalContext';
