import axios from "axios";

import { API_URL, RequestCredentials, V1 } from "../config";

const getSensors = () => {
  const config = new RequestCredentials(localStorage.getItem("token")).headers();
  return axios
    .get(`${API_URL}${V1}/sensors`, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

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
  getSensors,
  getUserData,
};

export default UserService;
