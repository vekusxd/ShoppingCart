import { data } from "../data.js";

const productsLoader = () => {
  const products = [...data];
  return { products };
};

export default productsLoader;
