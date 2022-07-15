// import { useContext, useMemo } from "react";
import { Router } from "./router/Router";

// import { UserContext } from "./userContext";
import { Navigation } from "./router/Navigation";
import "./styles/App.css";
import TokenStore from "./token-store";

export const App = () => {
  return (
    <div>
      <TokenStore>
        <Navigation />
        <Router />
      </TokenStore>
    </div>
  );
};
