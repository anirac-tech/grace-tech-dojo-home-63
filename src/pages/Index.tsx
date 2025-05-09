
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
          
          <div className="container mx-auto px-6 md:px-8 lg:px-12 pb-20">
            <div className="relative z-10 grid grid-cols-12 gap-8">
              {/* Project section - on the left */}
              <div className="col-span-12 lg:col-span-2 lg:col-start-2 pt-10 md:pt-20">
                <div className="absolute -left-[10%] top-[20%] w-[200px] h-[200px] rounded-full bg-dojo-300/5 blur-3xl z-0" />
                <div className="relative z-10">
                  <ProjectsSection />
                </div>
              </div>
              
              {/* Hero in the middle */}
              <div className="col-span-12 lg:col-span-6 lg:col-start-4">
                <Hero />
                
                {/* Connect section moved here - between Projects and About */}
                <div className="relative mt-6 bg-dojo-900/80 backdrop-blur-md py-8 rounded-2xl border border-gray-700/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,120,180,0.1)_0,rgba(100,120,180,0)_60%)]" />
                  <ConnectSection />
                </div>
              </div>
              
              {/* About section - on the right */}
              <div className="col-span-12 lg:col-span-2 lg:col-start-10 pt-10 md:pt-20">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl shadow-xl">
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
