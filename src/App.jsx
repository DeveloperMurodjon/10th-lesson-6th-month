import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// pages
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Register from "./pages/Register";
import Login from "./pages/Login";

export const CartContext = createContext()

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {

  }, [cart])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <MainLayout>
              <Details />
            </MainLayout>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes></CartContext.Provider>
  );
}

export default App;
