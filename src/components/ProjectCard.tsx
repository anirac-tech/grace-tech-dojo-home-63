
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  linkText?: string;
}

const ProjectCard = ({ title, description, url, linkText = "View Project" }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md border border-gray-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-serif text-dojo-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {url && (
          <div className="mt-auto pt-2 border-t border-gray-100">
            <Button 
              variant="link" 
              className="p-0 h-auto text-dojo-700 hover:text-dojo-800 font-medium flex items-center gap-1.5 transition-colors"
              asChild
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {linkText} <ExternalLink size={14} />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
