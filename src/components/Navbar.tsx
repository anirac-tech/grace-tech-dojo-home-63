
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Team",
      path: "/team"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Community",
      path: "/community"
    }
    // Space for future Blog link
  ];

  return (
    <header className="relative z-20">
      {/* Watermark background logo - large, barely visible, embossed effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] opacity-[0.03] transform rotate-12">
          <img
            src="/lovable-uploads/0babf9a5-44a4-4c82-a1bd-f76047dec86c.png"
            alt=""
            className="w-full h-full filter contrast-125 brightness-150"
            aria-hidden="true"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-2 rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-dojo-500/10 to-dojo-300/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src="/lovable-uploads/0babf9a5-44a4-4c82-a1bd-f76047dec86c.png" 
                    alt="GraceTechDojo Logo" 
                    className="h-9 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
                    aria-hidden="true" 
                  />
                </div>
                <span className="text-xl md:text-2xl font-serif font-semibold text-white tracking-tight group-hover:text-dojo-300 transition-colors duration-300">
                  GraceTechDojo
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={cn("text-gray-300 hover:text-dojo-300 text-sm font-medium transition-colors duration-300 relative py-2", activeLink === link.path && "text-dojo-300")}>
                <span className="relative z-10">{link.name}</span>
                {activeLink === link.path && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dojo-300 -z-10"></span>}
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
    </header>
  );
};

export default Navbar;
