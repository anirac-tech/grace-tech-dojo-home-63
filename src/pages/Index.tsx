
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      
      <Navbar />
      
      <main id="main-content">
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-900 to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOEg0djQ0aDJ2LTQyaDEyYzguMjg0IDAgMTUgNi43MTYgMTUgMTV2MTVoM3YyNmg0MFYyMEgzNnYtMnpNMzEgOFY0aC03djRoN000IDBIMUMuNDQ4IDAgMCAuNDQ4IDAgMXY1OGMwIC41NTIuNDQ4IDEgMSAxaDU4Yy41NTIgMCAxLS40NDggMS0xVjIwYzAtLjU1Mi0uNDQ4LTEtMS0xSDQwdi0zYzAtLjU1Mi0uNDQ4LTEtMS0xaC0ydi0xYzAtOC45NDQtNy4wNTYtMTYtMTYtMTZINHYyem0yOSAxOEgzLjk5MlYzSDIxYzkuMzk0IDAgMTcgNy42MDYgMTcgMTd2NmgtNXYyeiIgZmlsbD0iIzI5MzQzZTQwIi8+PC9nPjwvc3ZnPg==')] opacity-5" aria-hidden="true" />
          
          <div className="absolute left-0 top-[10%] w-full h-[1px] bg-gradient-to-r from-transparent via-dojo-300/20 to-transparent" aria-hidden="true" />
          <div className="absolute right-0 top-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-dojo-300/10 to-transparent" aria-hidden="true" />
          
          <div className="container mx-auto px-4 pb-20">
            {/* Use a traditional 12-column grid with explicit display */}
            <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-6">
              {/* Project section - explicitly on the left with improved visibility */}
              <div className="col-span-12 lg:col-span-3 pt-10 md:pt-20">
                <div className="absolute -left-[10%] top-[20%] w-[200px] h-[200px] rounded-full bg-dojo-300/5 blur-3xl z-0" aria-hidden="true" />
                <div className="relative z-10 w-full backdrop-blur-sm p-4 border border-gray-700/30 rounded-2xl bg-gray-800/50 shadow-xl transform transition-all duration-300 hover:scale-[1.02] mx-[22px]">
                  <h2 className="heading-reveal heading-sidebar mb-4">Projects</h2>
                  <ProjectsSection />
                </div>
              </div>
              
              {/* Hero in the middle */}
              <div className="col-span-12 lg:col-span-6 pt-10">
                <div className="w-full mx-auto perspective-[1000px]">
                  <Hero />
                  
                  {/* Connect section */}
                  <ConnectSection />
                </div>
              </div>
              
              {/* About section - on the right */}
              <div className="col-span-12 lg:col-span-3 pt-10 md:pt-20">
                <div className="absolute -right-[5%] top-[40%] w-[150px] h-[150px] rounded-full bg-dojo-500/5 blur-2xl z-0" aria-hidden="true" />
                <div className="mx-auto w-[90%] bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
                  <AboutSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;
