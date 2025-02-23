import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import http from "../axios.js";
import Card from "../components/Card";
import Pagination from '@mui/material/Pagination';


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const [filter, setFilter] = useState({
    search: "",
    company: "all",
    category: "all",
    order: "a-z",
    price: 100000,
    shipping: false,
  });

  useEffect(() => {
    setLoading(true);
    let url = "/products";

    if (
      searchParams.get("search") ||
      searchParams.get("category") ||
      searchParams.get("company") ||
      searchParams.get("order") ||
      searchParams.get("price") ||
      searchParams.get("shipping")
    ) {
      const updatedFilter = {
        search: searchParams.get("search") || "",
        company: searchParams.get("company") || "all",
        category: searchParams.get("category") || "all",
        order: searchParams.get("order") || "a-z",
        price: searchParams.get("price") || 100000,
        shipping: searchParams.get("shipping") ? true : false,
      };
      setFilter(updatedFilter);

      url = `/products?search=${updatedFilter.search}&category=${updatedFilter.category}&company=${updatedFilter.company}&order=${updatedFilter.order}&price=${updatedFilter.price}${updatedFilter.shipping ? "&shipping=on" : ""
        }`;
    }

    if (searchParams.get("page")) {
      setCurrentPage(searchParams.get('page'))
    }

    http
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response?.data?.data);
          setTotalPage(response?.data?.meta?.pagination.pageCount)
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  useEffect(() => {
    http
      .get(`/products?page=${currentPage}`)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response?.data?.data);
          setTotalPage(response?.data?.meta?.pagination.pageCount)
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage])


  function handleFilter(e) {
    e.preventDefault();
    setLoading(true);
    const url = `/products?search=${filter.search}&category=${filter.category}&company=${filter.company}&order=${filter.order}&price=${filter.price}${filter.shipping ? "&shipping=on" : ""
      }`;

    setSearchParams(
      { ...filter, shipping: filter.shipping ? "on" : "" },
      false
    );

    http
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setProducts(response?.data?.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handlePaginate(event, target) {
    setCurrentPage(target)
    setSearchParams({ page: target })
  }

  //UI
  return (
    <div className="">
      <form
        className="items-center grid grid-cols-4 gap-4 bg-blue-100 p-4 rounded-lg mt-10"
        onSubmit={handleFilter}
      >
        <div className="flex flex-col gap-2">
          <label>Search product</label>
          <input
            type="text"
            value={filter.search}
            onChange={(e) =>
              setFilter({ ...filter, search: e.target.value })
            }
            className="border bg-white rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>Select Category</label>
          <select
            value={filter.category}
            onChange={(e) =>
              setFilter({ ...filter, category: e.target.value })
            }
            className="border bg-white rounded-md p-2"
          >
            <option value="all">all</option>
            <option value="tables">Tables</option>
            <option value="chairs">Chairs</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Select Company</label>
          <select
            value={filter.company}
            onChange={(e) =>
              setFilter({ ...filter, company: e.target.value })
            }
            className="border bg-white rounded-md p-2"
          >
            <option value="all">all</option>
            <option value="modenza">Modenza</option>
            <option value="luxora">Luxora</option>
            <option value="artifex">Artifex</option>
            <option value="comfora">Comfora</option>
            <option value="homestead">Homestead</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Sort by</label>
          <select
            value={filter.order}
            onChange={(e) =>
              setFilter({ ...filter, order: e.target.value })
            }
            className="border bg-white rounded-md p-2"
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Select Price</label>
          <input
            type="range"
            value={filter.price}
            onChange={(e) =>
              setFilter({ ...filter, price: e.target.value })
            }
            className="border bg-white rounded-md p-2"
            min={1}
            max={100000}
          />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <label>Free shipping</label>
          <input
            type="checkbox"
            checked={filter.shipping}
            onChange={(e) =>
              setFilter({ ...filter, shipping: e.target.checked })
            }
            className="border bg-white rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="border bg-blue-500 cursor-pointer text-white rounded-md p-1 font-bold"
          >
            Search
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="reset"
            className="border bg-purple-600 cursor-pointer text-white rounded-md p-1 font-bold"
            onClick={() =>
              setFilter({
                search: "",
                company: "all",
                category: "all",
                order: "a-z",
                price: 100000,
                shipping: false,
              })
            }
          >
            Reset
          </button>
        </div>
      </form>
      <div className="flex flex-wrap justify-between gap-y-7 mt-10">
        {loading && <p>Loading...</p>}
        {!loading &&
          products.length > 0 &&
          products.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        {!loading && products.length === 0 && (
          <p>Sorry, no products matched your search...</p>
        )}
      </div>
      <div className="flex justify-end my-10">
        <Pagination onChange={handlePaginate} page={currentPage} count={totalPage} variant="outlined" />
      </div>
    </div>
  );
}

export default Products;
