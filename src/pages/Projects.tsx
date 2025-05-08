
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center transition-colors duration-300">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto transition-colors duration-300">
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
