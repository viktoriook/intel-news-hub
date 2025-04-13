
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-market-blue text-white relative overflow-hidden"
      id="home"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070')] bg-cover bg-center blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <p className="text-market-light-blue font-medium animate-fade-in animate-delay-1">Your Source For</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            <span className="text-white">Market</span>
            <span className="text-market-light-blue">Intel</span>
            <span className="text-white">News</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto animate-fade-in animate-delay-2">
            Daily Financial News & Insights for the Modern Investor
          </p>
          
          <div className="mt-10 animate-fade-in animate-delay-3">
            <a 
              href="#markets" 
              className="inline-flex items-center bg-market-light-blue hover:bg-opacity-90 text-white py-3 px-8 rounded-md transition-all group"
            >
              Read Latest News 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-market-blue to-transparent"></div>
    </section>
  );
};

export default Hero;
