
import { useEffect, useState } from "react";

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
    <section className="pt-24 pb-16 md:pt-36 md:pb-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-3xl md:text-5xl font-serif font-semibold text-gray-900 mb-6 leading-tight tracking-tight transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            excellent software crafted with purpose
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-600 mb-5 leading-relaxed tracking-wide transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            +
          </p>
          <p 
            className={`text-lg md:text-xl text-gray-600 mb-10 leading-relaxed tracking-wide transition-opacity duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            a community of faith-driven developers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
