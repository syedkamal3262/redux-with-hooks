import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increament, decreament, inreamentByValue } from "../store/action";
const Counter = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(increament());
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            dispatch(decreament());
          }}
        >
          decrease
        </button>
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(inreamentByValue(value));
          }}
        >
          Increase By Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
