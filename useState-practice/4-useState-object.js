import React, { useState } from "react";

const UseStateObject = () => {

  const [me, setMe] = useState({
    name: "Amit Jalal",
    currentSkill: "REACT",
    status: "Pending...",
  });

  const changeStatus = () => {
    if (status === "Pending...") setMe({ ...me, status: "Completed !!" });
    else setMe({ ...me, status: "Pending..." });
  };

  const { name, currentSkill, status } = me;
  
  return (
    <>
      <h2>{name}</h2>
      <h2>{currentSkill}</h2>
      <h2>{status}</h2>
      <button type="button" className="btn" onClick={() => changeStatus()}>
        Change Status
      </button>
    </>
  );
};

export default UseStateObject;
