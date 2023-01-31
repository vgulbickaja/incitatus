import React from "react";
import { EshopList } from "../List/EshopList.js";
import EshopItem from "../Components/EshopItem";
import "../Styles/Eshop.scss";

function Eshop() {
  return (
    <div className="eshop">
      <h1 className="eshopTitle">Incitatus</h1>
      <div className="eshopList">
        {EshopList.map((eshopItem, key) => {
          return (
            <EshopItem
              key={key}
              image={eshopItem.image}
              name={eshopItem.name}
              price={eshopItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Eshop;
