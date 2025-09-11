import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
