import { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    AuthService.logout();
    navigate("/login");
  }, [navigate]);

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
};
