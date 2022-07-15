import { memo, useEffect, useState, useContext } from "react";

import UserService from "../../services/user.service";
import { FindSensors } from "./FindSensors";
import { SensorsContext } from "../../sensors-store";

export const LoadSensors = async () => {
  return await UserService.getSensors();
};

export const Sensors = memo(() => {
  const [loader, setLoader] = useState(true);
  const [sensors, updateSensors] = useContext(SensorsContext);

  const getSensors = () => {
    LoadSensors()
      .then((res) => {
        updateSensors(res.data);
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
    return <FindSensors />;
  } else return <p>No sensors available</p>;
});
