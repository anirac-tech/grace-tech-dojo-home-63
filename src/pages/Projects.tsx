
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
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 transition-colors duration-300" id="main-content">
        <div className="container mx-auto px-4">
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
