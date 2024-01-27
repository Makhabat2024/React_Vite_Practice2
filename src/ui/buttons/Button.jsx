import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      onClick={() => {
        onClick(onClick);
      }}
    >
      updata
    </button>
  );
};

export default Button;
