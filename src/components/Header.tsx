
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg">
            <Plane className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">FlightFare AI</h1>
          </div>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
