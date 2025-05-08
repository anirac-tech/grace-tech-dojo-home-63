
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="h-full">
      <div className="h-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
            About Us
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-4" />
        </div>
        <div className="prose max-w-none text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <p className="mb-4 leading-relaxed text-center">
            GraceTechDojo is a faith-driven developer community committed to growth
            in both craft and character. We support one another in developing
            industry-ready technical skills, strengthening professional
            collaboration, and pursuing leadership with integrity.
          </p>
          <p className="mb-4 leading-relaxed text-center">
            Our shared faith in Jesus grounds our work and inspires us to create
            tools that are purposeful, skillful, and aligned with values that
            endure, with members of our community encouraging each other as we
            build.
          </p>
          <p className="text-center font-medium text-dojo-700 dark:text-dojo-300">
            If our mission resonates with you, reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
