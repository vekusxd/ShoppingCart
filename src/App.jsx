import { Routes, Route } from "react-router";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
