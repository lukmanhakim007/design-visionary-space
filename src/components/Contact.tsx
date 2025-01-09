import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Let's <span className="text-primary">Connect</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Email Us</h3>
            </div>
            <p className="text-gray-600 mb-4">Get in touch via email for any inquiries</p>
            <Button className="w-full bg-primary hover:bg-primary-dark">
              Send Email
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Call Us</h3>
            </div>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <Button className="w-full bg-primary hover:bg-primary-dark">
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;