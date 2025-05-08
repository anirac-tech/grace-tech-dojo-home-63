
import { Separator } from "@/components/ui/separator";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Black Tax & White Benefits",
    description: "A mobile reading platform for reflective engagement with justice-oriented writing and teaching.",
    technologies: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "Gordon Ferguson Ministry",
    description: "Digital platform for ministry content, providing accessible spiritual resources and teaching materials.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Memverse",
    description: "Scripture memorization and review tool to help users retain and reflect on biblical passages.",
    technologies: ["React Native", "Express", "PostgreSQL"],
  },
  {
    title: "Journey Hub",
    description: "Guided challenge-based platform supporting individuals facing instability with personalized, local resource guidance.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-gray-50" id="projects">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6 text-center">
            Project Highlights
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
