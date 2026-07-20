import { useState } from "react";
import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop Gaming",
      price: 15000000,
      image:
        "https://i.pinimg.com/736x/db/1f/e2/db1fe2a55af18c48840879f755de0736.jpg",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 900000,
      image:
        "https://i.pinimg.com/1200x/59/3a/0b/593a0be5fb9de205222e19c51c85dfab.jpg",
    },
    {
      id: 3,
      name: "Mouse Logitech",
      price: 350000,
      image:
        "https://i.pinimg.com/236x/33/cb/6a/33cb6a117d731f55f4f975cecf2378b7.jpg",
    },
  ];

  const [cart, setCart] = useState([]);

  function handleAdd(product) {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function handleIncrease(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function handleDecrease(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function isAdded(id) {
    return cart.some((item) => item.id === id);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-7xl mx-auto">

        <Cart
          cart={cart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdded={isAdded(product.id)}
              onAdd={handleAdd}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;