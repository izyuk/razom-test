import { createContext, useState } from "react";

const initialState = null;

export const Context = createContext();
const TokenStore = ({ children }) => {
  const [token, setToken] = useState(initialState);
  return <Context.Provider value={[token, setToken]}>{children}</Context.Provider>;
};

export default TokenStore;
