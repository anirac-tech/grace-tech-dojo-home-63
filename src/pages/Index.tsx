
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
        <Hero />
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-900 to-transparent" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOEg0djQ0aDJWNGgxMmM4LjI4NCAwIDE1IDYuNzE2IDE1IDE1djE1aDN2MjZoNDBWMjBIMzZ2LTJ6TTMxIDhWNGgtN3Y0aDdNNCAwSDFDLjQ0OCAwIDAgLjQ0OCAwIDF2NThjMCAuNTUyLjQ0OCAxIDEgMWg1OGMuNTUyIDAgMS0uNDQ4IDEtMVYyMGMwLS41NTItLjQ0OC0xLTEtMUg0MHYtM2MwLS41NTItLjQ0OC0xLTEtMWgtMnYtMWMwLTguOTQ0LTcuMDU2LTE2LTE2LTE2SDR2MnptMjkgMThIMy45OTJWM0gyMWM5LjM5NCAwIDE3IDcuNjA2IDE3IDE3djZoLTV2MnoiIGZpbGw9IiMyOTM0M2U0MCIvPjwvZz48L3N2Zz4=')] opacity-5" />
          
          <div className="container mx-auto">
            {/* Projects and About section with dramatic asymmetrical layout */}
            <div className="relative pt-20 pb-40">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
                {/* Project section - spans more columns for prominence */}
                <div className="xl:col-span-8 xl:col-start-1 relative">
                  <div className="absolute -left-[10%] top-[20%] w-[300px] h-[300px] rounded-full bg-dojo-300/5 blur-3xl z-0" />
                  <div className="relative z-10">
                    <ProjectsSection />
                  </div>
                </div>
                
                {/* About section - floats on the right */}
                <div className="xl:col-span-4 xl:col-start-9">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 p-8 rounded-2xl shadow-xl">
                    <AboutSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connect section with full bleed design */}
          <div className="relative bg-dojo-900/80 backdrop-blur-md py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(100,120,180,0.1)_0,rgba(100,120,180,0)_60%)]" />
            <ConnectSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
