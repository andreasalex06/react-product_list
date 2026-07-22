export function Cart({
  cart,
  onIncrease,
  onDecrease,
}) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-5">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Shopping Cart
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Review your selected products
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>

      </div>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <div className="py-16 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
            🛒
          </div>

          <h3 className="mt-5 text-lg font-semibold text-gray-900">
            Your cart is empty
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add some products to your cart.
          </p>

        </div>
      )}

      {/* Cart Items */}
      {cart.length > 0 && (
        <div className="divide-y divide-gray-100">

          {cart.map((item) => {

            const imageUrl = item.image
              ? `${import.meta.env.VITE_API_URL}/uploads/${item.image}`
              : "/placeholder.png";

            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
              >

                {/* Product Info */}
                <div className="flex min-w-0 items-center gap-4">

                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">

                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  <div className="min-w-0">

                    <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>

                  </div>

                </div>

                {/* Quantity + Subtotal */}
                <div className="flex items-center justify-between gap-4 sm:justify-end">

                  {/* Quantity Control */}
                  <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">

                    <button
                      onClick={() => onDecrease(item.id)}
                      className="flex h-9 w-9 items-center justify-center bg-gray-50 text-lg text-gray-700 transition hover:bg-gray-100"
                    >
                      −
                    </button>

                    <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold text-gray-900">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => onIncrease(item.id)}
                      className="flex h-9 w-9 items-center justify-center bg-gray-50 text-lg text-gray-700 transition hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>

                  {/* Subtotal */}
                  <p className="w-32 text-right text-sm font-bold text-gray-900">
                    Rp{" "}
                    {(item.price * item.quantity).toLocaleString("id-ID")}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      )}

      {/* Total */}
      {cart.length > 0 && (
        <div className="mt-5 border-t border-gray-200 pt-5">

          <div className="flex items-center justify-between">

            <span className="text-sm text-gray-500">
              Total
            </span>

            <span className="text-xl font-bold text-gray-900">
              Rp {totalPrice.toLocaleString("id-ID")}
            </span>

          </div>

        </div>
      )}

    </div>
  );
}