import axios from "axios";

import { API_URL, token, V1 } from "../config";

const getSensors = () => {
  return axios
    .get(`${API_URL}${V1}/sensors`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

const UserService = {
  getSensors,
};

export default UserService;
