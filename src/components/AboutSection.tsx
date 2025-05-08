
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white" id="about">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6 text-center">
            About Us
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 leading-relaxed text-center">
              GraceTechDojo is a faith-driven developer community committed to growth
              in both craft and character. We support one another in developing
              industry-ready technical skills, strengthening professional
              collaboration, and pursuing leadership with integrity.
            </p>
            <p className="mb-6 leading-relaxed text-center">
              Our shared faith in Jesus grounds our work and inspires us to create
              tools that are purposeful, skillful, and aligned with values that
              endure, with members of our community encouraging each other as we
              build.
            </p>
            <p className="text-center font-medium mb-10">
              If our mission resonates with you, reach out.
            </p>
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={handleScrollToProjects}
              className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]"
            >
              Explore Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
