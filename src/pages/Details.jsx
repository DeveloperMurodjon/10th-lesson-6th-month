import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../axios";

function Details() {
  const params = useParams();

  useEffect(function () {
    http
      .get(`/products/${params.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className="text-blue-500 font-bold">Details</div>;
}

export default Details;
