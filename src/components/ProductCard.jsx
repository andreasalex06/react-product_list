import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ProductCard({ product, isAdded, onAdd }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <Link
        to={`/products/${product.id}`}
        className="block overflow-hidden bg-gray-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">

        <Link to={`/products/${product.id}`}>
          <h2 className="line-clamp-2 min-h-14 text-lg font-semibold leading-7 text-gray-900 transition-colors hover:text-blue-600">
            {product.name}
          </h2>
        </Link>

        <p className="mt-3 text-xl font-bold text-blue-600">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        <div className="mt-auto flex gap-3 pt-6">

          <Button
            disabled={isAdded}
            onClick={() => onAdd(product)}
            className="flex-1"
          >
            {isAdded ? "Added" : "Add to Cart"}
          </Button>

          <Button
            asChild
            variant="outline"
          >
            <Link to={`/products/${product.id}`}>
              Details
            </Link>
          </Button>

        </div>

      </div>

    </div>
  );
}