import { Separator } from "@/components/ui/separator";
const AboutSection = () => {
  return <section id="about" className="h-full">
      <div className="h-full max-w-[80%] mx-auto">
        <div className="mb-6">
          <h2 className="heading-reveal heading-underline-left text-white mb-4">
            About Us
          </h2>
        </div>
        <div className="prose max-w-none text-gray-300 transition-colors duration-300">
          <p className="text-xl mb-4 leading-relaxed">
            GraceTechDojo is a faith-driven developer community committed to growth
            in both craft and character.
          </p>
          <p className="text-xl mb-4 leading-relaxed">
            Our shared faith in Jesus grounds our work and inspires us to create
            tools that are purposeful and skillful.
          </p>
          <p className="font-medium text-xl text-dojo-300">
            If our mission resonates with you, reach out.
          </p>
        </div>
      </div>
    </section>;
};
export default AboutSection;