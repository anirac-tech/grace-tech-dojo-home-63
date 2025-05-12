
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Community = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit to a backend
    console.log("Form submitted:", formData);
    toast.success("Thank you for your interest! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-100 mb-6 text-center heading-reveal">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Connect with a community of faith-driven developers committed to excellence in craft and character.
          </p>
          
          <div className="max-w-3xl mx-auto bg-gray-800/90 p-8 rounded-lg shadow-sm border border-gray-700/30">
            <h2 className="heading-reveal heading-card">
              Express Your Interest
            </h2>
            <Separator className="mb-6" />
            <p className="text-gray-300 mb-6">
              Fill out this brief interest form, and we'll get back to you about getting involved with GraceTechDojo.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-gray-700/50 border-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full bg-gray-700/50 border-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Tell us about yourself and why you're interested
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a bit about your background, skills, interests, and how you'd like to contribute or benefit from our community..."
                  required
                  className="min-h-[150px] bg-gray-700/50 border-gray-600"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-dojo-700 hover:bg-dojo-800 text-white w-full md:w-auto"
              >
                Submit Interest Form
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;
