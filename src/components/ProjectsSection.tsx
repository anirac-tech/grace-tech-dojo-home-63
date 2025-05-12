import ProjectCard from "./ProjectCard";
const projects = [{
  title: "Black Tax & White Benefits",
  description: "A mobile reading platform for reflective engagement with justice-oriented writing and teaching.",
  url: "https://apps.apple.com/us/app/black-tax-white-benefits/id1572458193",
  linkText: "iOS App Store"
}, {
  title: "Gordon Ferguson Ministry",
  description: "Digital platform for ministry content, providing accessible spiritual resources and teaching materials.",
  url: "https://gordonferguson.org",
  linkText: "Visit Website"
}, {
  title: "Memverse",
  description: "Scripture memorization and review tool to help users retain and reflect on biblical passages.",
  url: "#",
  linkText: "In Development"
}, {
  title: "Journey Hub",
  description: "Guided challenge-based platform supporting individuals facing instability with personalized, local resource guidance.",
  url: "#",
  linkText: "In Development"
}];
const ProjectsSection = () => {
  return <section id="projects" className="w-full">
      <div className="space-y-4">
        {projects.map((project, index) => <div key={project.title} className="transform transition-all duration-300 hover:translate-x-1">
            <ProjectCard title={project.title} description={project.description} url={project.url} linkText={project.linkText} />
          </div>)}
      </div>
    </section>;
};
export default ProjectsSection;