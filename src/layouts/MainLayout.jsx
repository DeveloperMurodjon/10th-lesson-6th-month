import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container max-w-[1090px] mx-auto ">{children}</div>
    </div>
  );
}

export default MainLayout;
