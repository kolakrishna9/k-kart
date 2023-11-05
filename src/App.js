import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import ProductDetails from "./components/Products/ProductDetails";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProductsContextProvider from "./contexts/ProductsContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
        <Footer/>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
