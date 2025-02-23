import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext)

  return <div className="">Cart</div>;
}

export default Cart;
