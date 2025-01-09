import { Card, CardContent } from "./ui/card";
import { Code, Smartphone, Palette } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices",
    icon: Code,
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that engage and convert",
    icon: Palette,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;