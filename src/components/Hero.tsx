
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 mb-6 leading-tight tracking-tight transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            excellent software crafted with purpose
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-600 mb-5 leading-relaxed tracking-wide transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            +
          </p>
          <p 
            className={`text-lg md:text-xl text-gray-600 mb-12 leading-relaxed tracking-wide transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            a community of faith-driven developers
          </p>
          
          <Button 
            onClick={scrollToProjects}
            className={`bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-2 transition-opacity duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            See our work <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
