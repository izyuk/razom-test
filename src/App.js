// import { useContext, useMemo } from "react";
import { Router } from "./router/router";

// import { UserContext } from "./userContext";
import { Navigation } from "./router/navigation";
import "./styles/App.css";

export const App = () => {
  // const [token, setToken] = useContext(null);
  //
  // const providerValue = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <div>
      {/*<UserContext.Provider value={providerValue}>*/}
      <Navigation />
      <Router />
      {/*</UserContext.Provider>*/}
    </div>
  );
};
