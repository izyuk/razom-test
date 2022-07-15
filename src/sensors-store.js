import { createContext, useState } from "react";

const initialState = null;

export const SensorsContext = createContext();
const SensorsStore = ({ children }) => {
  const [sensors, updateSensors] = useState(initialState);
  return (
    <SensorsContext.Provider value={[sensors, updateSensors]}>{children}</SensorsContext.Provider>
  );
};

export default SensorsStore;
