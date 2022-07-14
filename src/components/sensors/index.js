import { useEffect, useMemo, useState } from "react";

import UserService from "../../services/user.service";

export const Sensors = () => {
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

  const sensorsList = useMemo(() => {
    return sensors.map((item) => {
      return (
        <li key={`Sensor ${item.id}`}>
          <p>Name: {item.description}</p>
          <p>Status: {item.isActive ? "Active" : "Not active"}</p>
        </li>
      );
    });
  }, [sensors]);

  if (loader) {
    return <p>Loading...</p>;
  }
  if (sensors) {
    return <ul>{sensorsList}</ul>;
  } else return <p>No sensors available</p>;
};
