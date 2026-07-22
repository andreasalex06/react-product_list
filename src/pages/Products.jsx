import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function Products({ cart, onAdd }) {
  function isAdded(id) {
    return cart.some((item) => item.id === id);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Explore Products
          </h1>
        </div>

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

      </div>
    </div>
  );
}