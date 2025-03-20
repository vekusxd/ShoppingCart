import { data } from "../data.js";

const productLoader = ({ params }) => {
  const { id } = params;
  const product = data.find((item) => item.id === +id);
  return { product };
};

export default productLoader;
