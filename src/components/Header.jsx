import CartImg from "../assets/cart.svg";
import IconImg from "../assets/icon.svg";
import LeftArrowImg from "../assets/arrowLeft.svg";
import styled from "styled-components";
import Link from "../components/StyledLink";
import { useContext } from "react";
import CartContext from "../CartContext";

const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.header`
  background-color: #2d2e3d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const LeftWrapper = styled(AlignCenter)`
  color: white;
  gap: 3rem;
`;

const NavWrapper = styled(AlignCenter)`
  gap: 0.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
`;

const Header = () => {
  const { items } = useContext(CartContext);
  return (
    <StyledHeader>
      <LeftWrapper>
        <NavLink to={"/"}>
          <img src={IconImg} alt="icon" />
          <p style={{ fontSize: "1.5rem" }}>Marktetplace</p>
        </NavLink>
        <AlignCenter>
          <img src={LeftArrowImg} alt="leftArrow" />
          <p>FRUIT</p>
        </AlignCenter>
      </LeftWrapper>
      <NavLink to={"/cart"}>
        <img src={CartImg} alt="cart" />
        <p style={{ color: "white", fontSize: "1rem" }}>CART: </p>
        <p style={{ color: "#85ccda" }}>
          {items.reduce((acc, item) => acc + item.quantity, 0)}
        </p>
      </NavLink>
    </StyledHeader>
  );
};

export default Header;
