import React, { useContext } from "react";
import { CartContext } from "../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log("cart", cart);
  function handleRemoveFromCart(product) {
    if (confirm("Do you really want to remove")) {
      let copied = [...cart];
      copied = copied.filter((item) => {
        return item.id != product.id;
      });

      setCart(copied);
    }
  }

  function handleChangeCount(current, product) {
    const updatedCart = cart.map((item) => {
      if (item.id == product.id) {
        return { ...item, count: Number(current) };
      }
      return item;
    });
    setCart(updatedCart);
  }

  return (
    <div>
      <h2 className="mt-[85px]  text-[#394E6A] text-4xl font-semibold">
        Shopping Cart
      </h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <hr className="h-[1px] text-gray-400 mt-[26px] mb-8" />
            <div className="flex justify-between">

              <div className="flex gap-18 w-[350px]">
                <img
                  src={item?.product?.attributes?.image}
                  className="w-[128px] h-[128px] rounded-md"
                />

                <div className="flex flex-col gap-3">
                  <h3 className="text-[#394E6A] capitalize font-semibold">{item?.product?.attributes?.title}</h3>
                  <p className="text-sm  text-gray-300">{item?.product?.attributes?.company}</p>
                  <div className="flex gap-1 items-center">
                    <p className="text-[#394E6A] text-sm">Color:</p>
                    <span
                      style={{ backgroundColor: item?.color }}
                      className={`inline-block w-[15px] h-[15px] rounded-full `}
                    ></span>
                  </div></div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[#394E95] ">Amount</p>
                <select
                  className=" border-[1px]  border-solid border-[#394E95] rounded-md text-[#394E95] font-medium"
                  value={item.count}
                  onChange={(e) => {
                    handleChangeCount(e.target.value, item);
                  }}
                >
                  <option className="font-bold">1</option>
                  <option className="font-bold">2</option>
                  <option className="font-bold">3</option>
                  <option className="font-bold">4</option>
                </select>
                <button
                  onClick={() => {
                    handleRemoveFromCart(item);
                  }}
                  className="text-blue-500"
                >
                  remove
                </button>
              </div>

              <p className="font-medium text-[#394E95]">${item?.product?.attributes?.price}</p>
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
