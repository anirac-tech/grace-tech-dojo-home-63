
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
        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16 md:py-24">
          <div className="container mx-auto px-8 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                <ProjectsSection />
              </div>
              <div className="">
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
