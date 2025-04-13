
import NewsCard from './NewsCard';

const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070',
    title: 'Federal Reserve Signals Potential Rate Cuts in Coming Months',
    description: 'The Federal Reserve has indicated a shift in monetary policy, suggesting that interest rate cuts could be on the horizon as inflation pressures ease and economic growth moderates.',
    category: 'Economy',
    date: 'April 12, 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070',
    title: 'Tech Stocks Rally Amid Positive Earnings Reports',
    description: 'Major technology companies have exceeded market expectations with their latest quarterly earnings, driving a significant rally in the tech sector and pushing the Nasdaq to new record highs.',
    category: 'Markets',
    date: 'April 11, 2025'
  },
  {
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070',
    title: 'Global Supply Chain Issues Show Signs of Improvement',
    description: 'After months of disruption, global supply chains are beginning to normalize, with shipping costs decreasing and delivery times improving, providing relief to manufacturers and retailers.',
    category: 'Industry',
    date: 'April 10, 2025'
  }
];

const LatestNews = () => {
  return (
    <section className="py-20 px-4" id="markets">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-blue mb-4">Latest Market News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the most recent developments in financial markets, economy, and business sectors.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <NewsCard 
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              category={news.category}
              date={news.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
