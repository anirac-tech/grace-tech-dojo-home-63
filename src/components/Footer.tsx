
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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-sm font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase transition-colors duration-300">
            EXCELLENT SOFTWARE · A DEVELOPER COMMUNITY FOR SKILL, CLARITY, AND PURPOSE.
          </p>
        </div>
        
        <Separator className="mb-8 dark:bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 dark:text-gray-300 hover:text-dojo-700 dark:hover:text-dojo-300 text-sm transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center">
            <a
              href="mailto:contact@gracetechdojo.org"
              className="text-dojo-700 dark:text-dojo-300 hover:text-dojo-800 dark:hover:text-dojo-200 text-sm font-medium transition-colors duration-300"
            >
              contact@gracetechdojo.org
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
            &copy; GraceTechDojo {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
