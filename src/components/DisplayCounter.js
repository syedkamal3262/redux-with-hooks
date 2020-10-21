import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const count = useSelector((state) => state.counter);

  return (
    <div>
      <h1>
        <div>Counter {count} </div>
      </h1>
    </div>
  );
};

export default DisplayCounter;
