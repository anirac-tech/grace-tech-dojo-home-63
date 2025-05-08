
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const ConnectSection = () => {
  return (
    <section className="bg-gray-50" id="connect">
      <div className="container mx-auto px-8 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6">
            Connect With Us
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Project Inquiries Column */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
              Discuss Your Project
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Interested in our development services or want to learn more about how we can help bring your ideas to life? We'd love to hear from you.
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          {/* Community Column */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">
              Join Our Community
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Are you a developer looking for a supportive community that shares your values? Connect with others who are passionate about growing technically and spiritually.
            </p>
            <Button asChild className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg">
              <Link to="/community">Reach Out</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
