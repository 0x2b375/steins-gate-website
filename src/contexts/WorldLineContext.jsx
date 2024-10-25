/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const WorldLineContext = createContext();

export const WorldLineProvider = ({ children }) => {
  const [worldLine, setWorldLine] = useState("steins-gate");

  return (
    <WorldLineContext.Provider value={{ worldLine, setWorldLine }}>
      {children}
    </WorldLineContext.Provider>
  );
};
