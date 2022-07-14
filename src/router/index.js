import { Link, Route, Routes, useNavigate } from "react-router-dom";

import { Login } from "../components/login";
import { Home } from "../components/home";
import { Sensors } from "../components/sensors";
import { useEffect } from "react";

export const Router = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate("/login");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sensors" element={<Sensors />} />
    </Routes>
  );
};

export const Navigation = () => {
  return (
    <nav>
      <Link to={"/login"}>Login</Link>
      <Link to={"/sensors"}>Sensors list</Link>
    </nav>
  );
};
