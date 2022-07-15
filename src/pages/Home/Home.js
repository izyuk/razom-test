import { memo, useContext } from "react";
import { Context } from "../../token-store";

export const Home = memo(() => {
  const [token] = useContext(Context);

  return (
    <div className="wrap">
      <h1>Welcome at Home page</h1>
      {token && <p>My token is: {token}</p>}
    </div>
  );
});
