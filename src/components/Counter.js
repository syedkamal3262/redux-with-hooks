import React, { useState } from "react";
import { useDispatch } from "react-redux";
const Counter = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "INCREAMENT",
            });
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "DECREAMENT",
            });
          }}
        >
          decrease
        </button>
      </div>
      <div>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={() => {
            dispatch({
              type: "INCREASE_BY_NO",
              payload: value,
            });
          }}
        >
          Increase by Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
