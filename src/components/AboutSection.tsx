
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="h-full">
      <div className="h-full">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-semibold text-white mb-3 relative inline-block">
            About Us
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-dojo-300"></span>
          </h2>
        </div>
        <div className="prose max-w-none text-gray-300 transition-colors duration-300 text-sm">
          <p className="mb-3 leading-relaxed">
            GraceTechDojo is a faith-driven developer community committed to growth
            in both craft and character.
          </p>
          <p className="mb-3 leading-relaxed">
            Our shared faith in Jesus grounds our work and inspires us to create
            tools that are purposeful and skillful.
          </p>
          <p className="font-medium text-dojo-300 text-sm">
            If our mission resonates with you, reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
