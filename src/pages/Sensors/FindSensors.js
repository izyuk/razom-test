import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const FindSensors = memo(({ sensors }) => {
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

  if (sensors) {
    return (
      <div className="wrap">
        <label htmlFor="search">
          <span>Find sensor by name (no case-sensitive): </span>
          <input id="search" type="text" onChange={searchFilterHandler} />
        </label>
        <ul>{sensorsList}</ul>
      </div>
    );
  } else return <p>No sensors available</p>;
});
