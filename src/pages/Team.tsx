
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6 text-center">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            This page is under development. Check back soon to learn about our team members.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
