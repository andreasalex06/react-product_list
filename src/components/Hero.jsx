export function Hero() {
  return (
    <section className="overflow-hidden bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">

        <div className="max-w-2xl">

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find Your
            <span className="block text-blue-400">
              Favorite Products
            </span>
          </h1>

        </div>

        <div className="relative">

          <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
            alt="Laptop"
            className="relative w-full rounded-2xl object-cover shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}