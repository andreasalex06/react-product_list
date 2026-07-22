import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ProductDetail({ cart, onAdd }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const result = await response.json();

        setProduct(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <p className="text-gray-500">
          Loading product...
        </p>
      </main>
    );
  }

  if (error || !product) {
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

  const imageUrl = product.image
    ? `${import.meta.env.VITE_API_URL}/uploads/${product.image}`
    : "/placeholder.png";

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">

          <Link
            to="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            to="/products"
            className="transition hover:text-blue-600"
          >
            Products
          </Link>

          <span>/</span>

          <span className="font-medium text-gray-900">
            {product.name}
          </span>

        </div>

        {/* Product Detail */}
        <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-2">

          {/* Product Image */}
          <div className="flex min-h-[400px] items-center justify-center bg-gray-100 p-6 sm:p-10">

            <img
              src={imageUrl}
              alt={product.name}
              className="max-h-[500px] w-full rounded-xl object-contain"
            />

          </div>

          {/* Product Information */}
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

            {/* Description */}
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Description
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {product.description ||
                  "No description available for this product."}
              </p>
            </div>

            {/* Product Information */}
            <div className="mt-6 space-y-3 rounded-lg bg-gray-50 p-4">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Product ID
                </span>

                <span className="font-medium text-gray-900">
                  #{product.id}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Stock
                </span>

                <span className="font-medium text-gray-900">
                  {product.stock} items
                </span>
              </div>

            </div>

            {/* Actions */}
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