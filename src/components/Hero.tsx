import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-primary">
      <div className="container mx-auto px-6 animate-fade-up">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Turning Ideas Into
            <span className="text-primary"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Web Design • UI/UX Design • Mobile Development
          </p>
          <Button 
            className="bg-primary hover:bg-primary-dark text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;