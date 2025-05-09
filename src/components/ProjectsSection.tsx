
import { Separator } from "@/components/ui/separator";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
    <section id="projects">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6 relative inline-block">
          Project Highlights
          <span className="absolute -bottom-3 left-0 w-2/3 h-0.5 bg-dojo-300"></span>
        </h2>
      </div>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`transform transition-all duration-500 hover:translate-x-2`}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              url={project.url}
              linkText={project.linkText}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-right">
        <Button asChild variant="link" className="text-dojo-300 hover:text-dojo-200 font-medium flex items-center gap-1.5 transition-all duration-300 group">
          <Link to="/projects">
            View all projects <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
