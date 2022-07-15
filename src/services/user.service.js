import axios from "axios";

import { API_URL, V1, RequestCredentials } from "../config";

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

const getSensorById = (id) => {
  const config = new RequestCredentials(localStorage.getItem("token")).headers();
  return axios
    .get(`${API_URL}${V1}/sensors/${id}`, config)
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
  getSensorById,
  getUserData,
};

export default UserService;
