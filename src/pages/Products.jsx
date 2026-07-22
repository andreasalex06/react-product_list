import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export function Products({
  cart,
  onAdd,
  search,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const query = new URLSearchParams();

      if (search) {
        query.append("search", search);
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/products?${query.toString()}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const result = await response.json();

      setProducts(result.data);

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [search]);

  function isAdded(id) {
    return cart.some((item) => item.id === id);
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-8">

          <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
            Store Collection
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Products
          </h1>

          <p className="mt-3 max-w-2xl text-gray-500">
            Discover our collection of products.
          </p>

        </div>

        {loading && (
          <div className="py-20 text-center">
            <p className="text-gray-500">
              Loading products...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-red-600">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with another keyword.
            </p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdded={isAdded(product.id)}
                onAdd={onAdd}
              />
            ))}

          </div>
        )}

      </div>

    </main>
  );
}