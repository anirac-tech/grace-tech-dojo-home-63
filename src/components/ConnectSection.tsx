
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users } from "lucide-react";

const ConnectSection = () => {
  return (
    <section className="transition-colors duration-300 relative z-10" id="connect">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4 relative inline-block">
            Connect With Us
            <span className="absolute -bottom-3 left-1/4 right-1/4 h-0.5 bg-dojo-300"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Project Inquiries Column */}
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/30 shadow-2xl hover:shadow-dojo-300/10 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="flex items-center mb-6">
              <div className="bg-dojo-800/80 p-4 rounded-xl mr-4">
                <MessageSquare className="h-6 w-6 text-dojo-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white transition-colors duration-300">
                Discuss Your Project
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 transition-colors duration-300">
              Interested in our development services or want to learn more about how we can help bring your ideas to life? We'd love to hear from you.
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-600 text-white px-8 py-3 h-auto rounded-xl text-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-dojo-700/30">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Community Column */}
          <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/30 shadow-2xl hover:shadow-dojo-300/10 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="flex items-center mb-6">
              <div className="bg-dojo-800/80 p-4 rounded-xl mr-4">
                <Users className="h-6 w-6 text-dojo-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white transition-colors duration-300">
                Join Our Community
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 transition-colors duration-300">
              Are you a developer looking for a supportive community that shares your values? Connect with others who are passionate about growing technically and spiritually.
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-600 text-white px-8 py-3 h-auto rounded-xl text-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-dojo-700/30">
              <Link to="/community">Reach Out</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
