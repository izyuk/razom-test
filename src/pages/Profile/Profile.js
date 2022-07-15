import { memo, useEffect, useMemo, useState } from "react";

import UserService from "../../services/user.service";

const ProfileData = memo(() => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);

  const handlePersonalData = () => {
    UserService.getUserData()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    handlePersonalData();
  }, []);

  const mapData = useMemo(() => {
    return Object.keys(data).map((key) => {
      if (key !== "disabled") {
        return (
          <div key={key} className="row">
            <span>{key}:</span>
            <span>{data[key]}</span>
          </div>
        );
      }
    });
  }, [data]);

  if (loader) {
    return <p>Loading...</p>;
  }
  if (data) {
    return <div className="info">{mapData}</div>;
  } else return <p>Something went wrong. Please try to refresh page</p>;
});

export const Profile = memo(() => {
  return (
    <div className="wrap">
      <h3>Personal info</h3>
      <ProfileData />
    </div>
  );
});
