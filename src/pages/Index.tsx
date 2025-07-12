
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PredictionForm from "@/components/PredictionForm";
import PredictionResult from "@/components/PredictionResult";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

interface FlightData {
  from: string;
  to: string;
  date: Date | undefined;
  airline: string;
  class: string;
  stops: string;
  timeSlot: string;
  days_left?: string;
  departure_time?: string;
  arrival_time?: string;
  day?: string;
  duration?: string;
}

interface PredictionResult {
  predictedFare: number;
  confidence: number;
  flightDetails: {
    from: string;
    to: string;
    days_left: string;
    airline: string;
    class: string;
    stops: string;
    timeSlot: string;
  };
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);

  const mockPredict = async (data: FlightData): Promise<PredictionResult> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock prediction logic
    let baseFare = 5000;
    
    // Adjust based on class
    if (data.class === "Business") baseFare *= 3;
    
    // Adjust based on stops
    if (data.stops === "Non-stop") baseFare *= 1.2;
    else if (data.stops === "2+ stops") baseFare *= 0.8;
    
    // Adjust based on airline
    const premiumAirlines = ["Vistara", "Air India"];
    if (premiumAirlines.includes(data.airline)) baseFare *= 1.1;
    
    // Add some randomization
    const randomFactor = 0.8 + Math.random() * 0.4;
    const finalFare = Math.round(baseFare * randomFactor);
    
    // Generate confidence based on various factors
    const confidence = Math.round(85 + Math.random() * 10);
    
    return {
      predictedFare: finalFare,
      confidence,
      flightDetails: {
        from: data.from,
        to: data.to,
        date: data.date?.toLocaleDateString() || "",
        airline: data.airline,
        class: data.class,
        stops: data.stops,
        timeSlot: data.timeSlot
      }
    };
  };

  const handlePredict = async (data: any) => {
    setIsLoading(true);
    setPredictionResult(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();

      setPredictionResult({
        predictedFare: result.fare,
        confidence: 90, // You can adjust this if your backend returns confidence
        flightDetails: {
          from: data.source_city,
          to: data.destination_city,
          days_left: data.days_left,
          airline: data.airline,
          class: data.class,
          stops: data.stops,
          timeSlot: `${data.departure_time} - ${data.arrival_time}`,
        }
      });

      toast({
        title: "Prediction Complete!",
        description: `Estimated fare: ₹${result.fare.toLocaleString()}`,
      });

      // Scroll to result
      setTimeout(() => {
        const resultElement = document.querySelector('#prediction-result');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error("Prediction error:", error);
      toast({
        title: "Prediction Failed",
        description: "Unable to get fare prediction. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewPrediction = () => {
    setPredictionResult(null);
    // Scroll back to form
    const formElement = document.querySelector('#predict');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PredictionForm onPredict={handlePredict} isLoading={isLoading} />
      
      {predictionResult && (
        <div id="prediction-result">
          <PredictionResult 
            result={predictionResult} 
            onNewPrediction={handleNewPrediction}
          />
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
