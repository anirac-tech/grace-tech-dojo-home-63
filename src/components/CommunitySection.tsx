
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CommunitySection = () => {
  return (
    <section className="bg-white" id="community">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Are you a developer or aspiring developer looking for a supportive
            community that shares your values? GraceTechDojo welcomes those
            interested in growing both technically and spiritually.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            This is a values-driven collaborative space where we encourage one
            another in our craft and character. If you're aligned in spirit and
            purpose, we'd love to connect with you.
          </p>
          <Button asChild className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg">
            <Link to="/community">Connect With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
