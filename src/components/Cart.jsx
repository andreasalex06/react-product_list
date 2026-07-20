export function Cart({
  cart,
  onIncrease,
  onDecrease,
}) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg p-5 font-sans">
      
      <div className="flex justify-between items-center pb-4 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900">
          Ringkasan Belanja
        </h2>
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
        </span>
      </div>

      {cart.length === 0 && (
        <div className="text-center py-10">
          <p className="text-sm text-gray-400">Belum ada produk di keranjang.</p>
        </div>
      )}

      {/* Daftar Item Belanjaan */}
      <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-3.5 gap-4">
            
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-medium text-gray-800 truncate">
                {item.name}
              </h3>
              <p className="text-sm font-semibold text-gray-950 mt-0.5">
                Rp {item.price.toLocaleString("id-ID")}
              </p>
            </div>

            <div className="flex items-center border border-gray-300 rounded h-7 bg-white shrink-0 overflow-hidden">
              <button
                onClick={() => onDecrease(item.id)}
                className="w-7 h-full flex items-center justify-center text-gray-600 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors font-mono text-sm"
              >
                -
              </button>
              
              <span className="w-8 h-full flex items-center justify-center border-x border-gray-300 text-xs font-semibold text-gray-800 select-none">
                {item.quantity}
              </span>
              
              <button
                onClick={() => onIncrease(item.id)}
                className="w-7 h-full flex items-center justify-center text-gray-600 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-colors font-mono text-sm"
              >
                +
              </button>
            </div>

          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Harga</span>
            <span className="text-base font-bold text-gray-950">
              Rp {totalPrice.toLocaleString("id-ID")}
            </span>
          </div>
          
        </div>
      )}

    </div>
  );
}