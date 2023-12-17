import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
function RootProduct() {
  const [products, setProducts] = useState([]);
  let [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  if (!products) {
    return <div>Loading...</div>; // Add a loading indicator
  }
  return (
    <div className="pt-5 text-center">
      <input
        type="search"
        id="search"
        placeholder="Search by product title"
        className="p-2 w-50 mb-5 rounded-4 mx-auto"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="d-flex container-fluid justify-content-around">
        <div class="row row-cols-2  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 ">
          {products
            .filter((p) => p.title.toLowerCase().includes(searchValue))
            .map((product, index) => (
              <Product key={index} proObj={product} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default RootProduct;
