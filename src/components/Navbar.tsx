
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/community" },
    // Space for future Blog link
  ];

  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white bg-opacity-95 shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-serif font-semibold text-gray-900">
              GraceTechDojo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-dojo-700 text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="ml-4 border-dojo-500 text-dojo-700 hover:bg-dojo-50"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-700"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-60" : "max-h-0"
          )}
        >
          <div className="px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 text-gray-700 hover:text-dojo-700 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-3">
              <Button
                asChild
                variant="outline"
                className="w-full border-dojo-500 text-dojo-700 hover:bg-dojo-50"
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
