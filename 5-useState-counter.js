import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <section>
        <h1>Counter Practice</h1>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease count
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset count
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase count
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
