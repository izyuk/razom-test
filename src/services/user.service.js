import axios from "axios";

import { API_URL, RequestCredentials } from "../config";

const getUserData = () => {
  const config = new RequestCredentials(localStorage.getItem("token")).headers();
  return axios
    .get(`${API_URL}/auth/me`, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

const UserService = {
  getUserData,
};

export default UserService;
