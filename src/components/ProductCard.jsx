import styled from "styled-components";
import Button from "./Button";
import Link from "./StyledLink";
import { useContext } from "react";
import CartContext from "../CartContext";
import PropTypes from "prop-types";
import CartIcon from "../components/CartIcon";

const ProductImg = styled.img`
  width: 150px;
`;

const ImageWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  backgroud-color: #ffffff;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 12px;
`;

const CardWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CardP = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const CardDesciption = styled.p`
  font-size: 1rem;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const CardSKU = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
`;

const AmountP = styled.p`
  text-transform: uppercase;
  margin-left: 1.5rem;
`;

const ProductCard = ({ title, price, sku, description, amount, img, id }) => {
  const { addItem } = useContext(CartContext);
  return (
    <CardWrapper>
      <Link to={`/product/${id}`}>
        <ImageWrapper>
          <ProductImg src={img} alt={title} />
        </ImageWrapper>
      </Link>
      <CardP>{title}</CardP>
      <CardP>$ {price}</CardP>
      <CardSKU>SKU# {sku}</CardSKU>
      <CardDesciption>{description}</CardDesciption>
      <Button icon={<CartIcon />} onClick={() => addItem(id)}>
        Add to cart
      </Button>
      <AmountP>
        In-stock: <span style={{ color: "#417785" }}>{amount}</span>
      </AmountP>
    </CardWrapper>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
