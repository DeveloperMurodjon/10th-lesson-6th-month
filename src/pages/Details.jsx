import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import http from "../axios";
import { CartContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';


function Details() {

  const [product, setProduct] = useState({})
  const params = useParams();
  const [selectedColor, setSelectedColor] = useState('')
  const [count, setCount] = useState(1)

  const { cart, setCart } = useContext(CartContext)
  useEffect(function () {
    http
      .get(`/products/${params.id}`)
      .then((response) => {
        setProduct(response.data.data)
        setSelectedColor(response?.data?.data?.attributes?.colors[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  function handleAddToCart() {

    let isExist = cart.find(value => {
      return value.product.id == product.id && value.color == selectedColor
    })

    let cartObject = {
      id: Date.now(),
      color: selectedColor,
      product: product,
      count: Number(count)

    }

    if (isExist) {
      let copied = [...cart];
      copied = copied.map(function (value) {
        if (value.product.id == product.id && value.color == selectedColor) {
          value.count = Number(value.count)
          value.count += Number(count)
        }
        return value
      })
      setCart(copied)
    } else {
      let copied = [...cart]
      copied.push(cartObject)
      setCart(copied)

    }

    toast.success('Item added to cart', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return <div className="flex gap-[64px] mt-[65px]  justify-between mb-20">
    <img className="rounded-md w-1/2 h-[382px] object-cover" src={product?.attributes?.image} alt="" />
    <div className="w-1/2">
      <div className="">
        <h3 className="mb-2 text-[#394E6A] font-bold capitalize text-3xl">{product?.attributes?.title}</h3>
        <h3 className="mb-2 text-[#C7C9D1] text-lg font-bold">{product?.attributes?.company}</h3>
        <h3 className="mb-4 text-[#394E6A] text-lg font-normal">${product?.attributes?.price}</h3>
        <h3 className=" text-[#394E6A] text-md font-normal pr-5 leading-loose">{product?.attributes?.description}</h3>
      </div>
      <div className="flex flex-col  gap-3 mt-5">
        <label className="text-[#394E95] font-medium" >Colors</label>
        <div className="flex gap-2">  {product?.attributes?.colors.length > 0 && product?.attributes?.colors.map(function (color, index) {
          return (
            <span
              style={{ backgroundColor: color, border: color == selectedColor ? "2px solid #394E95" : "none" }}
              key={index}
              className={`inline-block w-5 h-5  cursor-pointer  rounded-full`}
              onClick={() => { setSelectedColor(color) }}
            ></span>
          )
        })}</div>
      </div>
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

      <button onClick={handleAddToCart} className="cursor-pointer mt-10 py-4 text-sm px-6 bg-[#463AA1] text-white font-medium rounded-lg">ADD TO BAG</button>
    </div>
    <ToastContainer />

  </div>;
}

export default Details;
