import { memo } from "react";

export const Loader = memo(() => {
  return (
    <div className="wrap">
      <h1>Loading...</h1>
    </div>
  );
});
