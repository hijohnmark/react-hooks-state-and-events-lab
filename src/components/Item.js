import React, { useState } from "react";

function Item({ name, category }) {

const [isInCart, setIsInCart] = useState(false)

const cartStatus = isInCart ? "in-cart" : ""

function handleAddToCart(){
  setIsInCart(isInCart => !isInCart)
}
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
