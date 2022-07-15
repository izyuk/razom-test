import { memo, useEffect, useState } from "react";

import UserService from "../../services/user.service";
import { FindSensors } from "./FindSensors";

export const Sensors = memo(() => {
  const [loader, setLoader] = useState(true);
  const [sensors, setSensors] = useState([]);

  const getSensors = () => {
    UserService.getSensors()
      .then((res) => {
        setSensors(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    getSensors();
  }, []);

  if (loader) {
    return <p>Loading...</p>;
  }
  if (sensors) {
    return <FindSensors sensors={sensors} />;
  } else return <p>No sensors available</p>;
});
