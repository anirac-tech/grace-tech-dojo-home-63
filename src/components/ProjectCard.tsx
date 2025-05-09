
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
    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-dojo-300/10 border border-gray-700/50 dark:border-gray-700 rounded-lg overflow-hidden group bg-gradient-to-b from-gray-800/80 to-gray-900/90 backdrop-blur-md">
      <CardHeader className="pb-2 border-b border-gray-700/40 bg-gradient-to-r from-dojo-900/50 to-dojo-800/30 transition-colors duration-300 group-hover:from-dojo-800/50 group-hover:to-dojo-700/30">
        <CardTitle className="text-lg font-serif text-dojo-300 transition-colors duration-300 flex items-center justify-between">
          <span>{title}</span>
          <div className="h-1.5 w-1.5 rounded-full bg-dojo-300/70 group-hover:bg-dojo-300 transition-all duration-300"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-3 transition-colors duration-300">
        <p className="text-xl text-gray-300 mb-2 leading-relaxed flex-grow transition-colors duration-300">{description}</p>
        {url && (
          <div className="mt-auto pt-1">
            <Button 
              variant="link" 
              className="p-0 h-auto text-dojo-300 hover:text-dojo-200 font-medium flex items-center gap-1 transition-colors text-sm group-hover:translate-x-1 duration-300"
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
