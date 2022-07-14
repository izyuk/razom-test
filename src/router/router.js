import { memo, useEffect } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";

import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { Sensors } from "../pages/sensors";
import { Profile } from "../pages/profile";

export const Router = memo(() => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sensors" element={<Sensors />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
});
