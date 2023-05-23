import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import SingleProducts from "./SingleProducts";
import StarRegular from "./StarRegular";
import StarSolid from "./StarSolid";

const Products = () => {
  let [state, setState] = useState([]);
  useEffect(() => {
    arrayApi();
  }, []);

  const arrayApi = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=51`);
    let res = await req.json();
    setState(res.products);
  };
  return (
    <section className="product-section">
      <Nav />
      <div className="container row justify-content-between">
        <div className="product-selection">
          <div className="row align-items-center">
            <input type="search" className="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul>
            <h2>category</h2>
            <li>electronics</li>
            <li>mens</li>
            <li>womens</li>
            <li>kids</li>
            <li>laptop</li>
            <li>shirt</li>
          </ul>
          <ul>
            <h2>customer review</h2>
            <li className="row"><StarRegular/><StarSolid/></li>
            <li>mens</li>
            <li>womens</li>
            <li>kids</li>
            <li>laptop</li>
            <li>shirt</li>
          </ul>
        </div>
        <div className=" product">
          {state.map((v, i) => (
            <Link to={`/ProductDetails/${v.id}`} key={i}>
              <SingleProducts {...v} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
