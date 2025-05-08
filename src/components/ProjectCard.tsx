
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
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-100 overflow-hidden group">
      <CardHeader className="pb-2 border-b border-gray-50 bg-white">
        <CardTitle className="text-xl font-serif text-dojo-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col bg-white p-6">
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {url && (
          <div className="mt-auto pt-2">
            <Button 
              variant="link" 
              className="p-0 h-auto text-dojo-700 hover:text-dojo-800 font-medium flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5 duration-300"
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
