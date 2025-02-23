import React, { useEffect, useState } from "react";
import ImageSlider from "../components/HomeSliderImage";
import Card from "../components/Card";
import http from "../axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  function redirectProducts() {
    navigate(`/products`)
  }

  useEffect(() => {
    http
      .get("/products")
      .then((response) => {
        setProducts(response.data.data.slice(0, 3));
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div >
      <div className="flex gap-25 items-center">
        <div className="w-1/2">
          <h1 className="text-[#394E6A] font-bold text-6xl mb-11">We are changing the way people shop</h1>
          <p className="text-[#394E6A] text-lg mb-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <button onClick={redirectProducts} className="uppercase cursor-pointer font-medium bg-blue-500 text-white py-3 px-4 rounded-md">our products</button>
        </div>
        <div className="w-[500px] h-[450px] rounded-lg bg-amber-300 mt-20 mb-25">
          <ImageSlider />
        </div>
      </div>


      <div className="container mx-auto my-8">
        <h2 className="text-4xl text-[#394E6A] font-semibold mb-6">Our Featured Products</h2>
        <hr className=" text-gray-300 h-[1px]" />
        <div className="flex justify-between mt-16">
          {products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home;
