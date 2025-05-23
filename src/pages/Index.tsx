
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-dojo-950/90 to-dojo-900/90 text-white relative overflow-hidden">
      {/* Large watermarked logo in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] transform rotate-12">
          <img
            src="/lovable-uploads/0babf9a5-44a4-4c82-a1bd-f76047dec86c.png"
            alt=""
            className="w-full h-full filter contrast-125 brightness-150"
            aria-hidden="true"
          />
        </div>
      </div>
      
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      
      <Navbar />
      
      <main id="main-content">
        <div className="relative">
          {/* Background decorative elements with updated colors */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-dojo-900/80 to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOEg0djQ0aDJ2LTQyaDEyYzguMjg0IDAgMTUgNi43MTYgMTUgMTV2MTVoM3YyNmg0MFYyMEgzNnYtMnpNMzEgOFY0aC03djRoN000IDBIMUMuNDQ4IDAgMCAuNDQ4IDAgMXY1OGMwIC41NTIuNDQ4IDEgMSAxaDU4Yy41NTIgMCAxLS40NDggMS0xVjIwYzAtLjU1Mi0uNDQ4LTEtMS0xSDQwdi0zYzAtLjU1Mi0uNDQ4LTEtMS0xaC0ydi0xYzAtOC45NDQtNy4wNTYtMTYtMTYtMTZINHYyem0yOSAxOEgzLjk5MlYzSDIxYzkuMzk0IDAgMTcgNy42MDYgMTcgMTd2NmgtNXYyeiIgZmlsbD0iIzI5MzQzZTQwIi8+PC9nPjwvc3ZnPg==')] opacity-5" aria-hidden="true" />
          
          {/* Updated gradient lines with new colors */}
          <div className="absolute left-0 top-[10%] w-full h-[1px] bg-gradient-to-r from-transparent via-grace-400/80 to-transparent" aria-hidden="true" />
          <div className="absolute right-0 top-[30%] w-full h-[1px] bg-gradient-to-r from-transparent via-tech-500/60 to-transparent" aria-hidden="true" />
          
          {/* Highly visible watermark positioned directly behind content */}
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-0 pointer-events-none opacity-60">
            <div className="w-[1500px] h-[1500px] opacity-[0.082]">
              <img
                src="/lovable-uploads/0babf9a5-44a4-4c82-a1bd-f76047dec86c.png"
                alt=""
                className="w-full h-full filter contrast-200 brightness-75 saturate-50"
                aria-hidden="true"
              />
            </div>
          </div>
          
          <div className="container mx-auto px-4 pb-20">
            {/* Use a traditional 12-column grid with explicit display */}
            <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-6">
              {/* Project section - explicitly on the left with improved visibility and updated colors */}
              <div className="col-span-12 lg:col-span-3 pt-10 md:pt-20">
                <div className="absolute -left-[10%] top-[20%] w-[200px] h-[200px] rounded-full bg-tech-500/30 blur-3xl z-0" aria-hidden="true" />
                <div className="relative z-10 w-full backdrop-blur-sm p-4 border border-dojo-700/70 rounded-2xl bg-dojo-900/60 shadow-xl transform transition-all duration-300 hover:scale-[1.02] mx-[22px]">
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
              
              {/* About section - on the right with updated colors */}
              <div className="col-span-12 lg:col-span-3 pt-10 md:pt-20">
                <div className="absolute -right-[5%] top-[40%] w-[150px] h-[150px] rounded-full bg-grace-500/30 blur-2xl z-0" aria-hidden="true" />
                <div className="mx-auto w-[90%] bg-dojo-900/60 backdrop-blur-sm border border-dojo-700/70 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
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
