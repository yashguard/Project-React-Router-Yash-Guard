import React, { createContext, useState } from "react";

export let Auth = createContext();

const ContextApi = (props) => {
  let [product,setProduct] = useState([])
  const abcd = (val) => {
    setProduct(val)
  };

  return <Auth.Provider value={{ abcd, product }}>{props.children}</Auth.Provider>;
};

export default ContextApi;
