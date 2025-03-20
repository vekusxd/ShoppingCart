import { useParams } from "react-router";


const ProductDetail = () => {
  const { id } = useParams();
  return <h1>Item detail about {id}</h1>;
};

export default ProductDetail;
