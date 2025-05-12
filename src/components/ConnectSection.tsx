
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const ConnectSection = () => {
  return <section className="transition-colors duration-300 relative z-10 mt-0" id="connect">
      <div className="container mx-auto px-2 py-0">
        <div className="text-right mb-6">
          <h2 className="heading-reveal text-white mb-4 relative inline-block">
            Connect With Us
            <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-dojo-300"></span>
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 max-w-4xl mx-auto">
          {/* Community Card - Always on left for sm screens and up */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border-2 border-gray-700/50 shadow-2xl hover:shadow-dojo-300/20 transition-all duration-500 hover:translate-y-[-4px] transform-gpu sm:w-1/2 order-2 sm:order-1">
            <div className="flex items-center mb-4">
              <div className="bg-dojo-800/80 p-3 rounded-xl mr-4">
                <Users className="h-5 w-5 text-dojo-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white transition-colors duration-300">
                Join Our Community
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-6 transition-colors duration-300">
              Are you a developer looking for a supportive community that shares your values?
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-600 text-white px-6 py-2 h-auto rounded-xl text-base transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-dojo-700/30">
              <Link to="/community">Reach Out</Link>
            </Button>
          </div>
          
          {/* Project Inquiries Card - Always on right for sm screens and up */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border-2 border-gray-700/50 shadow-2xl hover:shadow-dojo-300/20 transition-all duration-500 hover:translate-y-[-4px] transform-gpu sm:w-1/2 order-1 sm:order-2">
            <div className="flex items-center mb-4 justify-end">
              <h3 className="text-xl font-serif font-semibold text-white transition-colors duration-300 mr-4">
                Discuss Your Project
              </h3>
              <div className="bg-dojo-800/80 p-3 rounded-xl">
                <MessageSquare className="h-5 w-5 text-dojo-300" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-6 transition-colors duration-300 text-right">
              Interested in our development services or want to learn more about how we can help bring your ideas to life?
            </p>
            <div className="text-right">
              <Button asChild className="bg-dojo-700 hover:bg-dojo-600 text-white px-6 py-2 h-auto rounded-xl text-base transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-dojo-700/30">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ConnectSection;
