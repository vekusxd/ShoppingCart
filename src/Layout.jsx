import { Outlet } from "react-router";
import Header from "./components/Header";
import styled from "styled-components";

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 1rem 2rem;
`;

const Layout = () => {
  return (
    <ColumnLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </ColumnLayout>
  );
};

export default Layout;
