import Cart from "../assets/cart.svg?react";
import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  font-size: 16px;
  background-color: #2d2e3d;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #417785;
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const AddToCardButton = ({ children }) => {
  return (
    <Button>
      {children}
      <IconWrapper>
        <Cart width="16" height="16" />
      </IconWrapper>
    </Button>
  );
};

export default AddToCardButton;
