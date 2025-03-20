import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  color: #417785;
  font-size: 2rem;
`;

const Grid = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;
`;

const Index = () => {
  const {products} = useLoaderData();
  return (
    <Container>
      <Heading className="inter-black">Fruit</Heading>
      <SubTitle>Most Popular</SubTitle>
      <Grid>
        {products.map((e) => (
          <ProductCard key={e.id} {...e} />
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
