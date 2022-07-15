import { memo, useCallback, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { TokenContext } from "../../token-store";
import AuthService from "../../services/auth.service";

export const Logout = memo(() => {
  const navigate = useNavigate();
  const [token, setToken] = useContext(TokenContext);

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
});
