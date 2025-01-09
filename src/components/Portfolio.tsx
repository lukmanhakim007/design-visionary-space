import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
  },
  {
    title: "Social Media Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;