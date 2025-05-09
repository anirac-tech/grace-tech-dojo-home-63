
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
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden group dark:bg-gray-800 hover:border-dojo-300 dark:hover:border-dojo-300">
      <CardHeader className="pb-3 border-b border-gray-100 dark:border-gray-700 bg-dojo-50 dark:bg-dojo-900/30 transition-colors duration-300">
        <CardTitle className="text-lg font-serif text-dojo-800 dark:text-dojo-300 transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col bg-white dark:bg-gray-800 p-6 transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow transition-colors duration-300">{description}</p>
        {url && (
          <div className="mt-auto pt-2">
            <Button 
              variant="link" 
              className="p-0 h-auto text-dojo-700 dark:text-dojo-300 hover:text-dojo-800 dark:hover:text-dojo-200 font-medium flex items-center gap-1.5 transition-colors text-sm"
              asChild
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {linkText} <ExternalLink size={12} />
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
