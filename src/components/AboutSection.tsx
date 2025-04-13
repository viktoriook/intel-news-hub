
const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute w-full h-full rounded-full bg-market-blue opacity-10 top-4 left-4"></div>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071"
                alt="About MarketIntelNews"
                className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-market-blue mb-6">About Us</h2>
            <p className="text-gray-700 mb-4">
              MarketIntelNews was founded in 2020 by a team of experienced financial analysts and journalists with a passion for delivering accurate, insightful, and timely market information to investors worldwide.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to empower investors with high-quality financial news, data-driven insights, and expert analysis that helps them make informed decisions in an increasingly complex global market.
            </p>
            <p className="text-gray-700">
              We pride ourselves on our editorial independence, analytical rigor, and commitment to presenting balanced perspectives on market developments, economic trends, and investment opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
