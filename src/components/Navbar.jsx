import { useState, useEffect } from "react";
import { ShoppingCart, Search, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

export function Navbar({ searchQuery, setSearchQuery }) {
  const { theme, setTheme } = useTheme();
  const { cartItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-white/75 backdrop-blur-sm shadow-sm" : "bg-white"
      )}
    >
      <div className="w-full px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center m-8">
              <span className="font-bold text-2xl text-primary">Rootz</span>
            </a>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Offers
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Store
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mr-4 justify-between w-3/5">
            <div className="relative w-[450px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for groceries.."
                className="h-10 rounded-xl border-primary/50 pl-10 text-gray-500 placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="text-white bg-primary hover:bg-primary/90"
              >
                {theme === "light" ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative text-white bg-primary hover:bg-primary/90"
              >
                <div className="p-1 rounded">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                {totalItems > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>

              <Button size="sm" className="rounded-md px-6">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
