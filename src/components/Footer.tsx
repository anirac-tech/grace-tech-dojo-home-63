
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "Community", path: "/community" },
    // Space for future Blog link
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-sm font-medium tracking-wider text-gray-500 uppercase">
            EXCELLENT SOFTWARE · A DEVELOPER COMMUNITY FOR SKILL, CLARITY, AND PURPOSE.
          </p>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-dojo-700 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center">
            <a
              href="mailto:contact@gracetechdojo.org"
              className="text-dojo-700 hover:text-dojo-800 text-sm font-medium"
            >
              contact@gracetechdojo.org
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; GraceTechDojo {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
