import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Index from "./pages/Index";
import Cart from "./pages/Cart";
import Layout from "./Layout";
import ProductDetail from "./pages/ProductDetail";
import productLoader from "./loaders/productLoader";
import productsLoader from "./loaders/productsLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Index />} loader={productsLoader} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/product/:id"
        element={<ProductDetail />}
        loader={productLoader}
      />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
