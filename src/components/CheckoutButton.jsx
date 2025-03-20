import Arrow from "../assets/arrowRight.svg?react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.3rem 1rem;
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

const CheckoutButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
      <IconWrapper>
        <Arrow width="16" height="16" />
      </IconWrapper>
    </Button>
  );
};

CheckoutButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CheckoutButton;