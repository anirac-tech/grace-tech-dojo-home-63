
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Set active link based on current path
    setActiveLink(window.location.pathname);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Team",
    path: "/team"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Community",
    path: "/community"
  }
  // Space for future Blog link
  ];

  return <header className={cn("fixed w-full top-0 left-0 z-50 transition-all duration-500", isScrolled ? "backdrop-blur-xl bg-gray-900/90 shadow-lg shadow-black/10 py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-serif font-semibold text-white px-0">
                GraceTechDojo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={cn("text-gray-300 hover:text-dojo-300 text-sm font-medium transition-colors duration-300 relative py-2", activeLink === link.path && "text-dojo-300")}>
                {link.name}
                {activeLink === link.path && <span className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-dojo-300 transform origin-left"></span>}
              </Link>)}
            <Button asChild variant="outline" className="ml-4 border-dojo-500 text-dojo-300 hover:bg-dojo-900/50 hover:border-dojo-400 group relative overflow-hidden">
              <Link to="/contact">
                <span className="absolute inset-0 w-0 bg-dojo-300/20 group-hover:w-full transition-all duration-300 ease-out"></span>
                <span className="relative z-10">Contact Us</span>
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-dojo-300 rounded-md" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-300">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden absolute left-0 right-0 bg-gray-900/95 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden border-t border-gray-800", mobileMenuOpen ? "max-h-80" : "max-h-0")} aria-hidden={!mobileMenuOpen}>
          <div className="px-4 py-2">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={cn("block py-3 border-b border-gray-800 transition-all duration-300", activeLink === link.path ? "text-dojo-300 border-dojo-300/30" : "text-gray-300 hover:text-dojo-300")} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>)}
            <div className="py-3 flex justify-between items-center">
              <Button asChild variant="outline" className="w-full border-dojo-500 text-dojo-300 hover:bg-dojo-900/50 hover:border-dojo-400">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>;
};

export default Navbar;
