import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductDetail } from "@/pages/ProductDetail";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { CartPage } from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const [search, setSearch] = useState("");

  function handleAdd(product) {
    setCart((prevCart) => {
      const exist = prevCart.find(
        (item) => item.id === product.id
      );

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function handleIncrease(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function handleDecrease(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <Header
        cart={cart}
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => {
          console.log("Search:", search);
        }}
      />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              onAdd={handleAdd}
              search={search}
            />
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          }
        />

        {/* Product Detail */}
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              cart={cart}
              onAdd={handleAdd}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;