
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane, TrendingUp, Award, RefreshCw, CheckCircle, Sparkles } from "lucide-react";

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
    if (confidence >= 90) return "from-green-400 to-green-600";
    if (confidence >= 75) return "from-yellow-400 to-yellow-600";
    return "from-red-400 to-red-600";
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 90) return "High Confidence";
    if (confidence >= 75) return "Medium Confidence";
    return "Low Confidence";
  };

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 90) return <CheckCircle className="h-5 w-5" />;
    if (confidence >= 75) return <TrendingUp className="h-5 w-5" />;
    return <Award className="h-5 w-5" />;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-300 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-5xl mx-auto shadow-2xl border-0 animate-bounce-in bg-white/90 backdrop-blur-sm overflow-hidden">
          {/* Enhanced header */}
          <CardHeader className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white rounded-t-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-50 animate-pulse"></div>
            <div className="relative z-10">
              <CardTitle className="text-3xl flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Plane className="h-8 w-8 animate-bounce" />
                </div>
                <span>Prediction Complete!</span>
                <Sparkles className="h-6 w-6 animate-pulse" />
              </CardTitle>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute bottom-4 right-12 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-8 right-20 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </CardHeader>

          <CardContent className="p-10">
            {/* Main fare display with enhanced styling */}
            <div className="text-center mb-10 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="text-7xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse-glow">
                  ₹{result.predictedFare.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Flight details with enhanced cards */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 mb-8 shadow-inner animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                Flight Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Route", value: `${result.flightDetails.from} → ${result.flightDetails.to}`, icon: "🛫" },
                  { label: "Days Left", value: result.flightDetails.days_left, icon: "📅" },
                  { label: "Airline", value: result.flightDetails.airline, icon: "✈️" },
                  { label: "Class", value: result.flightDetails.class, icon: "🎫" },
                  { label: "Stops", value: result.flightDetails.stops, icon: "🔄" },
                  { label: "Time", value: result.flightDetails.timeSlot, icon: "⏰" }
                ].map((detail, index) => (
                  <div 
                    key={detail.label}
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-up border border-gray-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{detail.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-600 text-sm">{detail.label}</div>
                        <div className="font-bold text-gray-800 text-lg">{detail.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action section with enhanced styling */}
            <div className="text-center space-y-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  🎯 This prediction is based on historical data and current market trends. 
                  Actual prices may vary based on availability and booking time.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Powered by AI • 95% Accuracy</span>
                </div>
              </div>
              
              <Button 
                onClick={onNewPrediction}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-6 w-6 group-hover:animate-spin" />
                  <span>Make Another Prediction</span>
                  <Sparkles className="h-5 w-5 animate-pulse" />
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictionResult;