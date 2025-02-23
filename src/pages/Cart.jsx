import React, { useContext } from "react";
import { CartContext } from "../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log("cart", cart);
  function handleRemoveFromCart(product) {
    if (confirm("Do you really want to remove")) {
      let copied = [...cart]
      copied = copied.filter(item => {
        return item.id != product.id
      })

      setCart(copied)
    }
  }

  return (
    <div>
      <h2 className="mt-[85px]  text-[#394E6A] text-4xl font-semibold">Shopping Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} >
            <hr className="h-[1px] text-gray-400 mt-[26px] mb-8" />
            <div className="flex">
              <img
                src={item?.product?.attributes?.image}
                alt="Product"
                className="w-[128px] h-[128px] rounded-md"
              />
              <div>
                <h3>{item?.product?.attributes?.title}</h3>
                <h3>{item?.count}</h3>
                <span
                  style={{ backgroundColor: item?.color }}
                  className={`inline-block w-[20px] h-[20px] rounded-full `}>
                </span>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-[#394E95] font-medium">Amount</p>
                  <select
                    className="w-80 border-[1px] p-3 border-solid border-[#394E95] rounded-md text-[#394E95] font-medium"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  >
                    <option className="font-bold">1</option>
                    <option className="font-bold">2</option>
                    <option className="font-bold">3</option>
                    <option className="font-bold">4</option>
                  </select>
                </div>
                <br />
                <button onClick={() => { handleRemoveFromCart(item) }} className="text-blue-500">remove</button>

              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
