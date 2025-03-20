import styled from "styled-components";
import CartContext from "../CartContext";
import { useContext } from "react";
import Plus from "../assets/plus.svg?react";
import Minus from "../assets/minus.svg?react";
import CheckoutButton from "../components/CheckoutButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Heading = styled.h1`
  color: #417785;
  font-size: 2.5rem;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`;

const StyledHr = styled.hr`
  border: none;
  border-bottom: 1px solid #417785;
  width: 100%;
  padding: 0;
`;

const TableHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
`;

const ItemImg = styled.img`
  width: 50px;
`;

const Quantity = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 4px;
  box-shadow: -1px -1px 16px -12px rgba(66, 68, 90, 1);
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MinusButton = styled(Minus)`
  cursor: pointer;
`;

const PlusButton = styled(Plus)`
  cursor: pointer;
`;

const TotalContainer = styled.div`
  margin-top: 0.6rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap; 0.5rem;
  margin-right: 15%;
  font-size: 1.2rem;
  font-weight: 900;
`;

const Cart = () => {
  const { items, incrementQuanity, decrementQuanity } = useContext(CartContext);
  return (
    <Container>
      <Heading>Shopping Cart</Heading>
      <TableRow>
        <TableHeading style={{ gridColumn: 2 }}>Item</TableHeading>
        <TableHeading>Price</TableHeading>
        <TableHeading>Quanity</TableHeading>
        <TableHeading>Subtotal</TableHeading>
      </TableRow>
      <StyledHr />
      <ItemsContainer>
        {items.map((i) => {
          return (
            <TableRow key={i.id}>
              <ImgWrapper>
                <ItemImg src={i.img} alt={i.title} />
              </ImgWrapper>
              <ItemContainer>
                <p>{i.title}</p>
                <p>SKU# {i.sku}</p>
              </ItemContainer>
              <p>$ {i.price}</p>
              <ItemContainer>
                <Quantity>
                  <MinusButton
                    onClick={() => {
                      decrementQuanity(i.id);
                    }}
                  />
                  <p>{i.quantity}</p>
                  <PlusButton onClick={() => incrementQuanity(i.id)} />
                </Quantity>
                <p>
                  IN-STOCK: <span style={{ color: "#417785" }}>{i.amount}</span>{" "}
                </p>
              </ItemContainer>
              <p>$ {(i.price * i.quantity).toFixed(2)}</p>
            </TableRow>
          );
        })}
      </ItemsContainer>
      <TotalContainer>
        <p>
          Order Subtotal: $
          {items
            .reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
            .toFixed(2)}
        </p>
        <p>Sales tax: $0</p>
        <p>Shipping: $0</p>
        <p style={{ marginBottom: "1.5rem" }}>
          Order Total: ${" "}
          {items
            .reduce((prev, cur) => prev + cur.price * cur.quantity, 0)
            .toFixed(2)}
        </p>
        <CheckoutButton>CHECKOUT</CheckoutButton>
      </TotalContainer>
    </Container>
  );
};

export default Cart;
