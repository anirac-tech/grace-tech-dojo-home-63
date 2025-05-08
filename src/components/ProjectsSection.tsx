
import { Separator } from "@/components/ui/separator";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Black Tax & White Benefits",
    description: "A mobile reading platform for reflective engagement with justice-oriented writing and teaching.",
    url: "https://apps.apple.com/us/app/black-tax-white-benefits/id1572458193",
    linkText: "iOS App Store"
  },
  {
    title: "Gordon Ferguson Ministry",
    description: "Digital platform for ministry content, providing accessible spiritual resources and teaching materials.",
    url: "https://gordonferguson.org",
    linkText: "Visit Website"
  },
  {
    title: "Memverse",
    description: "Scripture memorization and review tool to help users retain and reflect on biblical passages.",
    url: "#",
    linkText: "In Development"
  },
  {
    title: "Journey Hub",
    description: "Guided challenge-based platform supporting individuals facing instability with personalized, local resource guidance.",
    url: "#",
    linkText: "In Development"
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-8 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Project Highlights
            </h2>
            <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              We build software solutions that serve real needs while reflecting our shared values.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                url={project.url}
                linkText={project.linkText}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
