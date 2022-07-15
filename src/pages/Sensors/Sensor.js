import { memo, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import UserService from "../../services/user.service";

export const Sensor = memo(() => {
  const [loader, setLoader] = useState(true);
  const [sensorData, setSensorData] = useState();
  const params = useParams();

  const handleRequest = (id) => {
    UserService.getSensorById(id)
      .then((res) => setSensorData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    handleRequest(params.id);
  }, [params.id]);

  if (loader) {
    return <p>Loading...</p>;
  }
  if (sensorData) {
    const { id, description, isActive, samplingPeriod } = sensorData;
    return (
      <div className="wrap">
        <h3>Sensor {id}</h3>
        <span>About: {description}</span>
        <span>{isActive ? "Active" : "Not Active"}</span>
        <span>Sampling period: {samplingPeriod}</span>
      </div>
    );
  } else return <p>Something went wrong</p>;
});
