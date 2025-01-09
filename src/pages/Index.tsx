import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;