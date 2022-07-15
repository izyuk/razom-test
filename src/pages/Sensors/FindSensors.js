import { memo, useCallback, useEffect, useMemo, useState, useContext } from "react";

import { Link } from "react-router-dom";

import SensorsService from "../../services/sensors.service";
import { SensorsContext } from "../../sensors-store";

import { LoadSensors } from "./Sensors";

export const FindSensors = memo(() => {
  const [sensors, updateSensors] = useContext(SensorsContext);

  const [collectionsList, updateCollectionsList] = useState([]);

  useEffect(() => {
    updateCollectionsList(sensors);
  }, [sensors]);

  const sensorsList = useMemo(() => {
    return collectionsList.map((item) => {
      return (
        <li key={`Sensor ${item.id}`}>
          <Link to={`/sensors/${item.id}`}>
            <p>Name: {item.description}</p>
          </Link>
          <p>Status: {item.isActive ? "Active" : "Not active"}</p>
        </li>
      );
    });
  }, [collectionsList]);

  const searchFilterHandler = useCallback(
    (e) => {
      const searchString = e.currentTarget.value;
      const result = sensors.filter(
        (el) => el.description.toUpperCase().indexOf(searchString.toUpperCase()) >= 0, // no case-sensitive
      );
      updateCollectionsList(searchString.length ? result : sensors);
    },
    [sensors],
  );

  const handleNewSensor = useCallback(() => {
    SensorsService.createSensor(sensors[sensors.length - 1].id)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
      .then(() =>
        LoadSensors().then((res) => {
          updateSensors(res.data);
        }),
      )
      .catch((err) => console.error(err));
  }, [sensors, updateSensors]);

  if (sensors) {
    return (
      <div className="wrap">
        <label htmlFor="search">
          <span>Find sensor by name (no case-sensitive): </span>
          <input id="search" type="text" onChange={searchFilterHandler} />
        </label>
        <ul>{sensorsList}</ul>
        <button type="button" onClick={handleNewSensor}>
          New Sensor
        </button>
      </div>
    );
  } else return <p>No sensors available</p>;
});
