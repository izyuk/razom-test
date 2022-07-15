import { Link } from "react-router-dom";

import { Logout } from "../components/Logout/Logout";
import { memo, useContext } from "react";
import { Context } from "../token-store";

export const Navigation = memo(() => {
  const [token] = useContext(Context);

  return (
    <nav className="menu">
      <Link to={"/"}>Home</Link>
      <Link to={"/sensors"}>Sensors list</Link>
      {token ? <Link to={"/profile"}>Profile</Link> : <Link to={"/login"}>Login</Link>}
      {token && <Logout />}
    </nav>
  );
});
