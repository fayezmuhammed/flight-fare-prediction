
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane } from "lucide-react";

interface PredictionResultProps {
  result: {
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
  };
  onNewPrediction: () => void;
}

const PredictionResult = ({ result, onNewPrediction }: PredictionResultProps) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return "bg-green-500";
    if (confidence >= 75) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 90) return "High Confidence";
    if (confidence >= 75) return "Medium Confidence";
    return "Low Confidence";
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-xl border-0 animate-fade-in">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Plane className="h-6 w-6" />
              Prediction Result
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-green-600 mb-2">
                ₹{result.predictedFare.toLocaleString()}
              </div>
              <div className="flex items-center justify-center gap-2">
                <Badge className={`${getConfidenceColor(result.confidence)} text-white`}>
                  {getConfidenceText(result.confidence)}
                </Badge>
                <span className="text-gray-600">{result.confidence}% confidence</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Flight Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">Route:</span> {result.flightDetails.from} → {result.flightDetails.to}
                </div>
                <div>
                  <span className="font-medium">Date:</span> {result.flightDetails.date}
                </div>
                <div>
                  <span className="font-medium">Airline:</span> {result.flightDetails.airline}
                </div>
                <div>
                  <span className="font-medium">Class:</span> {result.flightDetails.class}
                </div>
                <div>
                  <span className="font-medium">Stops:</span> {result.flightDetails.stops}
                </div>
                <div>
                  <span className="font-medium">Time:</span> {result.flightDetails.timeSlot}
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-600">
                This prediction is based on historical data and current market trends. 
                Actual prices may vary based on availability and booking time.
              </p>
              <Button 
                onClick={onNewPrediction}
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl"
              >
                Make Another Prediction
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictionResult;
