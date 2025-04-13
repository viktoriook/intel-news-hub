
import { Bot, Sparkles, Search } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const AIIntelligence = () => {
  const [query, setQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on current market trends, technology stocks are showing strong momentum with potential for continued growth in the coming quarter.",
        "Recent economic indicators suggest inflation may be cooling, which could lead to more favorable interest rate policies from central banks.",
        "Market analysis indicates that renewable energy sectors may outperform traditional energy in the next 6-12 months based on policy shifts and investment flows.",
        "Financial data suggests a rotation from growth to value stocks may be imminent as valuations in certain tech sectors reach historical highs."
      ];
      
      setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50" id="ai">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-blue mb-4">AI Market Intelligence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get AI-powered insights and analysis to make smarter investment decisions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Bot className="text-market-light-blue mr-3" size={28} />
              <h3 className="text-xl font-semibold">Financial Analysis Assistant</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about market trends, stock analysis, or investment strategies..."
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-market-light-blue focus:border-transparent"
                />
                <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
              </div>
              <Button 
                type="submit"
                className="w-full mt-4 bg-market-blue hover:bg-opacity-90"
                disabled={isGenerating || !query.trim()}
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <Sparkles className="mr-2 animate-pulse" size={18} />
                    Analyzing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Sparkles className="mr-2" size={18} />
                    Generate Analysis
                  </span>
                )}
              </Button>
            </form>
            
            {aiResponse && (
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <Bot className="text-market-light-blue mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{aiResponse}</p>
                </div>
              </div>
            )}
            
            <div className="mt-6 text-xs text-gray-500">
              <p>AI intelligence is provided for informational purposes only and should not be considered financial advice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntelligence;
