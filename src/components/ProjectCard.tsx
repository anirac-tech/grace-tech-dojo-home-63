import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  linkText?: string;
}
const ProjectCard = ({
  title,
  description,
  url,
  linkText = "View Project"
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-dojo-300/10 border border-gray-700/50 dark:border-gray-700 rounded-lg overflow-hidden group bg-gradient-to-b from-gray-800/80 to-gray-900/90 backdrop-blur-md transform-gpu" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)'
  }}>
      <CardHeader className="pb-2 border-b border-gray-700/40 bg-gradient-to-r from-dojo-900/50 to-dojo-800/30 transition-colors duration-300 group-hover:from-dojo-800/50 group-hover:to-dojo-700/30 p-3">
        <CardTitle className="text-lg font-serif text-dojo-200 transition-colors duration-300 flex items-center justify-between group-hover:text-dojo-100">
          <span>{title}</span>
          <div className="h-1.5 w-1.5 rounded-full bg-dojo-300/70 group-hover:bg-dojo-300 transition-all duration-300" style={{
          boxShadow: isHovered ? '0 0 8px rgba(177, 186, 208, 0.5)' : 'none'
        }}></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col p-3 transition-colors duration-300 relative">
        <p className="text-sm text-gray-300 mb-2 leading-relaxed flex-grow transition-colors duration-300">{description}</p>
        {url && <div className="mt-auto pt-1">
            <Button variant="link" className="p-0 h-auto text-dojo-300 hover:text-dojo-200 font-medium flex items-center gap-1 transition-all text-xs group-hover:translate-x-1 duration-300" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {linkText} <ExternalLink size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>}
        
        {/* Decorative elements that show on hover */}
        <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-dojo-300/5 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{
        background: 'radial-gradient(circle at center, rgba(177, 186, 208, 0.1) 0%, rgba(177, 186, 208, 0) 70%)'
      }}></div>
      </CardContent>
    </Card>;
};
export default ProjectCard;