"use client";
import React, { useState } from "react";
function NameInput() {
  const [data, setData] = useState();
  console.log("udududududududu",data)
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Your Name...."
        onChange={(e) => {
          setData(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default NameInput;
