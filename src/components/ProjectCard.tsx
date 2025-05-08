
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
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden group dark:bg-gray-800">
      <CardHeader className="pb-2 border-b border-gray-50 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-300">
        <CardTitle className="text-xl font-serif text-dojo-800 dark:text-dojo-300 transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col bg-white dark:bg-gray-800 p-6 transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow transition-colors duration-300">{description}</p>
        {url && (
          <div className="mt-auto pt-2">
            <Button 
              variant="link" 
              className="p-0 h-auto text-dojo-700 dark:text-dojo-300 hover:text-dojo-800 dark:hover:text-dojo-200 font-medium flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5 duration-300"
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
