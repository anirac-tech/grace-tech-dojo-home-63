
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
    <section id="projects">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 relative inline-block" style={{transform: "perspective(1000px) rotateX(0deg)"}}>
          Project Highlights
          <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-dojo-300"></span>
        </h2>
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className={`transform transition-all duration-500 hover:translate-x-1`}
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
      
      {/* View All link removed as requested */}
    </section>
  );
};

export default ProjectsSection;
