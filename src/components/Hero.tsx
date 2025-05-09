
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
    <section className="flex items-center pt-20 pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-dojo-950 via-dojo-900 to-dojo-800 z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_70%)]" />
      
      {/* Large decorative circle */}
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-dojo-300/10 backdrop-blur-3xl bg-dojo-300/5 z-0" />
      
      <div className="relative z-10 mx-auto">
        <div>
          <h1 
            className={`text-5xl sm:text-6xl md:text-7xl font-serif font-semibold text-white mb-8 leading-tight tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-dojo-300">excellent</span> software crafted with purpose
          </h1>
          <div 
            className={`w-1/3 h-0.5 bg-dojo-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 w-1/3' : 'opacity-0 w-0'}`}
          />
          <p 
            className={`text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            a community of faith-driven developers
          </p>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-0" />
    </section>
  );
};

export default Hero;
