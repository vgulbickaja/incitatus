import React from "react";

function EshopItem({ image, name, price }) {
  return (
    <div className="eshopItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default EshopItem;
