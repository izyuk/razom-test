// import { useContext, useMemo } from "react";
import { Router } from "./router/Router";

// import { UserContext } from "./userContext";
import { Navigation } from "./router/Navigation";
import "./styles/App.css";
import TokenStore from "./token-store";
import SensorsStore from "./sensors-store";

export const App = () => {
  return (
    <div>
      <TokenStore>
        <SensorsStore>
          <Navigation />
          <Router />
        </SensorsStore>
      </TokenStore>
    </div>
  );
};
