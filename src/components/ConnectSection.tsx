
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Users } from "lucide-react";

const ConnectSection = () => {
  return (
    <section className="transition-colors duration-300 pt-8 md:pt-12" id="connect">
      <div className="container mx-auto px-8 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
            Connect With Us
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Project Inquiries Column */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:translate-y-[-2px]">
            <div className="flex items-center mb-6">
              <div className="bg-dojo-50 dark:bg-dojo-900/30 p-3 rounded-full mr-4">
                <MessageSquare className="h-6 w-6 text-dojo-600 dark:text-dojo-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                Discuss Your Project
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Interested in our development services or want to learn more about how we can help bring your ideas to life? We'd love to hear from you.
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Community Column */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:translate-y-[-2px]">
            <div className="flex items-center mb-6">
              <div className="bg-dojo-50 dark:bg-dojo-900/30 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-dojo-600 dark:text-dojo-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                Join Our Community
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Are you a developer looking for a supportive community that shares your values? Connect with others who are passionate about growing technically and spiritually.
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/community">Reach Out</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
