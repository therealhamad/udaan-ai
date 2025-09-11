import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "@/components/AuthModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Find Your Perfect</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Career Path
            </span>
          </h1>

          {/* Tagline */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Discover your ideal career with personalized recommendations, comprehensive courses, 
            and college guidance tailored to your unique strengths and interests.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <AuthModal>
              <Button size="lg" className="group text-base px-8 py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </AuthModal>
            <Link to="/quiz">
              <Button variant="outline" size="lg" className="text-base px-8 py-3">
                Take Career Quiz
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Personalized Assessment</h3>
              <p className="text-sm text-muted-foreground text-center">
                Take our comprehensive quiz to discover careers that match your skills and interests
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-accent/10">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Expert Courses</h3>
              <p className="text-sm text-muted-foreground text-center">
                Access curated courses and learning paths from industry professionals
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">College Guidance</h3>
              <p className="text-sm text-muted-foreground text-center">
                Get recommendations for colleges and programs that align with your career goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;