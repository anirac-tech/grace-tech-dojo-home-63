
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="h-full">
      <div className="h-full">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6 relative inline-block">
            About Us
            <span className="absolute -bottom-3 left-0 w-1/2 h-0.5 bg-dojo-300"></span>
          </h2>
        </div>
        <div className="prose max-w-none text-gray-300 transition-colors duration-300">
          <p className="mb-6 leading-relaxed">
            GraceTechDojo is a faith-driven developer community committed to growth
            in both craft and character. We support one another in developing
            industry-ready technical skills, strengthening professional
            collaboration, and pursuing leadership with integrity.
          </p>
          <p className="mb-6 leading-relaxed">
            Our shared faith in Jesus grounds our work and inspires us to create
            tools that are purposeful, skillful, and aligned with values that
            endure, with members of our community encouraging each other as we
            build.
          </p>
          <p className="font-medium text-dojo-300 text-lg">
            If our mission resonates with you, reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
