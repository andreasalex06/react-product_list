import { Cart } from "../components/Cart";

export function CartPage({
  cart,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="mx-auto max-w-3xl px-6 py-10">

        <Cart
          cart={cart}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />

      </div>

    </div>
  );
}