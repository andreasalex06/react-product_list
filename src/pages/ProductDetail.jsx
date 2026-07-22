import { Link, useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

export function ProductDetail({ cart, onAdd }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Product Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Produk yang kamu cari tidak ditemukan.
          </p>

          <Button
            asChild
            className="mt-6"
          >
            <Link to="/products">
              Back to Products
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  const isAdded = cart.some(
    (item) => item.id === product.id
  );

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/products"
            className="hover:text-blue-600"
          >
            Products
          </Link>

          <span>/</span>

          <span className="font-medium text-gray-900">
            {product.name}
          </span>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">

          <div className="flex min-h-[400px] items-center justify-center bg-gray-100 p-6 sm:p-10">

            <img
              src={product.image}
              alt={product.name}
              className="max-h-[500px] w-full rounded-xl object-cover"
            />

          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">

            <p className="text-sm font-medium uppercase tracking-wider text-blue-600">
              Product Details
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold text-blue-600">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <div className="my-8 h-px bg-gray-200" />

            <p className="leading-7 text-gray-600">
              This is a high-quality product available at AndreStore.
              Discover the best products with competitive prices and
              excellent quality.
            </p>

            <div className="mt-6 rounded-lg bg-gray-50 p-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Product ID
                </span>

                <span className="font-medium text-gray-900">
                  #{product.id}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Button
                size="lg"
                disabled={isAdded}
                onClick={() => onAdd(product)}
                className="flex-1"
              >
                {isAdded
                  ? "Added to Cart"
                  : "Add to Cart"}
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link to="/products">
                  Back to Products
                </Link>
              </Button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}