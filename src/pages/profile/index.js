import { memo, useEffect, useMemo, useState } from "react";

import UserService from "../../services/user.service";

const ProfileData = () => {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);

  const handlePersonalData = () => {
    UserService.getUserData()
      .then((res) => {
        return setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    handlePersonalData();
  }, []);

  const mapData = useMemo(() => {
    Object.keys(data).map((key) => {
      return (
        <div key={key} className="row">
          <p>{key}: </p>
          <p>{data[key]}</p>
        </div>
      );
    });
  }, [data]);

  if (loader) {
    return <p>Loading...</p>;
  }
  if (data) {
    return <div className="info">{mapData}</div>;
  } else return <p>Something went wrong. Please try to refresh page</p>;
};

export const Profile = memo(() => {
  return (
    <div>
      <h3>Personal info</h3>
      <ProfileData />
    </div>
  );
});
