export function ProductCard({ product, isAdded, onAdd }) {
  return (
    <div className="flex flex-col items-center p-5 rounded-xl bg-white shadow">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="mt-3 text-lg font-bold">
        {product.name}
      </h2>

      <p className="text-blue-600 font-bold">
        Rp {product.price.toLocaleString("id-ID")}
      </p>

      <button
        disabled={isAdded}
        onClick={() => onAdd(product)}
        className={`mt-4 w-full py-2 rounded-lg text-white transition
          ${
            isAdded
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>

    </div>
  );
}