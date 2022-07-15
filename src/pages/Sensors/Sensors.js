import { memo, useEffect, useState, useContext } from "react";

import { Loader } from "../../components/Loader/Loader";
import SensorsService from "../../services/sensors.service";
import { FindSensors } from "./FindSensors";
import { SensorsContext } from "../../sensors-store";
import { TokenContext } from "../../token-store";

export const LoadSensors = async () => {
  return await SensorsService.getSensors();
};

export const Sensors = memo(() => {
  const [loader, setLoader] = useState(true);
  const [sensors, updateSensors] = useContext(SensorsContext);
  const [token] = useContext(TokenContext);

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
    return <Loader />;
  }
  if (sensors) {
    return <FindSensors />;
  } else
    return (
      <div className="wrap">
        {token ? <h1>No sensors available</h1> : <h1>Login to view available sensors</h1>}
      </div>
    );
});
