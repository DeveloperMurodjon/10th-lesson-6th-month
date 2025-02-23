import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";


function Cart() {
  const { cart, setCart } = useContext(CartContext)
  console.log("cart", cart);
  return (
    <div>

      {cart.length > 0 && cart.map(function (item, index) {
        return <div key={index}>
          <img src={item?.product.attributes.image} className="w-[300px]" />
          {
            console.log("image", item?.product.attributes.image)

          }
        </div>
      })}
    </div>
  );
}

export default Cart;
