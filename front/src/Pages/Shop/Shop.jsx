import React from "react";
import { PRODUCTS } from "../../List/Products.js";
import { Product } from "./Product";
import "../../Styles/Shop.scss";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Incitatus</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
