import React from "react";

const Input = ({ value, setInput }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};

export default Input;
