import { useLoaderData } from "react-router";
import styled from "styled-components";
import AddToCardButton from "../components/AddToCardButton";

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  margin-left: 2rem;
`;

const CardSKU = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
`;

const AmountP = styled.p`
  text-transform: uppercase;
  margin-left: 1.5rem;
`;

const CardP = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const CardDesciption = styled.p`
  font-size: 1rem;
`;

const ProductDetail = () => {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <Wrapper>
      <img src={product.img} alt={product.title} />
      <Content>
        <CardP>{product.title}</CardP>
        <CardP>$ {product.price}</CardP>
        <CardSKU>SKU# {product.sku}</CardSKU>
        <CardDesciption>{product.description}</CardDesciption>
        <AddToCardButton>Add to cart</AddToCardButton>
        <AmountP>
          In-stock: <span style={{ color: "#417785" }}>{product.amount}</span>
        </AmountP>
      </Content>
    </Wrapper>
  );
};

export default ProductDetail;
