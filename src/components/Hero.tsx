
import { useEffect, useState } from "react";
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

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-tight transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            excellent software crafted with purpose
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-5 leading-relaxed tracking-wide transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            +
          </p>
          <p 
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed tracking-wide transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            a community of faith-driven developers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
