import { useState, useEffect } from "react";
import { TrendingUp, Globe, AlertCircle } from "lucide-react";

const trendingTopics = [
  { id: 1, title: "Global Climate Action Summit 2025", category: "Environment", urgent: false },
  { id: 2, title: "AI Regulation Bills in US Congress", category: "Technology", urgent: true },
  { id: 3, title: "Bird Flu H5N1 Pandemic Concerns", category: "Health", urgent: true },
  { id: 4, title: "Mexico's New Energy Industrial Plan", category: "Economics", urgent: false },
  { id: 5, title: "International UFO Investigation Reports", category: "Science", urgent: false },
  { id: 6, title: "Legal Tech Integration in Courts", category: "Legal", urgent: false },
];

export function TrendingTopicsBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingTopics.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentTopic = trendingTopics[currentIndex];

  return (
    <div className="bg-gradient-to-r from-accent-blue/10 via-accent-blue/5 to-transparent border-b border-accent-blue/20 py-2 px-6 animate-fade-in-up">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent-blue animate-pulse" />
            <span className="text-sm font-medium text-text-primary">Trending Now:</span>
          </div>
          
          <div className="flex items-center gap-2">
            {currentTopic.urgent && (
              <AlertCircle className="w-3 h-3 text-warning animate-pulse" />
            )}
            <span className="text-sm text-text-primary font-medium">
              {currentTopic.title}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              currentTopic.category === 'Health' ? 'bg-warning/20 text-warning' :
              currentTopic.category === 'Technology' ? 'bg-accent-blue/20 text-accent-blue' :
              currentTopic.category === 'Legal' ? 'bg-primary/20 text-primary' :
              currentTopic.category === 'Environment' ? 'bg-success/20 text-success' :
              'bg-text-secondary/20 text-text-secondary'
            }`}>
              {currentTopic.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3 text-text-tertiary" />
            <span className="text-xs text-text-tertiary">Live Updates</span>
          </div>
          
          <div className="flex gap-1">
            {trendingTopics.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent-blue' : 'bg-text-tertiary/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-text-tertiary hover:text-text-secondary transition-colors text-xs"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}