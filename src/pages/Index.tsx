
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <Navbar />
      <main>
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-900 to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOEg0djQ0aDJ2LTQyaDEyYzguMjg0IDAgMTUgNi43MTYgMTUgMTV2MTVoM3YyNmg0MFYyMEgzNnYtMnpNMzEgOFY0aC03djRoN000IDBIMUMuNDQ4IDAgMCAuNDQ4IDAgMXY1OGMwIC41NTIuNDQ4IDEgMSAxaDU4Yy41NTIgMCAxLS40NDggMS0xVjIwYzAtLjU1Mi0uNDQ4LTEtMS0xSDQwdi0zYzAtLjU1Mi0uNDQ4LTEtMS0xaC0ydi0xYzAtOC45NDQtNy4wNTYtMTYtMTYtMTZINHYyem0yOSAxOEgzLjk5MlYzSDIxYzkuMzk0IDAgMTcgNy42MDYgMTcgMTd2NmgtNXYyeiIgZmlsbD0iIzI5MzQzZTQwIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
          
          <div className="container mx-auto px-4 pb-20">
            <div className="relative z-10 grid grid-cols-10 gap-0">
              {/* Project section - on the left */}
              <div className="col-span-12 lg:col-span-2 lg:col-start-1 pt-10 md:pt-20">
                <div className="absolute -left-[10%] top-[20%] w-[200px] h-[200px] rounded-full bg-dojo-300/5 blur-3xl z-0" />
                <div className="relative z-10 mx-auto w-[90%]">
                  <ProjectsSection />
                </div>
              </div>
              
              {/* Hero in the middle */}
              <div className="col-span-12 lg:col-span-5 lg:col-start-3 lg:flex lg:justify-center pt-10">
                <div className="w-[90%] mx-auto">
                  <Hero />
                  
                  {/* Connect section between Projects and About */}
                  <div className="relative mt-6 w-[95%] mx-auto bg-dojo-900/90 backdrop-blur-xl py-8 px-6 rounded-2xl border-2 border-gray-700/40 shadow-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,120,180,0.15)_0,rgba(100,120,180,0)_70%)]" />
                    <ConnectSection />
                  </div>
                </div>
              </div>
              
              {/* About section - on the right */}
              <div className="col-span-12 lg:col-span-2 lg:col-start-8 pt-10 md:pt-20">
                <div className="mx-auto w-[90%] bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl shadow-xl">
                  <AboutSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
