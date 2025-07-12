
import { Button } from "@/components/ui/button";
import { Plane, Globe, MapPin, Compass, Cloud, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      <div className="absolute inset-0 parallax-bg"></div>
      
      {/* Floating clouds */}
      <div className="floating-clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

      {/* Floating elements with enhanced animations */}
      <div className="absolute top-20 left-10 animate-float plane-path">
        <div className="relative w-20 h-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center glow-effect shadow-lg">
          <Plane className="h-10 w-10 text-sky-600 animate-pulse" />
          <div className="sparkle top-2 left-2"></div>
          <div className="sparkle bottom-2 right-2"></div>
        </div>
      </div>
      
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
          <Globe className="h-8 w-8 text-orange-600 animate-rotate-slow" />
        </div>
      </div>

      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center shadow-lg">
          <MapPin className="h-7 w-7 text-purple-600" />
        </div>
      </div>

      <div className="absolute top-1/2 left-16 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center shadow-lg">
          <Compass className="h-6 w-6 text-teal-600" />
        </div>
      </div>

      <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-18 h-18 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center shadow-lg">
          <Cloud className="h-8 w-8 text-pink-600" />
        </div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Sparkles decoration */}
          <div className="relative mb-8">
            <Sparkles className="absolute -top-4 -left-4 h-8 w-8 text-yellow-400 animate-pulse" />
            <Sparkles className="absolute -top-2 -right-6 h-6 w-6 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="absolute -bottom-2 left-8 h-4 w-4 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-in">
              Predict Your{" "}
              <span className="gradient-text relative">
                Flight Fare
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-300 to-orange-300 rounded-lg blur opacity-25 animate-pulse"></div>
              </span>{" "}
              with AI
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Save time and money with intelligent fare predictions powered by advanced machine learning
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="relative bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Plane className="h-5 w-5" />
                Get Started
              </span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="relative border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="flex items-center gap-2">
                <Globe className="h-5 w-5 group-hover:animate-spin" />
                How It Works
              </span>
            </Button>
          </div>

          {/* Enhanced Stats with animations */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-sky-600 mb-2 group-hover:animate-pulse">96%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
              <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-sky-600 mb-2 group-hover:animate-pulse">10+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-4xl font-bold text-sky-600 mb-2 group-hover:animate-pulse">6+</div>
              <div className="text-gray-600 font-medium">Airlines Covered</div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;