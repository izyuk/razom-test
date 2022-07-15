import { useCallback, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Context } from "../../token-store";
import AuthService from "../../services/auth.service";

export const Logout = () => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(Context);

  const handleLogout = useCallback(() => {
    AuthService.logout();
    setToken(null);
    navigate("/login");
  }, []);

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
};
