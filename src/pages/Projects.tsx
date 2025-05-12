
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 transition-colors duration-300 relative" id="main-content">
        {/* Visible watermark */}
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-0 pointer-events-none">
          <div className="w-[1500px] h-[1500px] opacity-[0.12]">
            <img
              src="/lovable-uploads/0babf9a5-44a4-4c82-a1bd-f76047dec86c.png"
              alt=""
              className="w-full h-full filter contrast-200 brightness-75 saturate-50"
              aria-hidden="true"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-100 mb-6 text-center heading-reveal">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Explore the projects we're building to serve real needs and reflect our shared values.
          </p>
          <div className="max-w-4xl mx-auto">
            <ProjectsSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
