import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SearchInput } from "./SearchInput";

export function Header({
  cart = [],
  search,
  onSearchChange,
  onSearchSubmit,
}) {
  const location = useLocation();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="shrink-0 text-xl font-bold tracking-tight text-gray-900 transition-opacity hover:opacity-80"
        >
          Store
        </Link>

        {/* Search */}
        <div className="mx-2 hidden max-w-md flex-1 sm:block sm:mx-4">

          <SearchInput
            value={search}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
          />

        </div>

        {/* Navigation */}
        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">

          <Button
            asChild
            variant={
              location.pathname === "/"
                ? "default"
                : "ghost"
            }
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link to="/">
              Home
            </Link>
          </Button>

          <Button
            asChild
            variant={
              location.pathname.startsWith("/products")
                ? "default"
                : "ghost"
            }
            size="sm"
          >
            <Link to="/products">
              Products
            </Link>
          </Button>

          <Button
            asChild
            variant={
              location.pathname === "/cart"
                ? "default"
                : "ghost"
            }
            size="sm"
          >
            <Link
              to="/cart"
              className="flex items-center gap-1.5"
            >
              <span>
                Cart
              </span>

              {totalItems > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  {totalItems > 99
                    ? "99+"
                    : totalItems}
                </span>
              )}

            </Link>
          </Button>

        </nav>

      </div>

      <div className="border-t border-gray-100 px-4 py-3 sm:hidden">

        <SearchInput
          value={search}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        />

      </div>

    </header>
  );
}