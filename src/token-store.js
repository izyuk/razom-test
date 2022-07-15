import { createContext, useState } from "react";

const initialState = null;

export const TokenContext = createContext();
const TokenStore = ({ children }) => {
  const [token, setToken] = useState(initialState);
  return <TokenContext.Provider value={[token, setToken]}>{children}</TokenContext.Provider>;
};

export default TokenStore;
