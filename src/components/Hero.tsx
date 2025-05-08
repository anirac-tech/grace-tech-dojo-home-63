
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 mb-6 leading-tight">
            Excellent software by a community of faith-driven developers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Creating excellent tools — a community of builders that serve and
            continually grow in skill, craft, and purpose.
          </p>
          <Button
            onClick={handleScrollToProjects}
            className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
