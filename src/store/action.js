export const INCREAMENT = "INCREAMENT";
export const DECREAMENT = "DECREAMENT";
export const INCREAMENT_BY_VALUE = "INCREAMENT_BY_VALUE";

export const increament = () => {
  return { type: INCREAMENT };
};
export const decreament = () => {
  return { type: DECREAMENT };
};
export const inreamentByValue = (value) => {
  return {
    type: INCREAMENT_BY_VALUE,
    payload: value,
  };
};
