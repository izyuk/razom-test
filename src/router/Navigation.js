import { Link } from "react-router-dom";

import { Logout } from "../components/Logout/Logout";
import { useContext } from "react";
import { Context } from "../token-store";

export const Navigation = () => {
  const [token] = useContext(Context);
  console.log(token);

  return (
    <nav className="menu">
      <Link to={"/sensors"}>Sensors list</Link>
      {token ? <Link to={"/profile"}>Profile</Link> : <Link to={"/login"}>Login</Link>}
      {token && <Logout />}
    </nav>
  );
};
