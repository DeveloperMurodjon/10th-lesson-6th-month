import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
  }, [])

  function handleSetParams() {
    setSearchParams({ name: "olma", age: "3" })
  }

  return <div className="text-blue-500 font-bold">
    <button onClick={handleSetParams}>params</button>
  </div>;
}

export default Home;
