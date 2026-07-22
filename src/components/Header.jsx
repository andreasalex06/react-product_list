import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Header({ cart }) {
  const location = useLocation();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          to="/"
          className="text-xl font-bold text-gray-900"
        >
          Store
        </Link>

        <nav className="flex items-center gap-2">

          <Button
            asChild
            variant={
              location.pathname === "/"
                ? "default"
                : "ghost"
            }
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
          >
            <Link to="/cart">
              Cart ({totalItems})
            </Link>
          </Button>

        </nav>

      </div>
    </header>
  );
}