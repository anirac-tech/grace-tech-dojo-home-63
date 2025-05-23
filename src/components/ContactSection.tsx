
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="contact">
      <div className="container mx-auto px-8 md:px-12 lg:px-24 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-reveal heading-underline text-gray-100 mb-6">
            Contact Us
          </h2>
          <Separator className="w-24 h-0.5 bg-dojo-300 mx-auto mb-10" />
          <p className="text-lg text-gray-300 mb-10 transition-colors duration-300">
            Interested in our work or want to learn more about joining our
            community? We'd love to hear from you.
          </p>
          <Button asChild className="bg-dojo-700 hover:bg-dojo-800 text-white px-8 py-3 rounded-md text-lg">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
