import { Link } from "react-router-dom";

import { token } from "../config";
import { Logout } from "../components/logout";

export const Navigation = () => {
  return (
    <nav className="menu">
      <Link to={"/sensors"}>Sensors list</Link>
      {token ? <Link to={"/profile"}>Profile</Link> : <Link to={"/login"}>Login</Link>}
      {token && <Logout />}
    </nav>
  );
};
