
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300">
          <div className="container mx-auto px-8 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
                <ProjectsSection />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
                <AboutSection />
              </div>
            </div>
          </div>
        </div>
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
