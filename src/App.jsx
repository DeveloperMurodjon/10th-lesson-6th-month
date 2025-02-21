import React from "react";
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

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home></Home>
          </MainLayout>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <MainLayout>
            <About></About>
          </MainLayout>
        }
      ></Route>
      <Route
        path="/products"
        element={
          <MainLayout>
            <Products></Products>
          </MainLayout>
        }
      ></Route>
      <Route
        path="/products/:id"
        element={
          <MainLayout>
            <Details></Details>
          </MainLayout>
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <MainLayout>
            <Cart></Cart>
          </MainLayout>
        }
      ></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  );
}

export default App;
