
import InsightCard from './InsightCard';

const insightData = [
  {
    title: "S&P 500 Performance",
    trend: "up",
    percentage: "+2.4%",
    description: "The S&P 500 has shown strong growth over the past month, driven primarily by technology and healthcare sectors.",
    data: [
      { name: 'Jan', value: 4200 },
      { name: 'Feb', value: 4150 },
      { name: 'Mar', value: 4300 },
      { name: 'Apr', value: 4450 },
      { name: 'May', value: 4430 },
      { name: 'Jun', value: 4550 },
      { name: 'Jul', value: 4700 },
    ],
    color: "#64B6AC"
  },
  {
    title: "Treasury Yields",
    trend: "down",
    percentage: "-0.8%",
    description: "10-Year Treasury yields have declined as investors anticipate potential rate cuts in the coming quarters.",
    data: [
      { name: 'Jan', value: 4.2 },
      { name: 'Feb', value: 4.4 },
      { name: 'Mar', value: 4.3 },
      { name: 'Apr', value: 4.1 },
      { name: 'May', value: 3.9 },
      { name: 'Jun', value: 3.7 },
      { name: 'Jul', value: 3.6 },
    ],
    color: "#E76F51"
  },
  {
    title: "Sector Rotation",
    trend: "neutral",
    percentage: "Trending",
    description: "Market rotation from growth to value stocks has accelerated, with financial and energy sectors outperforming.",
    data: [
      { name: 'Tech', value: 3.2 },
      { name: 'Health', value: 2.8 },
      { name: 'Fin', value: 4.1 },
      { name: 'Energy', value: 4.5 },
      { name: 'Cons', value: 2.3 },
      { name: 'Ind', value: 3.7 },
      { name: 'Util', value: 1.9 },
    ],
    color: "#FFB703"
  }
];

const InsightSection = () => {
  return (
    <section className="py-20 bg-market-blue" id="insights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top Investment Insights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Data-driven analysis to help you make informed investment decisions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightData.map((insight, index) => (
            <InsightCard 
              key={index}
              title={insight.title}
              trend={insight.trend as 'up' | 'down' | 'neutral'}
              percentage={insight.percentage}
              description={insight.description}
              data={insight.data}
              color={insight.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
