
import { Button } from "@/components/ui/button";
import { Plane, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-sky opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
          <Plane className="h-8 w-8 text-sky-600" />
        </div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
          <Globe className="h-6 w-6 text-orange-600" />
        </div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Predict Your{" "}
            <span className="gradient-text">Flight Fare</span>{" "}
            with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Save time and money with intelligent fare predictions powered by advanced machine learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg rounded-xl"
            >
              How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">98%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">10K+</div>
              <div className="text-gray-600">Predictions Made</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">50+</div>
              <div className="text-gray-600">Airlines Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
