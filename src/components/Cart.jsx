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
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between border-b border-gray-100 pb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Shopping Cart
          </h2>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
          {totalItems} item
        </span>
      </div>

      {cart.length === 0 && (
        <div className="py-16 text-center">

          <h3 className="text-lg font-semibold text-gray-900">
            Your cart is empty
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add some products to your cart.
          </p>
        </div>
      )}

      {cart.length > 0 && (
        <div className="divide-y divide-gray-100">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
            >

              <div className="flex min-w-0 items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>

              </div>

              <div className="flex items-center justify-between gap-4 sm:justify-end">

                <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">

                  <button
                    onClick={() => onDecrease(item.id)}
                    className="flex h-9 w-9 items-center justify-center bg-gray-50 text-gray-700 transition hover:bg-gray-100"
                  >
                    -
                  </button>

                  <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-semibold text-gray-900">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => onIncrease(item.id)}
                    className="flex h-9 w-9 items-center justify-center bg-gray-50 text-gray-700 transition hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>

                <p className="w-32 text-right text-sm font-bold text-gray-900">
                  Rp{" "}
                  {(item.price * item.quantity).toLocaleString("id-ID")}
                </p>

              </div>

            </div>
          ))}

        </div>
      )}

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

          <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Checkout ({totalItems})
          </button>

        </div>
      )}

    </div>
  );
}