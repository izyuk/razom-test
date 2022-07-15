import axios from "axios";

import { API_URL, user } from "../config";

const login = (username, password) => {
  const bodyFormData = new FormData();
  bodyFormData.append("username", username);
  bodyFormData.append("password", password);
  return axios.post(`${API_URL}/auth/login`, bodyFormData).then((res) => {
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.access_token);
    }
    return res.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return null;
};

const getCurrentUser = () => {
  return JSON.parse(user);
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
