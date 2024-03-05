/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-duplicates */
import React from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
