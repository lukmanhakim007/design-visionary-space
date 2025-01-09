import { Button } from "./ui/button";
import { Mail, Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
                  <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Portfolio</a>
                  <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
                  <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;