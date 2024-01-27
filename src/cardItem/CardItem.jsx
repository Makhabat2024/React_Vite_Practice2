import React from "react";

const CardItem = ({ id, image, name, status }) => {
  return (
    <>
      <div className="cardItem" key={id}>
        <img src={image} alt={name} style={{width: 200}}/>
        <h3>{name}</h3>
        <p>{status}</p>
      </div>
    </>
  );
};

export default CardItem;
