import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plane, Cloud, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FlightData {
  airline: string;
  source_city: string;
  destination_city: string;
  departure_time: string;
  arrival_time: string;
  day: string;
  stops: string;
  class: string;
  duration: string;
  days_left: string;
  // legacy fields for compatibility
  from?: string;
  to?: string;
}

interface PredictionFormProps {
  onPredict: (data: FlightData) => void;
  isLoading: boolean;
}

const PredictionForm = ({ onPredict, isLoading }: PredictionFormProps) => {
  const [formData, setFormData] = useState<FlightData>({
    airline: "Air_Asia",
    source_city: "Bangalore",
    destination_city: "Bangalore",
    departure_time: "Early_Morning",
    arrival_time: "Early_Morning",
    day: "Monday",
    stops: "zero",
    class: "Economy",
    duration: "",
    days_left: "",
    // legacy fields for compatibility
    from: "",
    to: ""
  });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = formRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2, // -1 to 1
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2, // -1 to 1
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "source_city", "destination_city", "airline", "class", "stops",
      "departure_time", "arrival_time", "day", "duration", "days_left"
    ];

    for (const field of requiredFields) {
      if (!formData[field as keyof FlightData]) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }
    }

    if (formData.source_city === formData.destination_city) {
      toast({
        title: "Invalid Route",
        description: "Departure and destination cities cannot be the same.",
        variant: "destructive",
      });
      return;
    }

    onPredict(formData);
  };

  const airlines = ["AirAsia", "Air_India", "GO_FIRST", "Indigo", "SpiceJet", "Vistara"];
  const cities = ["Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Coimbatore", "Delhi", "Hyderabad", "Jaipur", "Kolkata", "Lucknow", "Mumbai", "Pune"];
  const times = ["Early_Morning", "Morning", "Afternoon", "Evening", "Night", "Late_Night"];
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const stops = ["zero", "one", "two_or_more"];
  const classes = ["Economy", "Business"];

  return (
    <section id="predict" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient-x bg-gradient-to-br from-sky-100 via-orange-100 to-purple-100 opacity-60" />
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-sky-300 to-sky-500 rounded-full opacity-30 blur-2xl animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full opacity-30 blur-2xl animate-float-slower" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full opacity-20 blur-2xl animate-float" />
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={formRef}
          onMouseMove={handleMouseMove}
          className="relative"
        >
          {/* Interactive icons */}
          <Plane
            className="absolute left-10 top-10 text-sky-500 opacity-70 transition-transform duration-300"
            style={{
              transform: `translate(${mouse.x * 20}px, ${mouse.y * 10}px) scale(1.2) rotate(-10deg)`,
              pointerEvents: "none",
              zIndex: 2,
            }}
            size={36}
          />
          <Cloud
            className="absolute right-16 top-20 text-orange-300 opacity-60 transition-transform duration-300"
            style={{
              transform: `translate(${mouse.x * -15}px, ${mouse.y * 8}px) scale(1.1)`,
              pointerEvents: "none",
              zIndex: 2,
            }}
            size={32}
          />
          <Sparkles
            className="absolute left-10 bottom-10 text-purple-400 opacity-50 transition-transform duration-300"
            style={{
              transform: `translate(${mouse.x * 10}px, ${mouse.y * -10}px) scale(1.1)`,
              pointerEvents: "none",
              zIndex: 2,
            }}
            size={28}
          />
          <Plane
            className="absolute right-16 bottom-20 text-sky-500 opacity-70 transition-transform duration-300"
            style={{
              transform: `translate(${mouse.x * 20}px, ${mouse.y * 10}px) scale(1.2) rotate(-10deg)`,
              pointerEvents: "none",
              zIndex: 2,
            }}
            size={36}
          />
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Predict Flight Fare</h2>
            <p className="text-xl text-gray-600">
              Enter your flight details to get an AI-powered fare prediction
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Plane className="h-6 w-6" />
                Flight Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Airline */}
                  <div className="space-y-2">
                    <Label>Airline</Label>
                    <Select value={formData.airline} onValueChange={(value) => setFormData({ ...formData, airline: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select airline" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {airlines.map((airline) => (
                          <SelectItem key={airline} value={airline}>{airline}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Source City */}
                  <div className="space-y-2">
                    <Label>Source City</Label>
                    <Select value={formData.source_city} onValueChange={(value) => setFormData({ ...formData, source_city: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select source city" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Destination City */}
                  <div className="space-y-2">
                    <Label>Destination City</Label>
                    <Select value={formData.destination_city} onValueChange={(value) => setFormData({ ...formData, destination_city: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select destination city" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {cities.map((city) => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Departure Time */}
                  <div className="space-y-2">
                    <Label>Departure Time</Label>
                    <Select value={formData.departure_time} onValueChange={(value) => setFormData({ ...formData, departure_time: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select departure time" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {times.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Arrival Time */}
                  <div className="space-y-2">
                    <Label>Arrival Time</Label>
                    <Select value={formData.arrival_time} onValueChange={(value) => setFormData({ ...formData, arrival_time: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select arrival time" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {times.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Day */}
                  <div className="space-y-2">
                    <Label>Day</Label>
                    <Select value={formData.day} onValueChange={(value) => setFormData({ ...formData, day: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {weekDays.map((day) => (
                          <SelectItem key={day} value={day}>{day}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Stops */}
                  <div className="space-y-2">
                    <Label>Stops</Label>
                    <Select value={formData.stops} onValueChange={(value) => setFormData({ ...formData, stops: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select stops" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {stops.map((stop) => (
                          <SelectItem key={stop} value={stop}>{stop}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Class */}
                  <div className="space-y-2">
                    <Label>Class</Label>
                    <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        {classes.map((cls) => (
                          <SelectItem key={cls} value={cls}>{cls}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <Label>Duration (hrs)</Label>
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="e.g. 2.5"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    />
                  </div>

                  {/* Days Left */}
                  <div className="space-y-2">
                    <Label>Days Left</Label>
                    <Input
                      type="number"
                      placeholder="e.g. 30"
                      value={formData.days_left}
                      onChange={(e) => setFormData({ ...formData, days_left: e.target.value })}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-4 rounded-xl flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Predicting..." : "Predict Flight Fare"}
                  <Plane className="ml-2 h-6 w-6" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
