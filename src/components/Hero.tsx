
import { useEffect, useState } from "react";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Track mouse position for subtle parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate subtle transform based on mouse position
  const dynamicTransform = {
    transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * -2}deg)`
  };
  return <section className="flex items-center pt-20 pb-12 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-dojo-950 via-dojo-900 to-dojo-800 z-0" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_70%)]" aria-hidden="true" />
      
      {/* 3D effect decorative elements */}
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-dojo-300/10 backdrop-blur-3xl bg-dojo-300/5 z-0 transition-transform duration-200 ease-out" style={{
      transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
    }} aria-hidden="true" />
      
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full border border-dojo-500/5 backdrop-blur-xl bg-dojo-500/5 z-0 transition-transform duration-300 ease-out" style={{
      transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
    }} aria-hidden="true" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div style={dynamicTransform} className="transition-transform duration-200 ease-out max-w-3xl mx-auto">
          <h1 id="hero-heading" className={`text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-white mb-8 leading-tight tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-dojo-300 relative inline-block">
              GraceTech Dojo
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-dojo-300/30 transform scale-x-100 origin-left transition-transform"></span>
            </span> software crafted with purpose
          </h1>
          
          <div className={`w-1/3 h-0.5 bg-dojo-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 w-1/3' : 'opacity-0 w-0'}`} aria-hidden="true" />
          
          <p className={`text-lg md:text-xl text-gray-300 mb-2 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            a community of faith-driven developers
          </p>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-0" aria-hidden="true" />
    </section>;
};
export default Hero;
