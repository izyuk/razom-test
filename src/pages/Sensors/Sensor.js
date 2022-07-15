import { memo, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Loader } from "../../components/Loader/Loader";
import SensorsService from "../../services/sensors.service";

export const Sensor = memo(() => {
  const [loader, setLoader] = useState(true);
  const [sensorData, setSensorData] = useState();
  const params = useParams();

  const handleRequest = (id) => {
    SensorsService.getSensorById(id)
      .then((res) => setSensorData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    handleRequest(params.id);
  }, [params.id]);

  if (loader) {
    return <Loader />;
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
