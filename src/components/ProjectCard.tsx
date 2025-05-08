
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
}

const ProjectCard = ({ title, description, technologies = [] }: ProjectCardProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-md border border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-serif text-dojo-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-dojo-50 text-dojo-700 hover:bg-dojo-100 border-dojo-200">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
