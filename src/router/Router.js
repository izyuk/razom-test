import { memo, useEffect, useContext } from "react";

import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

import { Context } from "../token-store";

import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Sensors } from "../pages/Sensors/Sensors";
import { Profile } from "../pages/Profile/Profile";

export const Router = memo(() => {
  const navigate = useNavigate();
  const [contextToken, setToken] = useContext(Context);

  useEffect(() => {
    if (!localStorage.getItem("token") || !contextToken) {
      navigate("/login");
    }
    if (!contextToken && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sensors" element={<Sensors />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
});
